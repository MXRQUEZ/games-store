import { FC } from "react";
import classes from "@/components/ui/forms/form.module.scss";

interface IFormInputProps {
  label: string;
}
const FormInput: FC<IFormInputProps> = ({ label, ...props }) => (
  <div className={classes.input__container}>
    <input className={classes.input} required autoComplete="off" type="text" {...props} />
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label className={classes.input__label} htmlFor={classes.input}>
      {label}
    </label>
  </div>
);

export default FormInput;
