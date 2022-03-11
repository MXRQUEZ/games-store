import React, { FC } from "react";
import cardClasses from "./cardFields.module.scss";

interface ICardCheckboxProps {
  label: string;
  productName?: string;
  defaultChecked?: boolean;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardCheckboxField: FC<ICardCheckboxProps> = ({ label, productName, value, defaultChecked = false, onChange }) => {
  const id = `edit_product${label}-PC-${productName || "NewProduct"}`;
  return (
    <li className={cardClasses.field}>
      <label htmlFor={id}>{label}</label>
      <input
        className={cardClasses.checkbox}
        id={id}
        defaultChecked={defaultChecked}
        type="checkbox"
        value={value}
        onChange={onChange}
      />
    </li>
  );
};

CardCheckboxField.defaultProps = {
  defaultChecked: false,
  productName: undefined,
};

export default CardCheckboxField;
