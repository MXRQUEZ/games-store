import { FC } from "react";
import classes from "./select.module.scss";

interface ISelectProps {
  options: string[];
}
const Select: FC<ISelectProps> = ({ options }) => (
  <div className={classes.select__container}>
    <select className={classes.select}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
