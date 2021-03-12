import React, { useState, useEffect } from "react";
import "./ViewEmployees.css";
import TotalEmployees from "./TotalEmployees";
import SearchEmployee from "./SearchEmployee";
import EmployeesTable from "./EmployeesTable";

function ViewEmployees() {
  const [count, setCount] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/employee-count/`)
      .then((response) => response.json())
      .then((data) => setCount(data));
  }, []);
  return (
    <div className="ViewEmployees">
      <div className="employee-count-container">
        <TotalEmployees title="Total Employees" count={count.total} />
        <TotalEmployees title="Active Employees" count={count.active} />
        <TotalEmployees title="Inactive Employees" count={count.inactive} />
      </div>
      <div className="employee-search container">
        <SearchEmployee />
      </div>
      <div className="employee-table container-fluid">
        <EmployeesTable />
      </div>
    </div>
  );
}
export default ViewEmployees;
