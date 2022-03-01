import React, { FC } from "react";
import IProduct from "@/types/iProduct";
import { ISearchFilterValues } from "@/types/iSearchFilter";
import RadioButtonForm from "@/components/ui/forms/products/radio-button/radioButtonForm";
import classes from "@/components/ui/forms/products/filter.module.scss";
import ProductSelectForm from "@/components/ui/forms/products/select/productSelectForm";

interface IProductFilterProps {
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  onFilter: (response: IProduct[]) => void;
  filterParams: ISearchFilterValues;
  setParams: React.Dispatch<React.SetStateAction<ISearchFilterValues>>;
}

const ProductFilterForm: FC<IProductFilterProps> = ({ onFilter, setSpinner, filterParams, setParams }) => {
  const genres = ["All", "Shooter", "Sandbox", "RPG", "Action", "Simulator"];
  const ages = ["0+", "3+", "6+", "12+", "16+", "18+"];
  const types = ["Ascending", "Descending"];
  const criteria = ["Name", "Rating", "Price"];

  return (
    <div>
      <h4 className={classes.filter__text}>Sort</h4>
      <ProductSelectForm
        paramName="type"
        filterParams={filterParams}
        setParams={setParams}
        onFilter={onFilter}
        setSpinner={setSpinner}
        values={types}
      />
      <ProductSelectForm
        paramName="sortBy"
        filterParams={filterParams}
        setParams={setParams}
        onFilter={onFilter}
        setSpinner={setSpinner}
        values={criteria}
      />
      <h4 className={classes.filter__text}>Genre</h4>
      <RadioButtonForm
        paramName="genre"
        filterParams={filterParams}
        setParams={setParams}
        onFilter={onFilter}
        setSpinner={setSpinner}
        values={genres}
      />
      <h4 className={classes.filter__text}>Age</h4>
      <RadioButtonForm
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
