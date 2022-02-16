import React, { FC, useRef } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/button/button";
import classes from "../form.module.scss";
import FormInput from "@/components/ui/forms/formInput/formInput";
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
import IUser from "@/types/iUser";

interface ISignUpFormProps {
  setAuth: (authState: boolean) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const SignUpForm: FC<ISignUpFormProps> = ({ setAuth, setModalVisible, setUserName }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  const passwordRef = useRef({});
  passwordRef.current = watch(passwordLabel, "");

  const router = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = data as IUser;
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
        register={register(passwordRepeatLabel, {
          required: requiredFieldMessage,
          validate: (value) => value === passwordRef.current || passwordRepeatMessage,
        })}
        errors={errors}
      />
      <Button disabled={!isValid} text="Sign Up" />
    </form>
  );
};

export default SignUpForm;
