import React, { FC } from "react";
import debounce from "@/shared/utils/helpers/debounce";
import classes from "@/components/ui/searchbar/searchbar.module.scss";

type inputChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface ISearchInputProps {
  onChange: inputChangeEvent;
  loader: (isActive: boolean) => void;
}

const SearchInput: FC<ISearchInputProps> = ({ onChange, loader }) => {
  const debounceOnChange: inputChangeEvent = debounce(onChange, 1000);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    loader(true);
    debounceOnChange(event);
  };

  return (
    <div className={classes.searchbar__container}>
      <input className={classes.searchbar} type="text" onChange={onChangeHandler} placeholder="Search" />
    </div>
  );
};

export default SearchInput;
