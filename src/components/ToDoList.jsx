import React from "react";

const ToDoList = (props) => {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.data}</li>
    </div>
  );
};

export default ToDoList;
