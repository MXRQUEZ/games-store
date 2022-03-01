import React, { FC } from "react";
import { getProducts } from "@/shared/utils/apiRequests";
import debounce from "@/shared/utils/helpers/debounce";
import classes from "@/components/ui/forms/products/filter.module.scss";
import RadioButton from "@/components/ui/radio-button/radioButton";
import IProduct from "@/types/iProduct";
import { ISearchFilterValues } from "@/types/iSearchFilter";

type FormChangeEvent = (event: React.ChangeEvent<HTMLFormElement>) => void;
type FilterParams = "age" | "genre" | "criteria" | "type";

interface IRadioButtonProps {
  paramName: FilterParams;
  filterParams: ISearchFilterValues;
  setParams: React.Dispatch<React.SetStateAction<ISearchFilterValues>>;
  onFilter: (response: IProduct[]) => void;
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  values: string[];
}

const RadioButtonForm: FC<IRadioButtonProps> = ({
  paramName,
  filterParams,
  setParams,
  setSpinner,
  onFilter,
  values,
}) => {
  const onChange = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    const paramValue: string = event.target.value;
    const newFilterParams: ISearchFilterValues = { ...filterParams, [paramName]: paramValue };
    const products = await getProducts({ ...newFilterParams });
    onFilter(products);
    setParams(newFilterParams);
  };

  const debounceDelay = 1000;
  const debounceOnChange: FormChangeEvent = debounce(onChange, debounceDelay);
  const handleChangeFilter = (event: React.ChangeEvent<HTMLFormElement>) => {
    setSpinner(true);
    debounceOnChange(event);
  };

  return (
    <form className={classes.radiobtns__form} onChange={handleChangeFilter}>
      <h4 className={classes.filter__text}>Age</h4>
      {values.map((value, index) => {
        const key = `${paramName}-${value}`;
        return <RadioButton key={key} text={value} name={paramName} checked={index === 0} />;
      })}
    </form>
  );
};

export default RadioButtonForm;
