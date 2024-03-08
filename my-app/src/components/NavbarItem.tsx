import React from "react";
import { Link } from "react-router-dom";
import "./NavbarItem.css";
interface NavbarItemProps {
  route: string;
  text: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ route, text }) => {
  return (
    <li className="navbar-item">
      <Link to={route}>{text}</Link>
    </li>
  );
};

export default NavbarItem;
