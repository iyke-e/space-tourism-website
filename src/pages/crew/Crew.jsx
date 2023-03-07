import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation";
import CrewNav from "./CrewNav";
import Douglas_img from "../../assets/crewAssets/image-douglas-hurley.png";
import Mark_img from "../../assets/crewAssets/image-mark-shuttleworth.png";
import Victor_img from "../../assets/crewAssets/image-victor-glover.png";
import Anousheh_img from "../../assets/crewAssets/image-anousheh-ansari.png";

const Crew = () => {
  const location = useLocation();
  const path = location.pathname.split("/");

  let currentSrc = Douglas_img;

  const changeImg = () => {
    if (path[2] === "Mark") {
      currentSrc = Mark_img;
    } else if (path[2] === "Victor") {
      currentSrc = Victor_img;
    } else if (path[2] === "Anousheh") {
      currentSrc = Anousheh_img;
    } else {
      return;
    }
  };

  changeImg();

  return (
    <div className="crew">
      <Navigation />
      <main>
        <h5>
          <span>02</span> Meet your crew
        </h5>{" "}
        <div className="crew-subpage">
          <div className="crew-img-wrapper">
            <img className="crew-img" src={currentSrc} alt="" />
          </div>
          <div className="crew-txt-wrapper">
            <Outlet />
            <CrewNav />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
