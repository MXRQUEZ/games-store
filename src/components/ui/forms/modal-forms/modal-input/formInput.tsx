import { FC } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { v4 as getUniqueId } from "uuid";
import classes from "@/components/ui/forms/modal-forms/formModal.module.scss";
import { defaultErrorMessage } from "@/constants/constants";

interface IFormInputProps {
  label: string;
  iconClass: string;
  type?: string;
  errors: FieldErrors;
  register: UseFormRegisterReturn;
}

const FormInput: FC<IFormInputProps> = ({ label, iconClass, type, register, errors }) => {
  const errorMessage: JSX.Element = errors[register.name] && (
    <span role="alert">{errors[register.name]?.message || defaultErrorMessage}</span>
  );
  const inputUniqueId = getUniqueId();

  return (
    <>
      <div className={classes.input__container}>
        <input id={inputUniqueId} className={classes.input} required autoComplete="off" type={type} {...register} />
        <label className={classes.input__label} htmlFor={inputUniqueId}>
          {label}
        </label>
        <i className={iconClass} aria-hidden />
      </div>
      <div className={classes.error}>{errorMessage}</div>
    </>
  );
};

FormInput.defaultProps = {
  type: "text",
};

export default FormInput;
