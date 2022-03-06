import React, { FC, useCallback } from "react";
import IProduct from "@/types/iProduct";
import { getProducts } from "@/shared/utils/apiRequests";
import debounce from "@/shared/utils/helpers/debounce";
import classes from "@/components/ui/searchbar/searchbar.module.scss";
import { ISearchFilterParams } from "@/types/iSearchFilter";

interface ISearchbarProps {
  onSearch: (response: IProduct[]) => void;
  setSpinner: (isActive: boolean) => void;
  filterParams: ISearchFilterParams;
}

type InputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

const Searchbar: FC<ISearchbarProps> = ({ onSearch, setSpinner, filterParams }) => {
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    const filteredProducts = search
      ? await getProducts({ ...filterParams, filter: search })
      : await getProducts({ ...filterParams });
    onSearch(filteredProducts);
  };

  const debounceDelayMS = 1000;
  const debounceOnChange: InputChangeEvent = debounce(onChange, debounceDelayMS);
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSpinner(true);
    debounceOnChange(event);
  }, []);

  return (
    <div className={classes.searchbar__container}>
      <input className={classes.searchbar} type="text" onChange={handleChange} placeholder="Search" />
    </div>
  );
};

export default React.memo(Searchbar);
