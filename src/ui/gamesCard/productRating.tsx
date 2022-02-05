import { FC } from "react";
import IProduct from "@/types/iProduct";
import classes from "./gamesCard.module.scss";
import otherImages from "@/constants/otherImages";

interface IProductRatingProps {
  product: IProduct;
}

const ProductRating: FC<IProductRatingProps> = ({ product }) => {
  const ratingStars: JSX.Element[] = [];
  for (let i = 0; i < product.rating; i += 2) {
    ratingStars.push(
      <img
        key={`${product.name}${otherImages.ratingStar.description}${i}`}
        src={otherImages.ratingStar.path}
        alt={otherImages.ratingStar.description}
      />
    );
  }

  if (product.rating % 2 !== 0) {
    ratingStars.pop();
    ratingStars.push(
      <img
        key={`${product.name}${otherImages.ratingHalfStar.description}`}
        src={otherImages.ratingHalfStar.path}
        alt={otherImages.ratingHalfStar.description}
      />
    );
  }

  let i = 0;
  while (ratingStars.length < 5) {
    ++i;
    ratingStars.push(
      <img
        key={`${product.name}${otherImages.ratingEmptyStar.description}${i}`}
        src={otherImages.ratingEmptyStar.path}
        alt={otherImages.ratingEmptyStar.description}
      />
    );
  }

  return <div className={classes.rating__container}>{ratingStars}</div>;
};

export default ProductRating;
