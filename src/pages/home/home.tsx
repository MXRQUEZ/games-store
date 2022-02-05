import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "@/components/ui/searchbar/searchbar";
import classes from "./home.module.scss";
import Container from "@/components/ui/container/container";
import CategoryCard from "@/components/categoryCard/categoryCard";
import GamesCard from "@/components/gamesCard/gamesCard";
import { getCategories, getHomeProducts } from "@/shared/utils/apiRequests";
import ICategory from "@/types/iCategory";
import IProduct from "@/types/iProduct";
import Spinner from "@/components/ui/spinner/spinner";

const Home: FC = () => {
  const router = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
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
      setCategories(await getCategories());
      setProducts(await getHomeProducts());
    })();
  }, []);

  if (spinner) {
    return (
      <>
        <Searchbar onSearch={onSearch} loader={setSpinner} isHomePage />
        <Container id={classes.categories} title="Categories" isCard>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} onClick={onCategoryClick} />
          ))}
        </Container>
        <Container id={classes.newGames} title="New Games" isCard>
          <Spinner />
        </Container>
      </>
    );
  }

  return (
    <>
      <Searchbar onSearch={onSearch} loader={setSpinner} isHomePage />
      <Container id={classes.categories} title="Categories" isCard>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} onClick={onCategoryClick} />
        ))}
      </Container>
      <Container id={classes.newGames} title="New Games" isCard>
        {!products.length ? (
          <h1 className={classes.text}>Nothing Found</h1>
        ) : (
          products.map((product) => <GamesCard product={product} key={product.id} />)
        )}
      </Container>
    </>
  );
};
export default Home;