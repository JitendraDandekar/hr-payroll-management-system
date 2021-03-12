import React, { useEffect, useState } from "react";
import "./Salary.css";
import SalarySearch from "./SalarySearch";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { csrftoken } from "../API/CSRFToken";
import moment from "moment";

function Salary() {
  const [salaryData, setSalaryData] = useState([]);

  const get_salary = () => {
    fetch(`http://127.0.0.1:8000/api/monthly-salary/`)
      .then((res) => res.json())
      .then((data) => setSalaryData(data));
  };

  useEffect(() => {
    get_salary();
  }, []);

  return (
    <div className="Salary">
      <div className="Salary__employee shadow">
        <div className="Salary__employee__search">
          <SalarySearch setSalaryData={setSalaryData} />
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">SRNO</th>
              <th scope="col">Employee ID</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Department</th>
              <th scope="col">From Date</th>
              <th scope="col">To Date</th>
              <th scope="col">Paid Status</th>
              <th scope="col">Paid Date</th>
              <th scope="col-sm-1"></th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((data, i) => {
              return (
                <SalaryList
                  key={i}
                  srno={i + 1}
                  empId={data.emp_id}
                  empName={data.full_name}
                  department={data.department}
                  fromDate={data.from_date}
                  toDate={data.to_date}
                  status={data.paid_status}
                  date={data.paid_date}
                  get_salary={get_salary}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Salary;

function SalaryList({
  srno,
  empId,
  empName,
  department,
  fromDate,
  toDate,
  status,
  date,
  get_salary,
}) {
  const [paidStatus, setPaidStatus] = useState(status ? "1" : "0");
  const [paidDate, setPaidDate] = useState();
  const updateHandle = () => {
    fetch(`http://127.0.0.1:8000/api/monthly-salary/${empId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({ paidStatus: paidStatus, paidDate: paidDate }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(get_salary);
  };

  useEffect(() => {
    setPaidDate(paidStatus == 1 ? moment(new Date()).format("YYYY-MM-DD") : "");
  }, [paidStatus]);

  return (
    <tr>
      <th scope="row">{srno}</th>
      <td>{empId}</td>
      <td>{empName}</td>
      <td>{department}</td>
      <td>{fromDate}</td>
      <td>{toDate}</td>
      <td>
        <select
          name="paidStatus"
          id="paidStatus"
          value={paidStatus}
          onChange={(e) => setPaidStatus(e.target.value)}
        >
          <option value="1">Paid</option>
          <option value="0">Unpaid</option>
        </select>
      </td>
      <td>{date}</td>
      <td>
        <span className="Salary__upload" onClick={updateHandle} title="update">
          <CloudUploadIcon />
        </span>
      </td>
    </tr>
  );
}
