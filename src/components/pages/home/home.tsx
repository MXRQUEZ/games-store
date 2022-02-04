import categories from "server/data/categories";
import products from "server/data/products";
import Searchbar from "@/ui/searchbar/searchbar";
import classes from "./home.module.scss";
import Container from "@/ui/container/container";
import CategoryCard from "@/ui/categoryCard/categoryCard";
import GamesCard from "@/ui/gamesCard/gamesCard";

const Home = () => (
  <>
    <Searchbar />
    <Container id={classes.categories} title="Categories" isCard>
      {Object.values(categories).map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </Container>
    <Container id={classes.newGames} title="New Games" isCard>
      {products.map((product) => (
        <GamesCard product={product} key={product.id} />
      ))}
    </Container>
  </>
);
export default Home;
