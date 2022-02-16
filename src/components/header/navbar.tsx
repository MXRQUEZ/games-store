import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import IRoute from "@/types/iRoute";
import DropMenu from "@/components/header/dropMenu";

interface INavbarProps {
  routes: IRoute[];
  onClick: ((event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void) | undefined;
}

const Navbar: FC<INavbarProps> = ({ routes, onClick }) => (
  <ul className={classes.nav__routes}>
    {routes.map((route) =>
      route.sub ? (
        <DropMenu key={route.url} route={route} onClick={onClick} />
      ) : (
        <li key={route.url}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.link__active} ${classes.nav__routes_link}` : classes.nav__routes_link
            }
            to={route.url}
          >
            {route.name}
          </NavLink>
        </li>
      )
    )}
  </ul>
);

export default Navbar;
