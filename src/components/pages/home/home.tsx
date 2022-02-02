import categories from "server/data/categories";
import products from "server/data/products";
import Searchbar from "@/ui/searchbar/searchbar";
import classes from "./home.module.scss";
import Block from "@/ui/block/block";
import CategoryCard from "@/ui/categoryCard/categoryCard";
import GamesCard from "@/ui/gamesCard/gamesCard";

const Home = () => (
  <>
    <Searchbar />
    <Block id={classes.categories} title="Categories">
      {Object.values(categories).map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Block>
    <Block id={classes.newGames} title="New Games">
      {products.map((product) => (
        <GamesCard product={product} key={product.id} />
      ))}
    </Block>
  </>
);
export default Home;
