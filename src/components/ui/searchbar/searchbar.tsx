import React, { FC } from "react";
import IProduct from "@/types/iProduct";
import { getHomeProducts, getProducts } from "@/shared/utils/apiRequests";
import SearchInput from "@/components/ui/searchbar/searchInput";

interface ISearchbarProps {
  onSearch: (response: IProduct[]) => void;
  loader: (isActive: boolean) => void;
  isHomePage?: boolean;
}

const Searchbar: FC<ISearchbarProps> = ({ onSearch, loader, isHomePage }) => {
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let response: IProduct[];
    if (event.target.value) {
      response = await getProducts({ filter: event.target.value });
    } else {
      response = isHomePage ? await getHomeProducts() : await getProducts();
    }

    if (onSearch) {
      onSearch(response);
    }
  };

  return <SearchInput onChange={onChange} loader={loader} />;
};

Searchbar.defaultProps = {
  isHomePage: false,
};

export default React.memo(Searchbar);
