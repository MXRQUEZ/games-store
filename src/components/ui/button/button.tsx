import { FC } from "react";
import classes from "@/components/ui/button/button.module.scss";

interface IButtonProps {
  text: string;
}

const Button: FC<IButtonProps> = ({ text }) => (
  <div className={classes.button__container}>
    <button type="submit" className={classes.button}>
      {text}
    </button>
  </div>
);

export default Button;
