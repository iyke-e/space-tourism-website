import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <main>
        <div className="text-area">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well <br />
            genuinely go to outer space and not hover kind of on the <br /> edge
            of it. Well sit back, and relax because we’ll give you a <br />
            truly out of this world experience!
          </p>
        </div>
        <Link to="Destination" className="button" role={"button"}>
          EXPLORE
        </Link>
      </main>
    </div>
  );
};

export default Home;
