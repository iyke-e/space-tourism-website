import React from "react";
import Logo_img from "../assets/shared/logo.svg";
import Hamburger_img from "../assets/shared/icon-hamburger.svg";
import Close_img from "../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const openMenu = () => {
    const nav = document.querySelector(".navigation");
    const openMenuBtn = document.querySelector(".hamburger");
    const bodyEl = document.querySelector("main");

    nav.classList.toggle("open");
    bodyEl.classList.toggle("lockScroll");

    if (nav.className.includes("open")) {
      openMenuBtn.src = Close_img;
    } else {
      openMenuBtn.src = Hamburger_img;
    }
  };

  return (
    <>
      <header>
        <img className="logo" src={Logo_img} alt="logo" />
        <img
          className="hamburger"
          src={Hamburger_img}
          alt="open menu"
          onClick={openMenu}
        />
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/">
                <span>00</span> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Destination">
                <span>01</span> Destination
              </NavLink>
            </li>
            <li>
              <NavLink to="/Crew">
                <span>02</span> Crew
              </NavLink>
            </li>
            <li>
              <NavLink to="/Technology">
                <span>03</span> Technology
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
