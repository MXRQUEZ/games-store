import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./products.module.scss";
import GamesCard from "@/components/gamesCard/gamesCard";
import Container from "@/components/ui/container/container";
import IProduct from "@/types/iProduct";
import { getProducts } from "@/shared/utils/apiRequests";
import Searchbar from "@/components/ui/searchbar/searchbar";
import Spinner from "@/components/ui/spinner/spinner";
import { categories } from "@/constants/categories";
import Pathname from "@/constants/pathname";
import ProductFilterForm from "@/components/ui/forms/products/productFilterForm";
import { ISearchFilterParams } from "@/types/iSearchFilter";
import initialFilterParams from "@/constants/initialFilterParams";

type ProductsUrlParams = {
  category?: string;
};

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [defaultProducts, setDefaultProducts] = useState<IProduct[]>([]);
  const [filterParams, setParams] = useState<ISearchFilterParams>(initialFilterParams);
  const [spinner, setSpinner] = useState(true);
  const { category } = useParams<ProductsUrlParams>();
  const router = useNavigate();

  const onSearch = (response: IProduct[] | null): void => {
    setProducts(response || defaultProducts);
    setSpinner(false);
  };

  const onFilter = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  useEffect(() => {
    if (category && !((category as string) in categories)) {
      setParams({ ...filterParams, category: undefined });
      router(Pathname.Products);
      return;
    }
    (async () => {
      setSpinner(true);
      if (category) {
        const newParams = { ...filterParams, category };
        const categoryProducts = await getProducts(newParams);
        setParams(newParams);
        setDefaultProducts(categoryProducts);
        setProducts(categoryProducts);
        setSpinner(false);
        return;
      }

      const allProducts = await getProducts({ ...initialFilterParams });
      setDefaultProducts(allProducts);
      setProducts(allProducts);
      setSpinner(false);
    })();
  }, [category]);

  const searchResult: JSX.Element[] = products.map((product) => <GamesCard product={product} key={product.id} />);
  if (!searchResult.length) {
    searchResult.push(
      <h1 key={`${classes.nothing_found}${searchResult.length}`} className={classes.nothing_found}>
        Nothing Found
      </h1>
    );
  }

  return (
    <>
      <Searchbar filterParams={filterParams} onSearch={onSearch} setSpinner={setSpinner} />
      <Container id={classes.filter} title={category ? categories[category].name : "Products"}>
        <ProductFilterForm
          filterParams={filterParams}
          setParams={setParams}
          onFilter={onFilter}
          setSpinner={setSpinner}
        />
      </Container>
      <Container id={classes.games} title="Games" isCard>
        {spinner ? <Spinner /> : searchResult}
      </Container>
    </>
  );
};

export default Products;
