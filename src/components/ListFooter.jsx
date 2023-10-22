import React from "react";

export default function ListFooter(props) {
  const leftActive = () => {
    let left = 0;
    props.tasks.forEach((task) => {
      if (task.active) left++;
    });
    return left;
  };
  function handleClickFilter(e) {
    props.newFilter(e.target.textContent.toLowerCase());
  }
  return (
    <div className="div-footer">
      <div className="footer-item">
        <p>{leftActive()} item left</p>
      </div>
      <div className="footer-item">
        <p onClick={handleClickFilter}>All</p>
        <p onClick={handleClickFilter}>Active</p>
        <p onClick={handleClickFilter}>Completed</p>
      </div>
      <div className="footer-item">Clear completed</div>
    </div>
  );
}
