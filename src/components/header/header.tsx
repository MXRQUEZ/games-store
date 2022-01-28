import React from "react";
import Navbar from "./navbar";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => <Navbar title={title} />;

export default Header;
