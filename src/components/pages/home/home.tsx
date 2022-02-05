import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "@/ui/searchbar/searchbar";
import classes from "./home.module.scss";
import Container from "@/ui/container/container";
import CategoryCard from "@/ui/categoryCard/categoryCard";
import GamesCard from "@/ui/gamesCard/gamesCard";
import { getCategories, getProducts } from "@/shared/utils/apiRequests";
import ICategory from "@/types/iCategory";
import IProduct from "@/types/iProduct";
import Spinner from "@/ui/spinner/spinner";

const Home: FC = () => {
  const router = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [spinner, setSpinner] = useState(false);

  const onSearch = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  const onCategoryClick = useCallback((category: ICategory): void => {
    router(`/products/${category.path}`);
  }, []);

  useEffect(() => {
    (async () => {
      setProducts(await getProducts({ amount: 3, sortBy: "date" }));
      setCategories(await getCategories());
    })();
  }, []);

  return (
    <>
      <Searchbar onSearch={onSearch} loader={setSpinner} />
      <Container id={classes.categories} title="Categories" isCard>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} onClick={onCategoryClick} />
        ))}
      </Container>
      <Container id={classes.newGames} title="New Games" isCard>
        {spinner ? <Spinner /> : products.map((product) => <GamesCard product={product} key={product.id} />)}
      </Container>
    </>
  );
};
export default Home;
