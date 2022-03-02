import React, { FC } from "react";
import IProduct from "@/types/iProduct";
import { getProducts } from "@/shared/utils/apiRequests";
import debounce from "@/shared/utils/helpers/debounce";
import classes from "@/components/ui/searchbar/searchbar.module.scss";
import { ISearchFilterParams } from "@/types/iSearchFilter";

interface ISearchbarProps {
  onSearch: (response: IProduct[] | null) => void;
  setSpinner: (isActive: boolean) => void;
  filterParams?: ISearchFilterParams | null;
}

type InputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

const Searchbar: FC<ISearchbarProps> = ({ onSearch, setSpinner, filterParams = null }) => {
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    onSearch(search ? await getProducts({ ...filterParams, filter: search }) : null);
  };

  const debounceDelayMS = 1000;
  const debounceOnChange: InputChangeEvent = debounce(onChange, debounceDelayMS);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpinner(true);
    debounceOnChange(event);
  };

  return (
    <div className={classes.searchbar__container}>
      <input className={classes.searchbar} type="text" onChange={handleChange} placeholder="Search" />
    </div>
  );
};

Searchbar.defaultProps = {
  filterParams: null,
};

export default React.memo(Searchbar);
