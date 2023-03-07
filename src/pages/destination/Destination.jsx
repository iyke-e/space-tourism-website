import React from "react";
import Navigation from "../../components/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import DestinationNav from "./DestinationNav";
import Moon_img from "../../assets/destinationAssets/image-moon.png";
import Europa_img from "../../assets/destinationAssets/image-europa.png";
import Mars_img from "../../assets/destinationAssets/image-mars.png";
import Titan_img from "../../assets/destinationAssets/image-titan.png";

const Destination = () => {
  const location = useLocation();
  const path = location.pathname.split("/");

  let currentSrc = Moon_img;

  const changeImg = () => {
    if (path[2] === "Europa") {
      currentSrc = Europa_img;
    } else if (path[2] === "Mars") {
      currentSrc = Mars_img;
    } else if (path[2] === "Titan") {
      currentSrc = Titan_img;
    } else {
      return;
    }
  };

  changeImg();
  return (
    <div className="destination">
      <Navigation />
      <main>
        <h5>
          <span>01</span> Pick your destination
        </h5>
        <div className="des-subpage">
          <img className="desImg" src={currentSrc} alt="moon image" />
          <div className="des-text-area">
            <DestinationNav />
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
