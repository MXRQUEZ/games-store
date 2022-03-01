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
import Select from "@/components/ui/select/select";

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
        <h4 className={classes.filter__text}>Sort</h4>
        <ul className={classes.sort}>
          <li className={classes.sort__by}>
            Type
            <Select options={["Ascending", "Descending"]} />
          </li>
          <li className={classes.sort__by}>
            Criteria
            <Select options={["Name", "Rating", "Price"]} />
          </li>
        </ul>
        <h4 className={classes.filter__text}>Genre</h4>
        <div className={classes.radiobtns__container}>
          <label htmlFor="genre-all" className={classes.input__label}>
            <input type="radio" className={classes.input} id="genre-all" name="genres" defaultChecked />
            All
          </label>
          <label htmlFor="genre-shooter" className={classes.input__label}>
            <input type="radio" className={classes.input} id="genre-shooter" name="genres" />
            Shooter
          </label>
          <label htmlFor="genre-sandbox" className={classes.input__label}>
            <input type="radio" className={classes.input} id="genre-sandbox" name="genres" />
            Sandbox
          </label>
          <label htmlFor="genre-rpg" className={classes.input__label}>
            <input type="radio" className={classes.input} id="genre-rpg" name="genres" />
            RPG
          </label>
          <label htmlFor="genre-action" className={classes.input__label}>
            <input type="radio" className={classes.input} id="genre-action" name="genres" />
            Action
          </label>
          <label htmlFor="genre-simulator" className={classes.input__label}>
            <input type="radio" className={classes.input} id="genre-simulator" name="genres" />
            Simulator
          </label>
        </div>
        <h4 className={classes.filter__text}>Age</h4>
        <div className={classes.radiobtns__container}>
          <label htmlFor="age-all" className={classes.input__label}>
            <input type="radio" className={classes.input} id="age-all" name="ages" defaultChecked />
            All
          </label>
          <label htmlFor="age-three" className={classes.input__label}>
            <input type="radio" className={classes.input} id="age-three" name="ages" />
            3+
          </label>
          <label htmlFor="age-six" className={classes.input__label}>
            <input type="radio" className={classes.input} id="age-six" name="ages" />
            6+
          </label>
          <label htmlFor="age-twelve" className={classes.input__label}>
            <input type="radio" className={classes.input} id="age-twelve" name="ages" />
            12+
          </label>
          <label htmlFor="age-sixteen" className={classes.input__label}>
            <input type="radio" className={classes.input} id="age-sixteen" name="ages" />
            16+
          </label>
          <label htmlFor="age-eighteen" className={classes.input__label}>
            <input type="radio" className={classes.input} id="age-eighteen" name="ages" />
            18+
          </label>
        </div>
      </Container>
      <Container id={classes.games} title="Games" isCard>
        {spinner ? <Spinner /> : searchResult}
      </Container>
    </>
  );
};

export default Products;
