import { FC } from "react";
import IProduct from "@/types/iProduct";
import classes from "./gamesCard.module.scss";

interface IGamesCardProps {
  product: IProduct;
}

const GamesCard: FC<IGamesCardProps> = ({ product }) => (
  <div className={classes.games__card}>
    <div className={classes.games__card__inner}>
      <div className={classes.games__card__front}>
        <img className={classes.games__card__front_image} src={product.img} alt={product.description} />
        <div className={classes.games__card__front_title}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
      <div className={classes.games__card__back}>
        <p>{product.description}</p>
      </div>
    </div>
  </div>
);

export default GamesCard;
