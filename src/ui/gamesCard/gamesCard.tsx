import { FC } from "react";
import IProduct from "@/types/iProduct";
import classes from "./gamesCard.module.scss";
import Button from "@/ui/button/button";

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
        <div className={classes.games__card__back__top}>
          <p>{product.description}</p>
        </div>
        <div className={classes.games__card__back__bottom}>
          <p>{product.ageCriteria}</p>
          <Button>Add to card</Button>
        </div>
      </div>
    </div>
  </div>
);

export default GamesCard;
