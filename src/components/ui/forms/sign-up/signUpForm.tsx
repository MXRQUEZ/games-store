import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/button/button";
import classes from "../form.module.scss";

interface ISignUpFormProps {
  setAuth: (authState: boolean) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpForm: FC<ISignUpFormProps> = ({ setAuth, setModalVisible }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    setAuth(true);
    setModalVisible(false);
  };

  const defaultErrorMessage = "Error!";
  const requiredFieldMessage = "This field is required!";
  const passwordMinLength = 6;
  const loginMaxLength = 20;

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={classes.auth}>Registration</h4>
      <div className={classes.input__container}>
        <input
          className={classes.input}
          required
          autoComplete="off"
          type="text"
          {...register("login", {
            required: requiredFieldMessage,
            maxLength: {
              value: loginMaxLength,
              message: `Max login length is ${loginMaxLength} symbols`,
            },
          })}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={classes.input__label} htmlFor={classes.input}>
          Login
        </label>
      </div>
      <div className={classes.error}>{errors?.login && <p>{errors?.login?.message || defaultErrorMessage}</p>}</div>
      <div className={classes.input__container}>
        <input
          className={classes.input}
          required
          autoComplete="off"
          type="password"
          {...register("password", {
            required: requiredFieldMessage,
            minLength: {
              value: passwordMinLength,
              message: `Min password length is ${passwordMinLength} symbols`,
            },
          })}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={classes.input__label} htmlFor={classes.input}>
          Password
        </label>
      </div>
      <div className={classes.error}>
        {errors?.password && <p>{errors?.password?.message || defaultErrorMessage}</p>}
      </div>
      <Button disabled={!isValid} text="Sign Up" />
    </form>
  );
};

export default SignUpForm;
