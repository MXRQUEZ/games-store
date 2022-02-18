import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@/components/ui/button/button";
import classes from "../form.module.scss";
import FormInput from "@/components/ui/forms/formInput/formInput";
import { authorize } from "@/shared/utils/apiRequests";
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
import { signIn } from "@/store/actions/auth";
import { signInModalClose } from "@/store/actions/modals";

const SignInForm: FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setError,
  } = useForm<IUser>({
    mode: "onBlur",
  });

  const dispatch = useDispatch();
  const router = useNavigate();
  const location = useLocation();
  const onSubmit: SubmitHandler<IUser> = async (userData: IUser) => {
    const isUserValid = await authorize(userData);

    if (isUserValid) {
      dispatch(signIn(userData));
      dispatch(signInModalClose());
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
