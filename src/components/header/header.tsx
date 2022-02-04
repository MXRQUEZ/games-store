import { FC } from "react";
import classes from "./header.module.scss";
import routes from "@/constants/routes";
import otherImages from "@/constants/otherImages";
import { storeName } from "@/constants/other";
import Navbar from "@/components/header/navbar";

const Header: FC = () => (
  <header className={classes.header}>
    <nav className={classes.navbar}>
      <img className={classes.store__logo} src={otherImages.storeLogo.path} alt={otherImages.storeLogo.description} />
      <h1 className={classes.store__title}>{storeName}</h1>
      <Navbar routes={routes} />
    </nav>
  </header>
);

export default Header;
