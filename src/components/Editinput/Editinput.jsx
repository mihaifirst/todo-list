import React, { useState } from "react";
import "./Editinput.css";
import Button from "../Button/Button";

const Editinput = (props) => {
  const [inputValue, setInputValue] = useState(props.todoDesc);
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditTask = () => {
    props.editTodo(inputValue, props.id);
  };

  return (
    <div className="task">
      <input
        type="text"
        placeholder={props.placeholderText}
        value={inputValue}
        onChange={handleInputValue}
      />
      <Button textButton={props.textButton} clickFunction={handleEditTask} />
    </div>
  );
};

export default Editinput;
