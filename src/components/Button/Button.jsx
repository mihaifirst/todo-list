import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.clickFunction}>
      {props.textButton}
    </button>
  );
};

export default Button;
