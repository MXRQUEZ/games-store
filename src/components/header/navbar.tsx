import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import pageLinks from "@/components/header/pageLinks";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <nav className="navbar">
    <h1 className="header">{title}</h1>
    <div className="navbar__links">
      <NavLink className="header" to={pageLinks.home}>
        Home
      </NavLink>
      <NavLink className="header" to={pageLinks.products}>
        Products
      </NavLink>
      <NavLink className="header" to={pageLinks.about}>
        About
      </NavLink>
      <NavLink className="header" to={pageLinks.signIn}>
        Sign In
      </NavLink>
      <NavLink className="header" to={pageLinks.signUp}>
        Sign Up
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
