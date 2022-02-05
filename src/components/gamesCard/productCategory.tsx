import React, { FC } from "react";
import IProduct from "@/types/iProduct";
import classes from "./gamesCard.module.scss";
import { categories } from "../../../server/data/categories";

interface IProductCategoryProps {
  product: IProduct;
}

const ProductCategory: FC<IProductCategoryProps> = ({ product }) => {
  const productCategories: React.ClassicElement<HTMLImageElement>[] = [];
  product.categoriesId.forEach((category) => {
    if (category === categories.pc.id) {
      productCategories.push(
        <img
          key={`${product.name}${categories.pc.name}`}
          className={classes.games__card__front_category}
          src={categories.pc.img}
          alt={categories.pc.description}
        />
      );
    } else {
      productCategories.push(
        category === categories.playstation.id ? (
          <img
            key={`${product.name}${categories.playstation.name}`}
            className={classes.games__card__front_category}
            src={categories.playstation.img}
            alt={categories.playstation.description}
          />
        ) : (
          <img
            key={`${product.name}${categories.xbox.name}`}
            className={classes.games__card__front_category}
            src={categories.xbox.img}
            alt={categories.xbox.description}
          />
        )
      );
    }
  });

  return <div className={classes.category__container}>{productCategories}</div>;
};

export default ProductCategory;
