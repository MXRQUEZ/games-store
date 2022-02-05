import { FC } from "react";
import classes from "@/components/gamesCard/gamesCard.module.scss";
import IProduct from "@/types/iProduct";
import Button from "@/components/ui/button/button";
import { buy } from "@/constants/other";

interface IGamesCardBackProps {
  product: IProduct;
}

const GamesCardBack: FC<IGamesCardBackProps> = ({ product }) => (
  <div className={classes.games__card__back}>
    <div className={classes.games__card__back__top}>
      <p>{product.description}</p>
    </div>
    <div className={classes.games__card__back__bottom}>
      <p>{product.ageCriteria}</p>
      <Button>{buy}</Button>
    </div>
  </div>
);

export default GamesCardBack;
