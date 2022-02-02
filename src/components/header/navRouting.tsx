import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import IRoute from "@/types/iRoute";

interface INavRoutingProps {
  routes: IRoute[];
}

const NavRouting: FC<INavRoutingProps> = ({ routes }) => (
  <div className={classes.nav__routes}>
    {routes.map((page) => (
      <NavLink
        className={({ isActive }) => (isActive ? classes.link__active : classes.nav__routes_link)}
        key={page.url}
        to={page.url}
      >
        {page.name}
      </NavLink>
    ))}
  </div>
);

export default NavRouting;
