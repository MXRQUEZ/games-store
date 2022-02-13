import { FC } from "react";
import classes from "./container.module.scss";

interface IContainerProps {
  id: string;
  title: string;
  isCard?: boolean;
}

const Container: FC<IContainerProps> = ({ children, id, title, isCard }) => (
  <div id={id} className={classes.container}>
    <h4 className={classes.container__title}>{title}</h4>
    <div className={isCard ? classes.card__container : ""}>{children}</div>
  </div>
);

Container.defaultProps = {
  isCard: false,
};

export default Container;
