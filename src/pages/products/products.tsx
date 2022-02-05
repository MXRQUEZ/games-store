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

type ProductsUrlParams = {
  category?: string;
};

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [spinner, setSpinner] = useState(false);
  const { category } = useParams<ProductsUrlParams>();
  const router = useNavigate();

  const onSearch = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  useEffect(() => {
    if (category && !((category as string) in categories)) {
      router("/products");
      return;
    }
    (async () => {
      setSpinner(true);
      if (category) {
        setProducts(await getProductsByCategoryName({ category }));
        return;
      }

      setProducts(await getProducts());
      setSpinner(false);
    })();
  }, [category]);

  const searchResult = products.map((product) => <GamesCard product={product} key={product.id} />);
  if (!searchResult.length) {
    searchResult.push(<h1 className={classes.text}>Nothing Found</h1>);
  }

  return (
    <div className="products__page">
      <Searchbar onSearch={onSearch} loader={setSpinner} />
      <Container id={classes.games} title="Games" isCard>
        {spinner ? <Spinner /> : searchResult}
      </Container>
    </div>
  );
};

export default Products;
