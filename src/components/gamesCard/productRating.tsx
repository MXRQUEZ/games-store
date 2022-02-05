import React, { FC } from "react";
import IProduct from "@/types/iProduct";
import classes from "./gamesCard.module.scss";
import images from "@/constants/images";

interface IProductRatingProps {
  product: IProduct;
}

const ProductRating: FC<IProductRatingProps> = ({ product }) => {
  const ratingStars: React.ClassicElement<HTMLImageElement>[] = [];
  for (let i = 0; i < product.rating; i += 2) {
    ratingStars.push(
      <img
        key={`${product.name}${images.ratingStar.description}${i}`}
        src={images.ratingStar.path}
        alt={images.ratingStar.description}
      />
    );
  }

  if (product.rating % 2 !== 0) {
    ratingStars.pop();
    ratingStars.push(
      <img
        key={`${product.name}${images.ratingHalfStar.description}`}
        src={images.ratingHalfStar.path}
        alt={images.ratingHalfStar.description}
      />
    );
  }

  let i = 0;
  while (ratingStars.length < 5) {
    ++i;
    ratingStars.push(
      <img
        key={`${product.name}${images.ratingEmptyStar.description}${i}`}
        src={images.ratingEmptyStar.path}
        alt={images.ratingEmptyStar.description}
      />
    );
  }

  return <div className={classes.rating__container}>{ratingStars}</div>;
};

export default ProductRating;
