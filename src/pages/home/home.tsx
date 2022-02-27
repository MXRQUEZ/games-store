import { FC, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Searchbar from "@/components/ui/searchbar/searchbar";
import classes from "./home.module.scss";
import Container from "@/components/ui/container/container";
import CategoryCard from "@/components/categoryCard/categoryCard";
import GamesCard from "@/components/gamesCard/gamesCard";
import { getCategories, getHomeProducts } from "@/shared/utils/apiRequests";
import ICategory from "@/types/iCategory";
import IProduct from "@/types/iProduct";
import Spinner from "@/components/ui/spinner/spinner";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Pathname from "@/types/pathname";
import useActions from "@/hooks/redux/useActions";

const Home: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);
  const [spinner, setSpinner] = useState(true);

  const onSearch = (response: IProduct[] | null): void => {
    setProducts(response || newProducts);
    setSpinner(false);
  };

  const isAuth = !!useTypedSelector((state) => state.auth.user);
  const { signInModalOpen } = useActions();

  useEffect(() => {
    if (location.pathname === Pathname.Login && !isAuth) {
      signInModalOpen();
      navigate("/");
      return;
    }

    if (location.pathname === Pathname.Login && isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const onCategoryClick = useCallback((category: ICategory): void => {
    navigate(`/products/${category.path}`);
  }, []);

  useEffect(() => {
    (async () => {
      const homeProducts = await getHomeProducts();
      setSpinner(true);
      setCategories(await getCategories());
      setNewProducts(homeProducts);
      setProducts(homeProducts);
      setSpinner(false);
    })();
  }, []);

  const searchResult = products.map((product) => <GamesCard product={product} key={product.id} />);
  if (!searchResult.length) {
    searchResult.push(
      <h1 key={`${classes.text}${searchResult.length}`} className={classes.text}>
        Nothing Found
      </h1>
    );
  }

  return (
    <>
      <Searchbar onSearch={onSearch} loader={setSpinner} />
      <Container id={classes.categories} title="Categories" isCard>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} onClick={onCategoryClick} />
        ))}
      </Container>
      <Container id={classes.newGames} title="New Games" isCard>
        {spinner ? <Spinner /> : searchResult}
      </Container>
    </>
  );
};

export default Home;
