import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/ui/button/button";
import classes from "../form.module.scss";
import FormInput from "@/components/ui/forms/formInput/formInput";
import { authSignIn } from "@/shared/utils/apiRequests";
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
  requiredFieldMessage,
  userInvalidMessage,
} from "@/constants/constants";

const SignInForm: FC<IAuthFormProps> = ({ setAuth, setModalVisible, setUserName }) => {
  const router = useNavigate();
  const location = useLocation();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm<IUser>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IUser> = async (userData: IUser) => {
    const isUserValid = await authSignIn(userData);

    if (isUserValid) {
      setAuth(true);
      setUserName(userData.login);
      setModalVisible(false);
      reset();

      const state = location.state as { from: Location };
      const from = state ? state.from.pathname : "/";
      router(from, { replace: true });
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
