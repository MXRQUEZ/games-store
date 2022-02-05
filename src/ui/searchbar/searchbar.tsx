import React, { FC } from "react";
import IProduct from "@/types/iProduct";
import { getProducts } from "@/shared/utils/apiRequests";
import SearchInput from "@/ui/searchbar/searchInput";

interface ISearchbarProps {
  onSearch: (response: IProduct[]) => void;
  loader: (isActive: boolean) => void;
}

const Searchbar: FC<ISearchbarProps> = ({ onSearch, loader }) => {
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const response = event.target.value
      ? await getProducts({ filter: event.target.value })
      : await getProducts({ sortBy: "date", amount: 3 });

    if (onSearch) {
      onSearch(response);
    }
  };

  return <SearchInput onChange={onChange} loader={loader} />;
};

export default Searchbar;
