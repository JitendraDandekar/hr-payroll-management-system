import React, { useEffect, useState } from "react";
import "./SalarySearch.css";

function SalarySearch({ setSalaryData }) {
  const [input, setInput] = useState({
    paidStatus: "",
    fullName: "",
    department: "",
  });

  const submitHandle = (e) => {
    e.preventDefault();

    if (
      input.fullName !== "" ||
      input.paidStatus !== "" ||
      input.department !== ""
    ) {
      fetch(
        `http://127.0.0.1:8000/api/monthly-salary/?paidStatus=${input.paidStatus}&fullName=${input.fullName}&department=${input.department}`
      )
        .then((res) => res.json())
        .then((data) => setSalaryData(data));
    } else {
      fetch(`http://127.0.0.1:8000/api/monthly-salary/`)
        .then((res) => res.json())
        .then((data) => setSalaryData(data));
    }
  };

  return (
    <form className="SalarySearch input-group">
      <label htmlFor="employee-search-input" className="input-group-text">
        Employee :{" "}
      </label>
      <input
        type="text"
        placeholder="Search Employee"
        id="employee-search-input"
        className="form-control"
        onChange={(e) => setInput({ ...input, fullName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department"
        className="form-control"
        onChange={(e) => setInput({ ...input, department: e.target.value })}
      />
      <label htmlFor="employee-search-salary" className="input-group-text">
        Salary :{" "}
      </label>
      <select
        className="form-select"
        id="employee-search-salary"
        onChange={(e) => setInput({ ...input, paidStatus: e.target.value })}
      >
        <option value="">All</option>
        <option value="1">Paid</option>
        <option value="0">Unpaid</option>
      </select>
      <input
        type="submit"
        value="Search"
        onClick={submitHandle}
        className="btn btn-warning input-group-text"
      />
    </form>
  );
}
export default SalarySearch;
