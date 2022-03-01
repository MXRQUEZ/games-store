import React, { FC, useState } from "react";
import IProduct from "@/types/iProduct";
import { ISearchFilterValues } from "@/types/iSearchFilter";
import RadioButtonForm from "@/components/ui/forms/products/radioButtonForm";

interface IProductFilterProps {
  setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
  onFilter: (response: IProduct[]) => void;
}

const ProductFilter: FC<IProductFilterProps> = ({ onFilter, setSpinner }) => {
  const initialFilterParams: ISearchFilterValues = {
    age: "0+",
    genre: "All",
  };
  const genres = ["All", "Shooter", "Sandbox", "RPG", "Action", "Simulator"];
  const ages = ["0+", "3+", "6+", "12+", "16+", "18+"];
  const [filterParams, setParams] = useState<ISearchFilterValues>(initialFilterParams);

  return (
    <div>
      <RadioButtonForm
        paramName="genre"
        filterParams={filterParams}
        setParams={setParams}
        onFilter={onFilter}
        setSpinner={setSpinner}
        values={genres}
      />
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

export default ProductFilter;
