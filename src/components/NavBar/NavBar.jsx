import React from "react";
import { useState } from "react";
import { IoLogoElectron } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

import "./NavBar.css";

export default function NavBar({ handleToggle, dark }) {
  const [fix, setFix] = useState(false);

  function setFixed() {
    window.scrollY >= 100 ? setFix(true) : setFix(false);
  }
  window.addEventListener("scroll", setFixed);

  return (
    <div>
      <nav id="navWrapper" className={fix ? "navWrapper active" : "navWrapper"}>
        <a href="#home" className="logo">
          <IoLogoElectron />
        </a>
        <div className="navLinks">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#settings">
                <FaGear />
              </a>
            </li>
          </ul>
        </div>
       
        <div className="outerNavLinks">
          <ul>
            <li onClick={handleToggle}>{dark ? <FaRegSun /> : <FaMoon />}</li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#Login">Login</a> <span>|</span>
              <a href="#signup">Signup</a>
            </li>
            <li></li>
          </ul>
        </div>
       
      </nav>
    </div>
  );
}
