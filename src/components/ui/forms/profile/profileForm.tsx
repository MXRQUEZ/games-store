import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import IUser from "@/types/iUser";
import { saveProfile } from "@/shared/utils/apiRequests";
import Button from "@/components/ui/button/button";
import classes from "./profile.module.scss";
import { defaultErrorMessage, loginLengthMessage, loginMaxLength, loginMinLength } from "@/constants/constants";
import ChangePasswordForm from "@/components/ui/forms/modal-forms/change-password/changePasswordForm";
import useTypedSelector from "@/hooks/redux/useTypedSelector";

const ProfileForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset,
  } = useForm<Pick<IUser, "username" | "description" | "profilePicture">>({
    mode: "onSubmit",
  });

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const user = useTypedSelector((state) => state.auth.user!);
  const onSubmit: SubmitHandler<Pick<IUser, "username" | "description" | "profilePicture">> = async (
    userData: Pick<IUser, "username" | "description" | "profilePicture">
  ) => {
    if (userData.username || userData.description || userData.profilePicture) {
      await saveProfile({
        id: user.id,
        username: userData.username || user.username,
        description: userData.description || user.description,
      });

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

  const defaultAvatarUrl = "https://winnote.ru/wp-content/uploads/2016/01/1454222417_del_recent_avatar1.png";
  const userImage = user?.profilePicture || defaultAvatarUrl;

  return (
    <form className={classes.profile} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <img src={userImage} alt="user pfp" />
        <input
          id="profilePicture"
          type="file"
          {...register("profilePicture", {
            required: false,
          })}
        />
        <div className={classes.error}>
          {errors?.profilePicture && <span role="alert">{errors.profilePicture?.message || defaultErrorMessage}</span>}
        </div>
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
          placeholder={user.username || user.login}
          {...register("username", {
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
