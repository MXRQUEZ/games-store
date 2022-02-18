import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/button/button";
import classes from "../form.module.scss";
import FormInput from "@/components/ui/forms/formInput/formInput";
import IUser from "@/types/iUser";
import IAuthFormProps from "@/types/iAuthFormProps";
import {
  loginIconClass,
  loginLabel,
  loginLengthMessage,
  loginMaxLength,
  passwordIconClass,
  passwordLabel,
  passwordLengthMessage,
  passwordMinLength,
  passwordRepeatLabel,
  passwordRepeatMessage,
  requiredFieldMessage,
} from "@/constants/constants";

const SignUpForm: FC<IAuthFormProps> = ({ setAuth, setModalVisible, setUserName }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    getValues,
  } = useForm<IUser>({
    mode: "onBlur",
  });

  const router = useNavigate();
  const onSubmit: SubmitHandler<IUser> = (userData: IUser) => {
    setAuth(true);
    setUserName(userData.login);
    setModalVisible(false);
    reset();
    router("/profile");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={classes.auth}>Registration</h4>
      <FormInput
        label={loginLabel}
        iconClass={loginIconClass}
        register={register(loginLabel, {
          required: requiredFieldMessage,
          maxLength: {
            value: loginMaxLength,
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

export default SignUpForm;
