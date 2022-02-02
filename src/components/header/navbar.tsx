import { FC } from "react";
import "./header.scss";
import routes from "@/constants/routes";
import NavRoutes from "@/components/header/navRoutes";

interface INavbarProps {
  title: string;
}

const Navbar: FC<INavbarProps> = ({ title }) => (
  <nav className="navbar">
    <h1 className="nav-title">{title}</h1>
    <NavRoutes routes={routes} />
  </nav>
);

export default Navbar;
