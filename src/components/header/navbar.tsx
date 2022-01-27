import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import pages from "@/components/header/pages";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <nav className="navbar">
    <h1 className="navbar__title">{title}</h1>
    <div className="navbar__links">
      <NavLink to={pages.home}>Home</NavLink>
      <NavLink to={pages.products}>Products</NavLink>
      <NavLink to={pages.about}>About</NavLink>
      <NavLink to={pages.signIn}>Sign In</NavLink>
      <NavLink to={pages.signUp}>Sign Up</NavLink>
    </div>
  </nav>
);

export default Navbar;
