import { FC } from "react";
import classes from "@/components/gamesCard/gamesCard.module.scss";
import IProduct from "@/types/iProduct";
import Button from "@/components/ui/button/button";
import { buy } from "@/constants/constants";

interface IGamesCardBackProps {
  product: IProduct;
}

const GamesCardBack: FC<IGamesCardBackProps> = ({ product }) => (
  <div className={classes.card__back}>
    <div className={classes.card__back__top}>
      <p>{product.description}</p>
    </div>
    <div className={classes.card__back__bottom}>
      <p>{product.ageRating}</p>
      <Button text={buy} />
    </div>
  </div>
);

export default GamesCardBack;
