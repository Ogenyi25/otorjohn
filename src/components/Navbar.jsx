import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../asset/logo.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation()
  //function that handle the change background on scroll
  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const getActiveMenu = (link) => {
    console.log(location)
    const lnk = location.pathname.split('/')[1]
    console.log(lnk)
    return (lnk === link) ? "navlinks active-class" : "navlinks";
  }

  return (
    <div>
      <div className={navbar ? "navbar active" : "navbar"}>
        <NavLink to="/" className="logo">
          <img src={Logo} alt="myImg" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" className={getActiveMenu('')} activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getActiveMenu('about')} activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={getActiveMenu('projects')} activeClassName="active-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getActiveMenu('contact')} activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
