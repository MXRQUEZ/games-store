import { FC, useEffect, useState } from "react";
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
import Spinner from "@/components/ui/spinner/spinner";

const SignInForm: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm<IUser>({
    mode: "onChange",
  });

  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const { signInModalClose, signIn } = useActions();
  const router = useNavigate();
  const location = useLocation();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (isAuth) {
      setSpinner(false);
      signInModalClose();
      const state = location.state as { from: Location };
      const from = state ? state.from.pathname : "/";
      router(from, { replace: true });
      setTimeout(() => {
        reset();
      }, 1000);
    }
  }, [isAuth]);

  const onSubmit: SubmitHandler<IUser> = (userData: IUser) => {
    signIn(userData);

    setSpinner(true);
    setTimeout(() => {
      if (!isAuth) {
        setError(loginLabel, {
          type: "manual",
          message: userInvalidMessage,
        });

        setError(passwordLabel, {
          type: "manual",
          message: userInvalidMessage,
        });
        setSpinner(false);
      }
    }, 1000);
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
      {spinner && <Spinner />}
      <Button disabled={!isValid} text="Sign In" />
    </form>
  );
};

export default SignInForm;
