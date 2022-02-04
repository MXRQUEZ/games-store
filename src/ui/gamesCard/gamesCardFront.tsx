import { FC } from "react";
import classes from "@/ui/gamesCard/gamesCard.module.scss";
import ProductRating from "@/ui/gamesCard/productRating";
import IProduct from "@/types/iProduct";
import ProductCategory from "@/ui/gamesCard/productCategory";

interface IGamesCardFrontProps {
  product: IProduct;
}

const GamesCardFront: FC<IGamesCardFrontProps> = ({ product }) => (
  <div className={classes.games__card__front}>
    <img className={classes.games__card__front_image} src={product.img} alt={product.description} />
    <ProductCategory product={product} />
    <div className={classes.games__card__front_title}>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
    <ProductRating product={product} />
  </div>
);

export default GamesCardFront;
