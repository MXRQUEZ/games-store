import { FC } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import classes from "@/components/ui/forms/form.module.scss";
import { defaultErrorMessage } from "@/constants/constants";

interface IFormInputProps {
  label: string;
  iconClass: string;
  type?: string;
  errors: FieldErrors;
  register: UseFormRegisterReturn;
}

const FormInput: FC<IFormInputProps> = ({ label, iconClass, type, register, errors }) => (
  <>
    <div className={classes.input__container}>
      <input className={classes.input} required autoComplete="off" type={type} {...register} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={classes.input__label} htmlFor={classes.input}>
        {label}
      </label>
      <i className={iconClass} aria-hidden />
    </div>
    <div className={classes.error}>
      {errors[register.name] && <p>{errors[register.name]?.message || defaultErrorMessage}</p>}
    </div>
  </>
);

FormInput.defaultProps = {
  type: "text",
};

export default FormInput;
