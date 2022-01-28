import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const toggleNav = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={color ? "header header-bg" : "header"}>
      {/* <div className="container"></div> */}
      <div className="logo">
        <NavLink to="/">
          <h1>GLX TRVL</h1>
        </NavLink>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/training">Training</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleNav}>
        {clicked ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
