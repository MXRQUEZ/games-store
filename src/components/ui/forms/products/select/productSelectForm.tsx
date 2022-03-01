import React, { FC } from "react";
import classes from "@/components/ui/forms/products/filter.module.scss";
import Select from "@/components/ui/select/select";
import { ISearchFilterValues } from "@/types/iSearchFilter";
import IProduct from "@/types/iProduct";
import { getProducts } from "@/shared/utils/apiRequests";
import debounce from "@/shared/utils/helpers/debounce";

type SortValues = "type" | "sortBy";
type FormChangeEvent = (event: React.ChangeEvent<HTMLFormElement>) => void;

interface IProductSelectProps {
  paramName: SortValues;
  filterParams: ISearchFilterValues;
  setParams: React.Dispatch<React.SetStateAction<ISearchFilterValues>>;
  onFilter: (response: IProduct[]) => void;
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  values: string[];
}

const ProductSelectForm: FC<IProductSelectProps> = ({
  paramName,
  filterParams,
  setParams,
  onFilter,
  setSpinner,
  values,
}) => {
  const onChange = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    const paramValue: string = event.target.value;
    const newFilterParams: ISearchFilterValues = { ...filterParams, [paramName]: paramValue };
    const products = await getProducts({ ...newFilterParams });
    onFilter(products);
    setParams(newFilterParams);
    console.log(paramValue);
  };

  const debounceDelay = 1000;
  const debounceOnChange: FormChangeEvent = debounce(onChange, debounceDelay);
  const handleChangeFilter = (event: React.ChangeEvent<HTMLFormElement>) => {
    setSpinner(true);
    debounceOnChange(event);
  };

  return (
    <form className={classes.sort__form} onChange={handleChangeFilter}>
      <label htmlFor={paramName} className={classes.select__label}>
        {paramName}
        <Select id={paramName} options={values} />
      </label>
    </form>
  );
};

export default ProductSelectForm;
