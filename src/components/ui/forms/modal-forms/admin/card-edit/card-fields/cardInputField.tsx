import React, { FC } from "react";
import cardClasses from "./cardFields.module.scss";

interface ICardInputProps {
  title: string;
  productName?: string;
  defaultValue?: string;
  isTextArea?: boolean;
  maxLength?: number;
  onClick?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const CardInputField: FC<ICardInputProps> = ({
  title,
  productName,
  isTextArea = false,
  maxLength,
  defaultValue,
  onClick,
  onBlur,
}) => {
  const id = `edit_product${title}-${productName || "NewProduct"}`;
  return isTextArea ? (
    <div className={cardClasses.field}>
      <label htmlFor={id}>{title}</label>
      <textarea
        className={cardClasses.field__description}
        id={id}
        autoComplete="off"
        defaultValue={defaultValue}
        onClick={onClick}
        onBlur={onBlur}
        maxLength={maxLength}
      />
    </div>
  ) : (
    <div className={cardClasses.field}>
      <label htmlFor={id}>{title}</label>
      <input
        className={cardClasses.field__input}
        id={id}
        autoComplete="off"
        defaultValue={defaultValue}
        onClick={onClick}
        onBlur={onBlur}
      />
    </div>
  );
};

CardInputField.defaultProps = {
  defaultValue: undefined,
  productName: undefined,
  onClick: undefined,
  onBlur: undefined,
  isTextArea: false,
  maxLength: undefined,
};

export default CardInputField;
