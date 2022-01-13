import React from "react";
import Header from "../Header/Header";
import FryerCard from "../FryerCard/FryerCard";
import "./Form.scss";

function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <Header />
      <form className="form__container" action="submit">
        <input
          className="form__input"
          type="text"
          placeholder="This is a input"
        />
        <input
          className="form__input"
          type="text"
          placeholder="This is a input"
        />
        <input
          className="form__input"
          type="text"
          placeholder="This is a input"
        />

        <button className="form__button" onSubmit={handleOnSubmit}>
          POST
        </button>
      </form>

      <FryerCard />
    </div>
  );
}

export default Form;
