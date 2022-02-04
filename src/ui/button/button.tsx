import { FC } from "react";
import classes from "@/ui/button/button.module.scss";

const Button: FC = ({ children }) => (
  <div className={classes.button__container}>
    <button type="submit" className={classes.button}>
      {children}
    </button>
  </div>
);

export default Button;
