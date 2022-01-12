import React, { useState } from "react";
import "./FryerCard.scss";

function FryerCard() {
  const [submitValue, setSubtmitValue] = useState("");

  return (
    <div className="card">
      <h3 className="card__title">Hello world</h3>
    </div>
  );
}

export default FryerCard;
