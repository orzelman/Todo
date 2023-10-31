import React from "react";

export default function Filter(props) {
  function handleClickFilter(e) {
    props.newFilter(e.target.textContent.toLowerCase());
  }
  return (
    <div className="footer-item p0">
      <p
        className={`p-footer ${props.activeFilter === "all" ? "blue-text" : ""}`}
        onClick={handleClickFilter}
      >
        All
      </p>
      <p
        className={`p-footer ${props.activeFilter === "active" ? "blue-text" : ""}`}
        onClick={handleClickFilter}
      >
        Active
      </p>
      <p
        className={`p-footer ${props.activeFilter === "completed" ? "blue-text" : ""}`}
        onClick={handleClickFilter}
      >
        Completed
      </p>
    </div>
  );
}
