import { FC, useCallback } from "react";
import IProduct from "@/types/iProduct";
import { ISearchFilterParams } from "@/types/iSearchFilter";
import FilterForm from "@/components/ui/forms/products/filter-form/filterForm";
import classes from "@/components/ui/forms/products/filter.module.scss";
import getEnumKeys from "@/shared/utils/helpers/getEnumKeys";
import { SortBy, Genres, Types, Ages } from "@/constants/searchFilters";

interface IProductFilterProps {
  setSpinner: (isLoading: boolean) => void;
  onFilter: (response: IProduct[]) => void;
  filterParams: ISearchFilterParams;
  setParams: (params: ISearchFilterParams) => void;
}

const ProductFilterForm: FC<IProductFilterProps> = ({ onFilter, setSpinner, filterParams, setParams }) => {
  const genres = getEnumKeys(Genres);
  const ages = getEnumKeys(Ages);
  const types = getEnumKeys(Types);
  const criteria = getEnumKeys(SortBy);

  const setSpinnerCallback = useCallback((isLoading: boolean): void => setSpinner(isLoading), []);
  const onFilterCallback = useCallback((response: IProduct[]): void => onFilter(response), []);
  const setParamsCallback = useCallback((params: ISearchFilterParams): void => setParams(params), []);

  return (
    <div>
      <h4 className={classes.filter__text}>Sort</h4>
      <FilterForm
        paramName="type"
        selectLabel="Type"
        filterParams={filterParams}
        setParams={setParamsCallback}
        onFilter={onFilterCallback}
        setSpinner={setSpinnerCallback}
        values={types}
      />
      <FilterForm
        paramName="sortBy"
        selectLabel="Criteria"
        filterParams={filterParams}
        setParams={setParamsCallback}
        onFilter={onFilterCallback}
        setSpinner={setSpinnerCallback}
        values={criteria}
      />
      <h4 className={classes.filter__text}>Genre</h4>
      <FilterForm
        paramName="genre"
        filterParams={filterParams}
        setParams={setParamsCallback}
        onFilter={onFilterCallback}
        setSpinner={setSpinnerCallback}
        values={genres}
      />
      <h4 className={classes.filter__text}>Age</h4>
      <FilterForm
        paramName="age"
        filterParams={filterParams}
        setParams={setParamsCallback}
        onFilter={onFilterCallback}
        setSpinner={setSpinnerCallback}
        values={ages}
      />
    </div>
  );
};

export default ProductFilterForm;
