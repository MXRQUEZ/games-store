import IProduct from "@/types/iProduct";
import GamesCard from "@/components/gamesCard/gamesCard";
import classes from "@/pages/home/home.module.scss";

const getSearchResult = (products: IProduct[]): JSX.Element[] => {
  const searchResult = products.map((product) => <GamesCard product={product} key={product.id} />);
  if (!searchResult.length) {
    searchResult.push(
      <h1 key={`${classes.nothing_found}${searchResult.length}`} className={classes.nothing_found}>
        Nothing Found
      </h1>
    );
  }

  return searchResult;
};

export default getSearchResult;
