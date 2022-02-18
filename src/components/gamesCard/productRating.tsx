import { FC } from "react";
import IProduct from "@/types/iProduct";
import classes from "./gamesCard.module.scss";

interface IProductRatingProps {
  product: IProduct;
}

const ProductRating: FC<IProductRatingProps> = ({ product }) => {
  const starClassName = "fa fa-star fa-lg";
  const starsMaxAmount = 5;
  const ratingStars: JSX.Element[] = [];

  for (let i = 0; i < starsMaxAmount; ++i) {
    if (product.rating < i + 1) {
      ratingStars.push(<i key={`${product.id}${product.name}emptyStar${i}`} className={starClassName} />);
      // eslint-disable-next-line no-continue
      continue;
    }

    ratingStars.push(<i id={classes.checked} key={`${product.id}${product.name}star${i}`} className={starClassName} />);
  }

  return <div className={classes.card__front_rating}>{ratingStars}</div>;
};

export default ProductRating;
