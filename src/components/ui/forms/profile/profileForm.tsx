import { ChangeEvent, FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import IUser from "@/types/iUser";
import useActions from "@/hooks/redux/useActions";
import { saveProfile } from "@/shared/utils/apiRequests";
import Button from "@/components/ui/button/button";
import classes from "./profile.module.scss";
import {
  defaultErrorMessage,
  descriptionLengthMessage,
  descriptionMaxLength,
  descriptionMinLength,
  usernameLengthMessage,
  usernameMaxLength,
  usernameMinLength,
} from "@/constants/constants";
import ChangePasswordForm from "@/components/ui/forms/modal-forms/change-password/changePasswordForm";

interface IProfileForm {
  user: IUser;
}

const ProfileForm: FC<IProfileForm> = ({ user }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<Pick<IUser, "username" | "description" | "profilePicture">>({
    mode: "onSubmit",
  });

  const defaultAvatarUrl = "https://winnote.ru/wp-content/uploads/2016/01/1454222417_del_recent_avatar1.png";
  const userImage = user?.profilePicture || defaultAvatarUrl;
  const [profilePic, setProfilePic] = useState<string>(userImage);
  const { signIn } = useActions();

  const onSubmit: SubmitHandler<Pick<IUser, "username" | "description" | "profilePicture">> = async (
    userData: Pick<IUser, "username" | "description" | "profilePicture">
  ) => {
    if (userData.username || userData.description || userData.profilePicture) {
      const updatedUser = await saveProfile({
        id: user.id,
        username: userData.username || user.username,
        description: userData.description || user.description,
        profilePicture: profilePic || user.profilePicture,
      });

      console.log(profilePic);
      console.log(updatedUser);

      signIn(updatedUser);
      reset();
      return;
    }

    setError("username", {
      type: "manual",
      message: "At least one field required",
    });

    setError("profilePicture", {
      type: "manual",
      message: "At least one field required",
    });

    setError("description", {
      type: "manual",
      message: "At least one field required",
    });
  };

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    const fileUrl = window.URL.createObjectURL(file);
    setProfilePic(fileUrl);
  };

  return (
    <form className={classes.profile} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.profile__image}>
        <img className={classes.image} src={profilePic} alt="user pfp" />
        <input
          id="profilePicture"
          type="file"
          accept="image/*"
          {...register("profilePicture", { required: false })}
          onChange={handleFiles}
        />
        <div className={classes.error}>
          {errors?.profilePicture && <span role="alert">{errors.profilePicture?.message || defaultErrorMessage}</span>}
        </div>
      </div>
      <div className={classes.profile__fields}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="username" className={classes.label}>
          Username
        </label>
        <input
          id="username"
          className={classes.username__input}
          autoComplete="off"
          placeholder={user.username || user.login}
          {...register("username", {
            required: false,
            maxLength: {
              value: usernameMaxLength,
              message: usernameLengthMessage,
            },
            minLength: {
              value: usernameMinLength,
              message: usernameLengthMessage,
            },
          })}
        />
        <div className={classes.error}>
          {errors?.username && <span role="alert">{errors.username?.message || defaultErrorMessage}</span>}
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="description" className={classes.label}>
          Description
        </label>
        <textarea
          id="description"
          className={classes.description__textarea}
          autoComplete="off"
          placeholder={user.description || "Describe yourself in 150 symbols"}
          {...register("description", {
            required: false,
            maxLength: {
              value: descriptionMaxLength,
              message: descriptionLengthMessage,
            },
            minLength: descriptionMinLength,
          })}
        />
        <div className={classes.error}>
          {errors?.description && <span role="alert">{errors.description?.message || defaultErrorMessage}</span>}
        </div>
      </div>
      <div className={classes.profile__buttons}>
        <Button text="Save Changes" />
        <ChangePasswordForm />
      </div>
    </form>
  );
};

export default ProfileForm;
