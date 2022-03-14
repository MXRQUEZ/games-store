import { FC, memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import IUser from "@/types/iUser";
import useActions from "@/hooks/redux/useActions";
import { saveProfile } from "@/shared/utils/apiRequests";
import Button from "@/components/ui/button/button";
import classes from "./profile.module.scss";
import {
  defaultErrorMessage,
  profileDescMaxLen,
  descriptionMinLen,
  usernameLengthMessage,
  usernameMaxLength,
  usernameMinLength,
} from "@/constants/constants";
import ChangePasswordForm from "@/components/ui/forms/modal-forms/change-password/changePasswordForm";
import ProfilePicture from "@/components/ui/forms/profile/profilePicture";
import images from "@/constants/images";

interface IProfileForm {
  user: IUser;
}

type UserProfile = Pick<IUser, "username" | "description" | "profilePicture">;

const ProfileForm: FC<IProfileForm> = ({ user }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<UserProfile>({
    mode: "onSubmit",
  });

  const userImage = user?.profilePicture || images.defaultProfilePic.path;
  const [profilePic, setProfilePic] = useState<string>(userImage);
  const { signIn } = useActions();

  const onSubmitSaveChanges: SubmitHandler<UserProfile> = async (userData: UserProfile) => {
    if (userData.username || userData.description || profilePic !== userImage) {
      const updatedUser = await saveProfile({
        id: user.id,
        username: userData.username || user.username,
        description: userData.description || user.description,
        profilePicture: profilePic || user.profilePicture,
      });

      signIn(updatedUser);
      alert("Changes were saved!");
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

  return (
    <form className={classes.profile} onSubmit={handleSubmit(onSubmitSaveChanges)}>
      <ProfilePicture
        errors={errors}
        register={register("profilePicture")}
        profilePic={profilePic}
        setProfilePic={setProfilePic}
      />
      <div className={classes.profile__fields}>
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
        <label htmlFor="profile_description" className={classes.label}>
          Description
        </label>
        <textarea
          id="profile_description"
          className={classes.description__textarea}
          autoComplete="off"
          maxLength={profileDescMaxLen}
          placeholder={user.description || "Describe yourself in 150 symbols"}
          {...register("description", {
            required: false,
            minLength: descriptionMinLen,
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

export default memo(ProfileForm);
