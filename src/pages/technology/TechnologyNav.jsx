import React from "react";
import { NavLink } from "react-router-dom";

const TechnologyNav = () => {
  return (
    <div className="nav">
      <NavLink id="techhome" to="/Technology " end>
        1
      </NavLink>
      <NavLink id="spaceport" to="Spaceport">
        2
      </NavLink>
      <NavLink id="spacecapsule" to="SpaceCapsule">
        3
      </NavLink>
    </div>
  );
};

export default TechnologyNav;
