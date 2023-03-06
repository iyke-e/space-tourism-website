import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navigation />
      <main
        style={{
          height: "60vh",
          display: "grid",
          placeContent: "center",
        }}
      >
        <h2>Page Not Found</h2>

        <button
          onClick={() => navigate("/")}
          style={{
            width: "fit-content",
            padding: "1rem",
            marginInline: "auto",
            color: "white",
            backgroundColor: "transparent",
            border: "1px solid white",
            fontSize: "1rem",
            cursor: "pointer",
            marginBlock: "1rem",
          }}
        >
          Click to go back to Home page
        </button>
      </main>
    </div>
  );
};

export default NotFound;
