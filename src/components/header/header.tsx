import { BrowserRouter } from "react-router-dom";
import React from "react";
import Navbar from "./navbar";
import NavRoutes from "./navRoutes";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <BrowserRouter>
    <Navbar title={title} />
    <NavRoutes />
  </BrowserRouter>
);

export default Header;
