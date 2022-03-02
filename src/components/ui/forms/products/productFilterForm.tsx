import React, { FC } from "react";
import IProduct from "@/types/iProduct";
import { ISearchFilterParams } from "@/types/iSearchFilter";
import FilterForm from "@/components/ui/forms/products/filter-form/filterForm";
import classes from "@/components/ui/forms/products/filter.module.scss";
import getEnumKeys from "@/shared/utils/helpers/getEnumKeys";
import { SortBy, Genres, Types, Ages } from "@/constants/searchFilters";

interface IProductFilterProps {
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  onFilter: (response: IProduct[]) => void;
  filterParams: ISearchFilterParams;
  setParams: React.Dispatch<React.SetStateAction<ISearchFilterParams>>;
}

const ProductFilterForm: FC<IProductFilterProps> = ({ onFilter, setSpinner, filterParams, setParams }) => {
  const genres = getEnumKeys(Genres);
  const ages = getEnumKeys(Ages);
  const types = getEnumKeys(Types);
  const criteria = getEnumKeys(SortBy);

  return (
    <div>
      <h4 className={classes.filter__text}>Sort</h4>
      <FilterForm
        paramName="type"
        selectLabel="Type"
        filterParams={filterParams}
        setParams={setParams}
        onFilter={onFilter}
        setSpinner={setSpinner}
        values={types}
      />
      <FilterForm
        paramName="sortBy"
        selectLabel="Criteria"
        filterParams={filterParams}
        setParams={setParams}
        onFilter={onFilter}
        setSpinner={setSpinner}
        values={criteria}
      />
      <h4 className={classes.filter__text}>Genre</h4>
      <FilterForm
        paramName="genre"
        filterParams={filterParams}
        setParams={setParams}
        onFilter={onFilter}
        setSpinner={setSpinner}
        values={genres}
      />
      <h4 className={classes.filter__text}>Age</h4>
      <FilterForm
        paramName="age"
        filterParams={filterParams}
        setParams={setParams}
        onFilter={onFilter}
        setSpinner={setSpinner}
        values={ages}
      />
    </div>
  );
};

export default ProductFilterForm;
