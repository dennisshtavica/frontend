import React, {Fragment} from "react";
import { UserIcon } from "../assets/Icons";
import { Link } from "react-router-dom";
import "./Header.css";
// import {MenuItems} from './MenuItems';


function Header() {
  return (
    <nav className="nav">
      <UserIcon />
      <a href="" className="links">
        Download
      </a>
      
    </nav>
  );
}

export default Header;
