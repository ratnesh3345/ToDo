import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        onChange={props.handleChange}
        type="text"
        value={props.inputText}
      />
      <button onClick={props.handleUpdate}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default Input;
