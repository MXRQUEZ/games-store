import { FC } from "react";
import classes from "./block.module.scss";

interface IBlockProps {
  id: string;
  title: string;
}

const Block: FC<IBlockProps> = ({ children, id, title }) => (
  <div id={id} className={classes.block}>
    <h4 className={classes.title}>{title}</h4>
    <hr />
    <div className={classes.images__wrapper}>{children}</div>
  </div>
);

export default Block;
