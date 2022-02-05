import { FC } from "react";
import ICategory from "@/types/iCategory";
import classes from "./categoryCard.module.scss";

interface ICardProps {
  category: ICategory;
  onClick: (category: ICategory) => void;
}

const CategoryCard: FC<ICardProps> = ({ category, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    className={classes.category__card}
    onClick={() => onClick(category)}
    onKeyDown={() => onClick(category)}
  >
    <img className={classes.category__card_image} src={category.img} alt={category.description} />
    <p className={classes.category__card_name}>{category.name}</p>
  </div>
);

export default CategoryCard;