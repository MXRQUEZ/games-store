import { FC, memo, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Searchbar from "@/components/ui/searchbar/searchbar";
import classes from "./home.module.scss";
import Container from "@/components/ui/container/container";
import CategoryCard from "@/components/categoryCard/categoryCard";
import { getHomeProducts } from "@/shared/utils/apiRequests";
import ICategory from "@/types/iCategory";
import IProduct from "@/types/iProduct";
import Spinner from "@/components/ui/spinner/spinner";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Pathnames from "@/constants/pathnames";
import useActions from "@/hooks/redux/useActions";
import { platforms } from "@/constants/searchFilters";
import { homeFilterParams } from "@/constants/initialFilterParams";
import getSearchResult from "@/shared/utils/helpers/getSearchResult";

const Home: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [spinner, setSpinner] = useState(true);

  const onSearch = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = !!useTypedSelector((state) => state.auth.user);
  const { signInModalOpen } = useActions();

  useEffect(() => {
    if (location.pathname === Pathnames.Login && !isAuth) {
      signInModalOpen();
      return;
    }

    navigate("/");
  }, [isAuth]);

  const onCategoryClick = useCallback((category: ICategory): void => {
    navigate(`/products/${category.path}`);
  }, []);

  const renderCount = useTypedSelector((state) => state.products.productsRenderCount);

  useEffect(() => {
    (async () => {
      const homeProducts = await getHomeProducts();
      setSpinner(true);
      setProducts(homeProducts);
      setSpinner(false);
    })();
  }, [renderCount]);

  const searchResult: JSX.Element[] = getSearchResult(products);

  return (
    <>
      <Searchbar onSearch={onSearch} setSpinner={setSpinner} filterParams={homeFilterParams} />
      <Container id={classes.categories} title="Categories" isCard>
        {platforms.map((category) => (
          <CategoryCard key={category.id} category={category} onClick={onCategoryClick} />
        ))}
      </Container>
      <Container id={classes.newGames} title="New Games" isCard>
        {spinner ? <Spinner /> : searchResult}
      </Container>
    </>
  );
};

export default memo(Home);
