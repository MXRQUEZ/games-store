import { FC } from "react";
import classes from "./select.module.scss";

interface ISelectProps {
  id?: string;
  options: string[];
}
const Select: FC<ISelectProps> = ({ options, id }) => (
  <div id={id} className={classes.select__container}>
    <select className={classes.select}>
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
};

export default Select;
