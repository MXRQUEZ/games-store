import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import IRoute from "@/types/iRoute";

interface INavRoutes {
  routes: IRoute[];
}

const NavRoutes: FC<INavRoutes> = ({ routes }) => (
  <div className="nav-links">
    {routes.map((page) => (
      <NavLink className="nav-links_link" key={page.url} to={page.url}>
        {page.name}
      </NavLink>
    ))}
  </div>
);

export default NavRoutes;
