import React from "react";

export default function ListFooter() {
  return (
    <div className="div-footer">
      <div className="footer-item">
        <p>... item left</p>
      </div>
      <div className="footer-item">
         <p>All</p>
         <p>Active</p>
         <p>Completed</p>
      </div>
      <div className="footer-item">Clear completed</div>
    </div>
  );
}
