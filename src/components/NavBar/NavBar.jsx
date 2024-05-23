import React from "react";
import { useState } from "react";
import { IoLogoElectron } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

import "./NavBar.css";

export default function NavBar({ handleToggle, dark }) {
  const [fix, setFix] = useState(false);
  const [visible, setVisible] = useState(false);

  function setFixed() {
    window.scrollY >= 100 ? setFix(true) : setFix(false);
  }
  window.addEventListener("scroll", setFixed);

  function toggleVisibility() {
    setVisible(!visible);
  }

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
                <FaGear onClick={toggleVisibility} />
              </a>
            </li>
          </ul>
        </div>

        <div className="outerNavLinks">
          {visible ? (
            <ul>
              <li onClick={handleToggle}>
                {dark ? <FaRegSun className="dark-icon" /> : <FaMoon />}
              </li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#product">Product</a>
              </li>
              <li>
                <a href="#Login">Login</a> <span className="split">|</span>
                <a href="#signup">Signup</a>
              </li>
              <li></li>
            </ul>
          ) : (
            <div className="emptyContainer"></div>
          )}
        </div>
      </nav>
    </div>
  );
}
