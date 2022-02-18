import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import IRoute from "@/types/iRoute";
import DropMenu from "@/components/header/dropMenu";
import UserMenu from "@/components/header/userMenu";

interface INavbarProps {
  routes: IRoute[];
}

const Navbar: FC<INavbarProps> = ({ routes }) => (
  <ul className={classes.nav__routes}>
    {routes.map((route) =>
      route.sub ? (
        <DropMenu key={route.url} route={route} />
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
    <UserMenu />
  </ul>
);

export default Navbar;
