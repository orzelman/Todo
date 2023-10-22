import React, { useState } from "react";

export default function AddItem(props) {
  const [newItem, setNewItem] = useState("");
  function handleChange(event) {
    setNewItem(event.target.value);
  }
  function handleKeyDown(event) {
    if(event.nativeEvent.key==="Enter") {
      console.log("enter");
      props.addTask(newItem)
    }
  }
  return (
    <div className="todo-add-item">
      <input
        placeholder="Create a new todo..."
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => handleKeyDown(event)}
      ></input>
    </div>
  );
}
