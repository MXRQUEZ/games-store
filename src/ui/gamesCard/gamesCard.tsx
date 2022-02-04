import { FC } from "react";
import IProduct from "@/types/iProduct";
import classes from "./gamesCard.module.scss";
import GamesCardFront from "@/ui/gamesCard/gamesCardFront";
import GamesCardBack from "./gamesCardBack";

interface IGamesCardProps {
  product: IProduct;
}

const GamesCard: FC<IGamesCardProps> = ({ product }) => (
  <div className={classes.games__card}>
    <div className={classes.games__card__inner}>
      <GamesCardFront product={product} />
      <GamesCardBack product={product} />
    </div>
  </div>
);

export default GamesCard;
