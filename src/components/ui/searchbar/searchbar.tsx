import React, { FC } from "react";
import IProduct from "@/types/iProduct";
import { getProducts } from "@/shared/utils/apiRequests";
import debounce from "@/shared/utils/helpers/debounce";
import classes from "@/components/ui/searchbar/searchbar.module.scss";

interface ISearchbarProps {
  onSearch: (response: IProduct[] | null) => void;
  setSpinner: (isActive: boolean) => void;
}

type InputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

const Searchbar: FC<ISearchbarProps> = ({ onSearch, setSpinner }) => {
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    onSearch(search ? await getProducts({ filter: event.target.value }) : null);
  };

  const debounceDelay = 1000;
  const debounceOnChange: InputChangeEvent = debounce(onChange, debounceDelay);
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

export default React.memo(Searchbar);
