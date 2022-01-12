import React from "react";
import "./FryerCard.scss";

function FryerCard() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="card">
      <h3 className="card__title">Hello world</h3>
    </div>
  );
}

export default FryerCard;
