import { FC } from "react";
import classes from "./searchbar.module.scss";

const Searchbar: FC = () => (
  <div className="search__container">
    <input className={classes.searchbar} type="text" placeholder="Search" />
  </div>
);

export default Searchbar;
