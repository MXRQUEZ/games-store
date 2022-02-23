import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import IUser from "@/types/iUser";
import useActions from "@/hooks/redux/useActions";
import { saveProfile } from "@/shared/utils/apiRequests";
import Button from "@/components/ui/button/button";
import classes from "./profile.module.scss";

import {
  defaultErrorMessage,
  loginLabel,
  loginLengthMessage,
  loginMaxLength,
  loginMinLength,
} from "@/constants/constants";
import ChangePasswordForm from "@/components/ui/forms/modal-forms/change-password/changePasswordForm";

interface IProfileFormProps {
  profile: IUser;
  setProfile: React.Dispatch<React.SetStateAction<IUser>>;
}

const ProfileForm: FC<IProfileFormProps> = ({ profile, setProfile }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Pick<IUser, "login" | "description" | "avatar">>({
    mode: "onSubmit",
  });

  const { signIn } = useActions();
  const onSubmit: SubmitHandler<Pick<IUser, "login" | "description" | "avatar">> = async (
    userData: Pick<IUser, "login" | "description" | "avatar">
  ) => {
    await saveProfile(userData);
    const newProfile: IUser = {
      login: userData.login || profile.login,
      password: profile.password,
      description: userData.description,
    };
    setProfile(newProfile);
    console.log(profile);
    console.log(userData.avatar);
    userData.login && signIn(userData.login);
    reset();
  };

  const defaultAvatarUrl = "https://winnote.ru/wp-content/uploads/2016/01/1454222417_del_recent_avatar1.png";
  const userImage = profile?.avatar || defaultAvatarUrl;

  return (
    <form className={classes.profile} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <img src={userImage} alt="user pfp" />
        <input
          id="avatar"
          type="file"
          {...register("avatar", {
            required: false,
          })}
        />
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="username" className={classes.label}>
          Username
        </label>
        <input
          id="username"
          className={classes.username__input}
          autoComplete="off"
          placeholder={profile?.login || "username"}
          {...register(loginLabel, {
            required: false,
            maxLength: {
              value: loginMaxLength,
              message: loginLengthMessage,
            },
            minLength: {
              value: loginMinLength,
              message: loginLengthMessage,
            },
          })}
        />
        <div className={classes.error}>
          {errors?.login && <span role="alert">{errors.login?.message || defaultErrorMessage}</span>}
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="description" className={classes.label}>
          Description
        </label>
        <textarea
          id="description"
          className={classes.description__textarea}
          autoComplete="off"
          placeholder={profile.description || "Describe yourself in 150 symbols"}
          {...register("description", {
            required: false,
            maxLength: {
              value: 150,
              message: "Description max len is 150",
            },
            minLength: 1,
          })}
        />
        <div className={classes.error}>
          {errors?.description && <span role="alert">{errors.description?.message || defaultErrorMessage}</span>}
        </div>
      </div>
      <div>
        <Button text="Save Changes" />
        <ChangePasswordForm />
      </div>
    </form>
  );
};

export default ProfileForm;
