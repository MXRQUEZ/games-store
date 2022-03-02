import React, { FC } from "react";
import { getProducts } from "@/shared/utils/apiRequests";
import debounce from "@/shared/utils/helpers/debounce";
import classes from "@/components/ui/forms/products/filter.module.scss";
import RadioButton from "@/components/ui/radio-button/radioButton";
import IProduct from "@/types/iProduct";
import { ISearchFilterParams } from "@/types/iSearchFilter";
import Select from "@/components/ui/select/select";

type FormChangeEvent = (event: React.ChangeEvent<HTMLFormElement>) => void;
type FilterParams = "age" | "genre";
type SortParams = "type" | "sortBy";
type Params = FilterParams | SortParams;

type RadioButtonProps = {
  paramName: FilterParams;
  selectLabel?: string;
  filterParams: ISearchFilterParams;
  setParams: React.Dispatch<React.SetStateAction<ISearchFilterParams>>;
  onFilter: (response: IProduct[]) => void;
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  values: string[];
};

type SelectProps = {
  paramName: SortParams;
  selectLabel: string;
  filterParams: ISearchFilterParams;
  setParams: React.Dispatch<React.SetStateAction<ISearchFilterParams>>;
  onFilter: (response: IProduct[]) => void;
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  values: string[];
};

type FilterProps = RadioButtonProps | SelectProps;

const FilterForm: FC<FilterProps> = ({
  paramName,
  filterParams,
  setParams,
  setSpinner,
  onFilter,
  values,
  selectLabel,
}) => {
  const onChange = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    const paramValue: string = event.target.value;
    const newFilterParams: ISearchFilterParams = { ...filterParams, [paramName]: paramValue };
    const products = await getProducts({ ...newFilterParams });
    onFilter(products);
    setParams(newFilterParams);
  };

  const debounceDelayMS = 1000;
  const debounceOnChange: FormChangeEvent = debounce(onChange, debounceDelayMS);
  const handleChangeFilter = (event: React.ChangeEvent<HTMLFormElement>) => {
    setSpinner(true);
    debounceOnChange(event);
  };

  const isSortParam = (param: Params): param is SortParams =>
    ["type", "sortBy"].some((sortParam) => sortParam === param);
  const formClass = isSortParam(paramName) ? classes.sort__form : classes.radiobtns__form;

  return (
    <form className={formClass} onChange={handleChangeFilter}>
      {isSortParam(paramName) ? (
        <label htmlFor={paramName} className={classes.select__label}>
          {selectLabel}
          <Select id={paramName} options={values} />
        </label>
      ) : (
        values.map((value, index) => {
          const key = `${paramName}-${value}`;
          return <RadioButton key={key} text={value} name={paramName} checked={index === 0} />;
        })
      )}
    </form>
  );
};

export default FilterForm;
