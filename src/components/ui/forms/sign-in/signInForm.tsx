import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/ui/button/button";
import classes from "../form.module.scss";
import FormInput from "@/components/ui/forms/formInput/formInput";
import IUser from "@/types/iUser";
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
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import useActions from "@/hooks/redux/useActions";

const SignInForm: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm<IUser>({
    mode: "onChange",
  });

  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const { signInModalClose, signIn } = useActions();
  const router = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuth) {
      clearErrors();
      reset();
      signInModalClose();

      const state = location.state as { from: Location };
      const from = state ? state.from.pathname : "/";
      router(from, { replace: true });
    }
  }, [isAuth]);

  const onSubmit: SubmitHandler<IUser> = (userData: IUser) => {
    signIn(userData);

    if (!isAuth) {
      setError(loginLabel, {
        type: "manual",
        message: userInvalidMessage,
      });

      setError(passwordLabel, {
        type: "manual",
        message: userInvalidMessage,
      });
    }
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
