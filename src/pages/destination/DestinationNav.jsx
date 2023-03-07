import { NavLink } from "react-router-dom";

const DestinationNav = () => {
  return (
    <nav className="nav">
      <NavLink className="link" to="/Destination" end>
        MOON
      </NavLink>
      <NavLink className="link" to="Mars">
        MARS
      </NavLink>
      <NavLink className="link" to="Europa">
        EUROPA
      </NavLink>
      <NavLink className="link" to="Titan">
        TITAN
      </NavLink>
    </nav>
  );
};

export default DestinationNav;
