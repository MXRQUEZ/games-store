import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import IRoute from "@/types/iRoute";
import otherImages from "@/constants/otherImages";

interface INavbarProps {
  routes: IRoute[];
}

const Navbar: FC<INavbarProps> = ({ routes }) => (
  <ul className={classes.nav__routes}>
    {routes.map((route) =>
      route.sub ? (
        <li key={route.url} className={classes.drop_menu}>
          <NavLink
            to={route.url}
            className={({ isActive }) => (isActive ? classes.link__active : classes.nav__routes_link)}
          >
            {route.name}
            <img className={classes.arrow} src={otherImages.arrow.path} alt={otherImages.arrow.description} />
          </NavLink>
          <ul className={classes.drop_menu__inner}>
            {route.sub.map((innerRoute) => (
              <li className={classes.drop_menu__inner__item} key={innerRoute.id}>
                <NavLink
                  to={innerRoute.url}
                  className={({ isActive }) =>
                    isActive ? classes.drop_menu__inner_link__active : classes.drop_menu__inner_link
                  }
                >
                  {innerRoute.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.link__active : classes.nav__routes_link)}
            key={route.url}
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
