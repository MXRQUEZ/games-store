import { FC } from "react";
import ICategory from "@/types/iCategory";
import classes from "./categoryCard.module.scss";

interface ICardProps {
  category: ICategory;
}

const CategoryCard: FC<ICardProps> = ({ category }) => (
  <div className={classes.category__card}>
    <img className={classes.category__card_image} src={category.img} alt={category.description} />
    <p className={classes.category__card_name}>{category.name}</p>
  </div>
);

export default CategoryCard;
