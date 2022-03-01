import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./products.module.scss";
import GamesCard from "@/components/gamesCard/gamesCard";
import Container from "@/components/ui/container/container";
import IProduct from "@/types/iProduct";
import { getProducts, getProductsByCategoryName } from "@/shared/utils/apiRequests";
import Searchbar from "@/components/ui/searchbar/searchbar";
import Spinner from "@/components/ui/spinner/spinner";
import { categories } from "../../../server/data/categories";
import Pathname from "@/constants/pathname";
import ProductSelectForm from "@/components/ui/forms/products/productSelectForm";
import ProductFilter from "@/components/ui/forms/products/productFilter";

type ProductsUrlParams = {
  category?: string;
};

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [defaultProducts, setDefaultProducts] = useState<IProduct[]>([]);
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
      router(Pathname.Products);
      return;
    }
    (async () => {
      setSpinner(true);
      if (category) {
        const categoryProducts = await getProductsByCategoryName({ category });
        setDefaultProducts(categoryProducts);
        setProducts(categoryProducts);
        setSpinner(false);
        return;
      }

      const allProducts = await getProducts();
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
      <Searchbar onSearch={onSearch} setSpinner={setSpinner} />
      <Container id={classes.filter} title={category || "Products"}>
        <ProductSelectForm />
        <ProductFilter onFilter={onFilter} setSpinner={setSpinner} />
      </Container>
      <Container id={classes.games} title="Games" isCard>
        {spinner ? <Spinner /> : searchResult}
      </Container>
    </>
  );
};

export default Products;
