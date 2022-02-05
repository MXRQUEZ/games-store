import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./products.module.scss";
import GamesCard from "@/ui/gamesCard/gamesCard";
import Container from "@/ui/container/container";
import IProduct from "@/types/iProduct";
import { getProducts, getProductsByCategoryName } from "@/shared/utils/apiRequests";
import Searchbar from "@/ui/searchbar/searchbar";
import Spinner from "@/ui/spinner/spinner";
import { categories } from "../../../../server/data/categories";

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
    } else {
      (async () => {
        if (category) {
          setProducts(await getProductsByCategoryName(category));
        } else {
          setProducts(await getProducts());
        }
      })();
    }
  }, [category]);

  return (
    <div className="products__page">
      <Searchbar onSearch={onSearch} loader={setSpinner} />
      <Container id={classes.games} title="Games" isCard>
        {spinner ? <Spinner /> : products.map((product) => <GamesCard product={product} key={product.id} />)}
      </Container>
    </div>
  );
};

export default Products;
