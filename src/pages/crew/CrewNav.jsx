import React from "react";
import { NavLink } from "react-router-dom";

const CrewNav = () => {
  return (
    <nav className="nav">
      <NavLink to="/Crew" end />
      <NavLink to="Mark" />
      <NavLink to="Victor" />
      <NavLink to="Anousheh" />
    </nav>
  );
};

export default CrewNav;
