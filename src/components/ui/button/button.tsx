import { FC } from "react";
import classes from "@/components/ui/button/button.module.scss";

interface IButtonProps {
  text: string;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({ text, disabled }) => (
  <div className={classes.button__container}>
    <button
      type="submit"
      disabled={disabled}
      className={disabled ? `${classes.button} ${classes.disabled}` : classes.button}
    >
      {text}
    </button>
  </div>
);

Button.defaultProps = {
  disabled: false,
};

export default Button;
