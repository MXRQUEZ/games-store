import React, { FC } from "react";
import classes from "@/components/ui/button/button.module.scss";

interface IButtonProps {
  id?: string;
  text: string | React.ClassicElement<HTMLElement>;
  disabled?: boolean;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ id, text, disabled = false, type = "submit", onClick }) => (
  <div className={classes.button__container}>
    <button
      id={id}
      type={type}
      tabIndex={0}
      disabled={disabled}
      className={disabled ? `${classes.button} ${classes.disabled}` : classes.button}
      onClick={onClick}
      onKeyDown={onClick}
    >
      {text}
    </button>
  </div>
);

Button.defaultProps = {
  id: undefined,
  type: "submit",
  disabled: false,
  onClick: undefined,
};

export default Button;
