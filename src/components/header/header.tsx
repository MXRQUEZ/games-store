import React, { FC } from "react";
import classes from "./header.module.scss";
import routes from "@/constants/routes";
import images from "@/constants/images";
import { storeName } from "@/constants/constants";
import Navbar from "@/components/header/navbar";

const Header: FC = () => (
  <header className={classes.header}>
    <nav className={classes.navbar}>
      <img className={classes.store__logo} src={images.storeLogo.path} alt={images.storeLogo.description} />
      <h1 className={classes.store__title}>{storeName}</h1>
      <Navbar routes={routes} />
    </nav>
  </header>
);

export default React.memo(Header);
