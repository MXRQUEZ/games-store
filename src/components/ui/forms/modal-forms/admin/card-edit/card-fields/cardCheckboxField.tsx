import { FC } from "react";
import cardClasses from "./cardFields.module.scss";

interface ICardCheckboxProps {
  label: string;
  productName?: string;
  defaultChecked?: boolean;
}

const CardCheckboxField: FC<ICardCheckboxProps> = ({ label, productName, defaultChecked = false }) => {
  const id = `edit_product${label}-PC-${productName || "NewProduct"}`;
  return (
    <li className={cardClasses.field}>
      <label htmlFor={id}>{label}</label>
      <input className={cardClasses.checkbox} id={id} defaultChecked={defaultChecked} type="checkbox" />
    </li>
  );
};

CardCheckboxField.defaultProps = {
  defaultChecked: false,
  productName: undefined,
};

export default CardCheckboxField;
