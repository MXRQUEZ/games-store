import Searchbar from "@/ui/searchbar/searchbar";
import classes from "@/components/pages/home/home.module.scss";
import products from "../../../../server/data/products";
import GamesCard from "@/ui/gamesCard/gamesCard";
import Container from "@/ui/container/container";

const Products = () => (
  <div className="products__page">
    <Searchbar />
    <Container id={classes.newGames} title="Games" isCard>
      {products.map((product) => (
        <GamesCard product={product} key={product.id} />
      ))}
    </Container>
  </div>
);

export default Products;
