import { FC } from "react";
import classes from "@/components/gamesCard/gamesCard.module.scss";
import ProductRating from "@/components/gamesCard/productRating";
import IProduct from "@/types/iProduct";
import ProductCategory from "@/components/gamesCard/productCategory";

interface IGamesCardFrontProps {
  product: IProduct;
}

const GamesCardFront: FC<IGamesCardFrontProps> = ({ product }) => {
  const productPrice = `${product.price}$`;

  return (
    <div className={classes.card__front}>
      <img className={classes.card__front_image} src={product.img} alt={product.description} />
      <ProductCategory product={product} />
      <div className={classes.card__front_title}>
        <p>{product.name}</p>
        <p>{productPrice}</p>
      </div>
      <ProductRating product={product} />
    </div>
  );
};

export default GamesCardFront;
