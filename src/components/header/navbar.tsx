import React from "react";
import { NavLink } from "react-router-dom";
import pageLinks from "@/components/header/pageLinks";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => (
  <nav className="navbar">
    <h1>{title}</h1>
    <div className="navbar__links">
      <NavLink to={pageLinks.home}>Home</NavLink>
      <NavLink to={pageLinks.products}>Products</NavLink>
      <NavLink to={pageLinks.about}>About</NavLink>
      <NavLink to={pageLinks.signIn}>Sign In</NavLink>
      <NavLink to={pageLinks.signUp}>Sign Up</NavLink>
    </div>
  </nav>
);

export default Navbar;
