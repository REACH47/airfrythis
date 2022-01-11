import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <>
      <h1 className="header-title">{props.title}</h1>
    </>
  );
}

export default Header;
