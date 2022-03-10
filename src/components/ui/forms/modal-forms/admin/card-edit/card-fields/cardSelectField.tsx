import { FC } from "react";
import cardClasses from "./cardFields.module.scss";
import Select from "@/components/ui/select/select";

interface ICardSelectProps {
  title: string;
  productName?: string;
  options: string[];
  defaultValue?: string;
}

const CardSelectField: FC<ICardSelectProps> = ({ title, productName, options, defaultValue }) => {
  const id = `edit_product${title}-${productName || "NewProduct"}`;
  return (
    <div className={cardClasses.field}>
      <label htmlFor={id}>{title}</label>
      <Select id={id} options={options} defaultValue={defaultValue} />
    </div>
  );
};

CardSelectField.defaultProps = {
  defaultValue: undefined,
  productName: undefined,
};

export default CardSelectField;
