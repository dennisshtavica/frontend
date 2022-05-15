import React, { Fragment, useState } from "react";
import { UserIcon } from "../assets/Icons";
import { Link } from "react-router-dom";
import "./Header.css";
import { MenuItems } from "./MenuItems";
import Dropdown from "./Dropdown";
import HomePage from "./HomePage";

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="nav">
        <Link to="/" className="logo-link">
          <UserIcon />
        </Link>
 

      <div className="right-side">
        <a href="" className="links">
          Download
        </a>
        <div className="separator">
          <span></span>
        </div>
        <ul>
          <li
            className="nav-item"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            onClick={() => setDropdown(!dropdown)}
          >
            <li className="nav-links">
              Profile <i className="fas fa-caret-down" />
            </li>
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
