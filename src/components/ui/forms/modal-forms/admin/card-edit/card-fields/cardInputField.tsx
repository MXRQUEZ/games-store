import React, { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cardClasses from "./cardFields.module.scss";

interface ICardInputProps {
  title: string;
  productName?: string;
  defaultValue?: string;
  isTextArea?: boolean;
  maxLength?: number;
  max?: number;
  onClick?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  register?: UseFormRegisterReturn;
}

const CardInputField: FC<ICardInputProps> = ({
  title,
  productName,
  isTextArea = false,
  maxLength,
  defaultValue,
  onClick,
  onBlur,
  max,
  register,
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
        maxLength={maxLength}
        {...register}
        onBlur={onBlur}
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
        max={max}
        {...register}
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
  register: undefined,
  max: undefined,
};

export default CardInputField;
