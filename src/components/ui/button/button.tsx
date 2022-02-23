import { FC } from "react";
import classes from "@/components/ui/button/button.module.scss";

interface IButtonProps {
  text: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ text, disabled = false, type = "submit", onClick }) => (
  <div className={classes.button__container}>
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      disabled={disabled}
      className={disabled ? `${classes.button} ${classes.disabled}` : classes.button}
      onClick={onClick}
    >
      {text}
    </button>
  </div>
);

Button.defaultProps = {
  type: "submit",
  disabled: false,
  onClick: undefined,
};

export default Button;
