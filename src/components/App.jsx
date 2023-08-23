import React, { useEffect, useState } from "react";
import Input from "./InputField";
import ToDoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const handleUpdate = () => {
    setInputArray((prevValue) => {
      const newArray = [...prevValue, inputText];
      localStorage.setItem("todoList", JSON.stringify(newArray));
      return newArray;
    });
    setInputText("");
  };
  const deleteItem = (id) => {
    setInputArray((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  };

  useEffect(() => {
    const storedData = localStorage.getItem("todoList");
    if (storedData) {
      setInputArray(JSON.parse(storedData));
    }
  }, []);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        {/* <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleUpdate}>
          <span>Add</span>
        </button> */}
        <Input
          handleChange={handleChange}
          handleUpdate={handleUpdate}
          inputText={inputText}
        />
      </div>
      <div>
        <ul>
          {inputArray.map((todoList, index) => (
            <ToDoList
              data={todoList}
              key={index}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
