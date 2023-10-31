import React, { useState } from "react";
import Filters from "./Filters";

export default function ListFooter(props) {
  const leftActive = () => {
    let left = 0;
    props.tasks.forEach((task) => {
      if (task.active) left++;
    });
    return left;
  };
  function handleClickClear() {
    props.clearCompleted();
  }
  return (
    <div className="div-footer">
      <div className="footer-item">
        <p>{leftActive()} item left</p>
      </div>
      <div className="desktop-filter">
        <Filters
          newFilter={props.newFilter}
          activeFilter={props.activeFilter}
        />
      </div>
      <div className="footer-item" onClick={handleClickClear}>
        Clear completed
      </div>
    </div>
  );
}
