import React, { useEffect, useState, useContext } from "react";
import EmployeesTableRow from "./EmployeesTableRow";
import { Context } from "../API/Context";

function EmployeesTable() {
  const value = useContext(Context);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/employee/`)
      .then((response) => response.json())
      .then((data) => value.setEmployees(data));
  }, []);

  return (
    <table className="employees-table table table-hover bg-light shadow">
      <thead>
        <tr>
          <th scope="col">SrNo</th>
          <th scope="col">Employee Id</th>
          <th scope="col" className="w-25">
            Employee Name
          </th>
          <th scope="col">Department</th>
          <th scope="col">Designation</th>
          <th scope="col">Gender</th>
          <th scope="col">Date Of Hired</th>
          <th scope="col">Date Of Joined</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="employees-tbody">
        {value.employees.length > 0 &&
          value.employees.map((e, i) => (
            <EmployeesTableRow
              key={e.emp_id}
              srno={i + 1}
              emp_id={e.emp_id}
              employee_name={e.firstname + " " + e.lastname}
              department={e.department}
              designation={e.designation}
              gender={e.gender}
              date_of_hired={e.dateOfHired}
              date_of_joined={e.dateOfJoined}
            />
          ))}
        {value.employees.length <= 0 && (
          <tr>
            <th colSpan="8" className="text-center">
              No Records Found
            </th>
          </tr>
        )}
      </tbody>
    </table>
  );
}
export default EmployeesTable;
