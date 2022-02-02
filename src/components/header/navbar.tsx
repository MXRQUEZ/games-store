import { FC } from "react";
import classes from "./header.module.scss";
import routes from "@/constants/routes";
import NavRouting from "@/components/header/navRouting";
import logo from "@/assets/images/GameStore_Logo.png";

interface INavbarProps {
  title: string;
}

const Navbar: FC<INavbarProps> = ({ title }) => (
  <nav className={classes.navbar}>
    <img className={classes.store__logo} src={logo} alt="logo" />
    <h1 className={classes.store__title}>{title}</h1>
    <NavRouting routes={routes} />
  </nav>
);

export default Navbar;
