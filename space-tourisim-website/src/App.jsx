import React from "react";
import { Route, Routes } from "react-router-dom";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination";
import { Moon } from "./pages/destination/Moon";
import { Mars } from "./pages/destination/Mars";
import { Europa } from "./pages/destination/Europa";
import { Titan } from "./pages/destination/Titan";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Technology from "./pages/technology/Technology";
import Douglas from "./pages/crew/Douglas";
import Anousheh from "./pages/crew/Anousheh";
import Mark from "./pages/crew/Mark";
import Victor from "./pages/crew/Victor";
import LaunchVehicle from "./pages/technology/LaunchVehicle";
import Spaceport from "./pages/technology/Spaceport";
import SpaceCapsule from "./pages/technology/SpaceCapsule";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />

        <Route path="Destination" element={<Destination />}>
          <Route index element={<Moon />} />
          <Route path="Mars" element={<Mars />} />
          <Route path="Europa" element={<Europa />} />
          <Route path="Titan" element={<Titan />} />
        </Route>

        <Route path="Crew" element={<Crew />}>
          <Route index element={<Douglas />} />
          <Route path="Anousheh" element={<Anousheh />} />
          <Route path="Mark" element={<Mark />} />
          <Route path="Victor" element={<Victor />} />{" "}
        </Route>

        <Route path="Technology" element={<Technology />}>
          <Route index element={<LaunchVehicle />} />
          <Route path="Spaceport" element={<Spaceport />} />
          <Route path="SpaceCapsule" element={<SpaceCapsule />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
