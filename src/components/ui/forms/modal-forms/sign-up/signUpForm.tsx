import { FC, memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/button/button";
import classes from "../formModal.module.scss";
import FormInput from "@/components/ui/forms/modal-forms/modal-input/formInput";
import IUser from "@/types/iUser";
import {
  loginIconClass,
  loginLabel,
  loginLengthMessage,
  loginMaxLength,
  loginMinLength,
  passwordIconClass,
  passwordLabel,
  passwordLengthMessage,
  passwordMinLength,
  passwordRepeatLabel,
  passwordRepeatMessage,
  requiredFieldMessage,
  userExistsMessage,
} from "@/constants/constants";
import useActions from "@/hooks/redux/useActions";
import { createUser } from "@/shared/utils/apiRequests";

const SignUpForm: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
    getValues,
  } = useForm<IUser>({
    mode: "onChange",
  });

  const { signIn, signUpModalClose } = useActions();
  const router = useNavigate();
  const onSubmit: SubmitHandler<IUser> = async (userData: IUser) => {
    const newUser = await createUser(userData);

    if (newUser) {
      signIn(newUser);
      signUpModalClose();
      reset();
      router("/profile");
      return;
    }

    setError(loginLabel, {
      type: "manual",
      message: userExistsMessage,
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={classes.title}>Registration</h4>
      <FormInput
        label={loginLabel}
        iconClass={loginIconClass}
        register={register(loginLabel, {
          required: requiredFieldMessage,
          maxLength: {
            value: loginMaxLength,
            message: loginLengthMessage,
          },
          minLength: {
            value: loginMinLength,
            message: loginLengthMessage,
          },
        })}
        errors={errors}
      />
      <FormInput
        label={passwordLabel}
        iconClass={passwordIconClass}
        type="password"
        register={register(passwordLabel, {
          required: requiredFieldMessage,
          minLength: {
            value: passwordMinLength,
            message: passwordLengthMessage,
          },
        })}
        errors={errors}
      />
      <FormInput
        label={passwordRepeatLabel}
        iconClass={passwordIconClass}
        type="password"
        register={register("passwordRepeat", {
          required: requiredFieldMessage,
          validate: (value) => value === getValues().password || passwordRepeatMessage,
        })}
        errors={errors}
      />
      <Button disabled={!isValid} text="Sign Up" />
    </form>
  );
};

export default memo(SignUpForm);
