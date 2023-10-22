import React, { useState } from "react";

export default function ListItem(props) {
  const [state, setState] = useState(false);
  function handleMouseOver() {
    setState(true);
  }
  function handleMouseLeave() {
    setState(false);
  }

  return (
    <div className="todo-list-item" 
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}>
      <div className="item-check">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </div>
      <div className="item-content">
        <p>{props.task}</p>
      </div>
      <div>
        <svg className={state ? "item-cross" : "hide"} xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </div>
    </div>
  );
}
