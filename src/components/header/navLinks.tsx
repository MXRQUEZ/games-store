import { FC } from "react";
import { NavLink } from "react-router-dom";
import IPage from "@/components/header/iPage";

interface INavLinks {
  pages: IPage[];
}

const NavLinks: FC<INavLinks> = ({ pages }) => (
  <div className="nav-links">
    {pages.map((page) => (
      <NavLink className="nav-links link" key={page.url} to={page.url}>
        {page.name}
      </NavLink>
    ))}
  </div>
);

export default NavLinks;
