import React, { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
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
  requiredFieldMessage,
  userInvalidMessage,
} from "@/constants/constants";
import { authSignIn } from "@/shared/utils/apiRequests";
import IUser from "@/types/iUser";

interface ISignInFormProps {
  setAuth: (authState: boolean) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const SignInForm: FC<ISignInFormProps> = ({ setAuth, setModalVisible, setUserName }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = data as IUser;
    const isUserValid = await authSignIn(userData);
    if (isUserValid) {
      setAuth(true);
      reset();
      setUserName(userData.login);
      setModalVisible(false);
      return;
    }

    setError(loginLabel, {
      type: "manual",
      message: userInvalidMessage,
    });

    setError(passwordLabel, {
      type: "manual",
      message: userInvalidMessage,
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={classes.auth}>Authorization</h4>
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
      <Button disabled={!isValid} text="Sign In" />
    </form>
  );
};

export default SignInForm;
