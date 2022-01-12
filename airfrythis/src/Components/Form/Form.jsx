import React from "react";
import "./Form.scss";

function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
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
    </div>
  );
}

export default Form;
