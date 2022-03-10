import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cardClasses from "./cardFields.module.scss";
import Select from "@/components/ui/select/select";

interface ICardSelectProps {
  title: string;
  productName?: string;
  options: string[];
  defaultValue?: string;
  register?: UseFormRegisterReturn;
}

const CardSelectField: FC<ICardSelectProps> = ({ title, productName, options, defaultValue, register }) => {
  const id = `edit_product${title}-${productName || "NewProduct"}`;
  return (
    <div className={cardClasses.field}>
      <label htmlFor={id}>{title}</label>
      <Select id={id} options={options} defaultValue={defaultValue} register={register} />
    </div>
  );
};

CardSelectField.defaultProps = {
  defaultValue: undefined,
  productName: undefined,
  register: undefined,
};

export default CardSelectField;
