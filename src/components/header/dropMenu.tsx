import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "@/components/header/header.module.scss";
import IRoute from "@/types/iRoute";

interface IDropMenuProps {
  route: IRoute;
}

const DropMenu: FC<IDropMenuProps> = ({ route }) => (
  <li className={classes.drop_menu}>
    <NavLink
      to={route.url}
      className={({ isActive }) =>
        isActive ? `${classes.link__active} ${classes.nav__routes_link}` : classes.nav__routes_link
      }
    >
      {route.name}
    </NavLink>
    <ul className={classes.menu}>
      {route.sub?.map((innerRoute) => (
        <li className={classes.menu__item} key={innerRoute.id}>
          <NavLink
            to={innerRoute.url}
            className={({ isActive }) =>
              isActive ? `${classes.menu__link__active} ${classes.menu__link}` : classes.menu__link
            }
          >
            {innerRoute.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </li>
);

export default DropMenu;
