import React, { useState } from "react";

export default function ListItem(props) {
  console.log();
  const [state, setState] = useState(false);
  function handleMouseOver() {
    setState(true);
  }
  function handleMouseLeave() {
    setState(false);
  }
  function handleClickCross(e) {
    e.stopPropagation();
    console.log("click cross");
    props.deleteTask(props.task._id);
  }
  // function handleClickContent() {
  //   console.log("click content");
  //   props.disactiveTask(props.task._id);
  // }
  return (
    <div
      className="todo-list-item"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{
        display: `${
          (props.filter === "active" && !props.task.active) ||
          (props.filter === "completed" && props.task.active)
            ? "none"
            : ""
        }`,
      }}
    >
      <div
        className={`item-check ${
          props.task.active ? "" : "item-check-disactive"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </div>
      <div
        className={`item-content ${
          props.task.active ? "" : "item-content-disactive"
        }`}
      >
        <p id="content">{props.task.content}</p>
      </div>
      <div
        className={`item-cross ${state ? "" : "hide"}`}
        onClick={handleClickCross}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            class="cross-svg"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </div>
    </div>
  );
}
