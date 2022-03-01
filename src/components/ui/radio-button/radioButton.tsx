import React, { FC } from "react";
import classes from "./radioButton.module.scss";

interface IRadioButtonProps {
  text: string;
  name: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: FC<IRadioButtonProps> = ({ text, name, onChange, checked = false }) => {
  const id = `${name}-${text}`;

  return (
    <label htmlFor={id} className={classes.input__label}>
      <input
        type="radio"
        value={text}
        className={classes.input}
        id={id}
        name={name}
        onChange={onChange}
        defaultChecked={checked}
      />
      {text}
    </label>
  );
};

RadioButton.defaultProps = {
  checked: false,
  onChange: undefined,
};

export default RadioButton;
