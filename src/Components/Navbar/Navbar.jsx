import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scroll >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" for="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="#">Header</Link>
        </li>
        <li>
          <Link to="#">Menu</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
