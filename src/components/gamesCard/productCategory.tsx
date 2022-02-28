import { FC } from "react";
import IProduct from "@/types/iProduct";
import classes from "./gamesCard.module.scss";
import { categories } from "../../../server/data/categories";

interface IProductCategoryProps {
  product: IProduct;
}

const ProductCategory: FC<IProductCategoryProps> = ({ product }) => {
  const productCategories: JSX.Element[] = [];
  const pcClassName = `fa-brands fa-windows ${classes.category}`;
  const playstationClassName = `fa-brands fa-playstation ${classes.category}`;
  const xboxClassName = `fa-brands fa-xbox ${classes.category}`;

  product.categoriesId.forEach((category) => {
    switch (category) {
      case categories.pc.id:
        productCategories.push(<i key={`${product.name}${categories.pc.name}`} className={pcClassName} />);
        break;

      case categories.playstation.id:
        productCategories.push(
          <i key={`${product.name}${categories.playstation.name}`} className={playstationClassName} />
        );
        break;

      default:
        productCategories.push(<i key={`${product.name}${categories.xbox.name}`} className={xboxClassName} />);
        break;
    }
  });

  return <div className={classes.category__container}>{productCategories}</div>;
};

export default ProductCategory;
