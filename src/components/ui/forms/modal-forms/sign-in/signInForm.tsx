import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
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
  requiredFieldMessage,
  userInvalidMessage,
} from "@/constants/constants";
import useActions from "@/hooks/redux/useActions";
import { authorize } from "@/shared/utils/apiRequests";

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

  const { signInModalClose, signIn } = useActions();
  const router = useNavigate();
  const location = useLocation();

  const onSubmit: SubmitHandler<IUser> = async (userData: IUser) => {
    const user = await authorize(userData);
    if (user) {
      signIn(user);
      signInModalClose();
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
      <h4 className={classes.title}>Authorization</h4>
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
      <Button disabled={!isValid} text="Sign In" />
    </form>
  );
};

export default SignInForm;
