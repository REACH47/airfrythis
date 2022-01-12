import React from "react";

function Form() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="submit">
        <input type="text" placeholder="This is a input" />
        <input type="text" placeholder="This is a input" />
        <input type="text" placeholder="This is a input" />
      </form>
    </div>
  );
}

export default Form;
