import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./select.module.scss";

interface ISelectProps {
  id?: string;
  defaultValue?: string;
  options: string[];
  register?: UseFormRegisterReturn;
}
const Select: FC<ISelectProps> = ({ options, id, defaultValue, register }) => (
  <div id={id} className={classes.select__container}>
    <select className={classes.select} defaultValue={defaultValue} {...register}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

Select.defaultProps = {
  id: undefined,
  defaultValue: undefined,
  register: undefined,
};

export default Select;
