import React from "react";

function TotalEmployees({ title, count }) {
  return (
    <div className="employee-count card shadow">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        <h5 className="card-title">{count}</h5>
      </div>
    </div>
  );
}
export default TotalEmployees;
