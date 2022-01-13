import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.scss";

function Welcome() {
  return (
    <>
      <div className="welcome">
        <h1 className="welcome__title">AIR FRY THIS</h1>
        <div className="welcome__enter-container">
          <Link to="/form">
            <button className="welcome__enter">start frying</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
