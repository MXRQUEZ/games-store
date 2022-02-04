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
    ratingStars.push(<img src={otherImages.ratingStar.path} alt={otherImages.ratingStar.description} />);
  }

  if (product.rating % 2 !== 0) {
    ratingStars.pop();
    ratingStars.push(<img src={otherImages.ratingHalfStar.path} alt={otherImages.ratingHalfStar.description} />);
  }

  return <div className={classes.rating__container}>{ratingStars}</div>;
};

export default ProductRating;
