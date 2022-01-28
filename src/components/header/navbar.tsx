import { FC } from "react";
import "./header.scss";
import pages from "@/components/header/pages";
import NavLinks from "@/components/header/navLinks";

interface NavbarProps {
  title: string;
}

const Navbar: FC<NavbarProps> = ({ title }) => (
  <nav className="navbar">
    <h1 className="nav-title">{title}</h1>
    <NavLinks pages={pages} />
  </nav>
);

export default Navbar;
