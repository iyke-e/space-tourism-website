import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation";
import TechnologyNav from "./TechnologyNav";
import LaunchVehicle_img from "../../assets/technologyAssets/image-launch-vehicle-portrait.jpg";
import LaunchVehicle_img_landscape from "../../assets/technologyAssets/image-launch-vehicle-landscape.jpg";
import SpaceCapsule_img from "../../assets/technologyAssets/image-space-capsule-portrait.jpg";
import SpaceCapsule_img_landscape from "../../assets/technologyAssets/image-space-capsule-landscape.jpg";
import Spaceport_img from "../../assets/technologyAssets/image-spaceport-portrait.jpg";
import Spaceport_img_landscape from "../../assets/technologyAssets/image-spaceport-landscape.jpg";

const Technology = () => {
  const location = useLocation();
  const path = location.pathname.split("/");

  let currentSrc = LaunchVehicle_img_landscape;
  let currentSrcSet = LaunchVehicle_img;

  const changeImg = () => {
    if (path[2] === "Spaceport") {
      currentSrc = Spaceport_img_landscape;
      currentSrcSet = Spaceport_img;
    } else if (path[2] === "SpaceCapsule") {
      currentSrc = SpaceCapsule_img_landscape;
      currentSrcSet = SpaceCapsule_img;
    } else {
      return;
    }
  };

  changeImg();

  return (
    <div className="technology">
      <Navigation />
      <main>
        <h5>
          <span>03</span> SPACE LAUNCH 101
        </h5>
        <div className="tech-subpage">
          <picture>
            <source
              className="sourceImg"
              media="(min-width: 62.875rem)"
              srcSet={currentSrcSet}
            />
            <img className="crew-img" src={currentSrc} />
          </picture>
          <div className="tech-txt-wrapper">
            <TechnologyNav />
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technology;
