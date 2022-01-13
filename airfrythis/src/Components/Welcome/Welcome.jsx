import React from "react";
import "./Welcome.scss";

function Welcome() {
  return (
    <>
      <div className="welcome">
        <h1 className="welcome__title">AIR FRY THIS</h1>
        <div className="welcome__enter-container">
          <button className="welcome__enter">start frying</button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
