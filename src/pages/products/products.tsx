import { FC, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./products.module.scss";
import Container from "@/components/ui/container/container";
import IProduct from "@/types/iProduct";
import { getProducts } from "@/shared/utils/apiRequests";
import Searchbar from "@/components/ui/searchbar/searchbar";
import Spinner from "@/components/ui/spinner/spinner";
import { categories } from "@/constants/categories";
import Pathnames from "@/constants/pathnames";
import ProductFilterForm from "@/components/ui/forms/products/productFilterForm";
import { ISearchFilterParams } from "@/types/iSearchFilter";
import { initialFilterParams } from "@/constants/initialFilterParams";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import getSearchResult from "@/shared/utils/helpers/getSearchResult";

type ProductsUrlParams = {
  category?: string;
};

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filterParams, setParams] = useState<ISearchFilterParams>(initialFilterParams);
  const [spinner, setSpinner] = useState(true);
  const { category } = useParams<ProductsUrlParams>();
  const navigate = useNavigate();

  const setParamsCallback = useCallback((params: ISearchFilterParams) => setParams(params), []);

  const onSearchFilter = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  const renderCount = useTypedSelector((state) => state.products.productsRenderCount);
  useEffect(() => {
    if (category && !((category as string) in categories)) {
      setParams({ ...filterParams, category: undefined });
      navigate(Pathnames.Products);
      return;
    }
    (async () => {
      setSpinner(true);
      if (category) {
        const newParams = { ...filterParams, category };
        const categoryProducts = await getProducts(newParams);
        setParams(newParams);
        setProducts(categoryProducts);
        setSpinner(false);
        return;
      }

      const allProducts = await getProducts({ ...initialFilterParams });
      setProducts(allProducts);
      setSpinner(false);
    })();
  }, [category, renderCount]);

  const searchResult: JSX.Element[] = getSearchResult(products);

  return (
    <>
      <Searchbar filterParams={filterParams} onSearch={onSearchFilter} setSpinner={setSpinner} />
      <Container id={classes.filter} title={category ? categories[category].name : "Products"}>
        <ProductFilterForm
          filterParams={filterParams}
          setParams={setParamsCallback}
          onFilter={onSearchFilter}
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
