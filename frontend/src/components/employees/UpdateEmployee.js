import React, { useState, useEffect, useContext, useReducer } from "react";
import { Context } from "../API/Context";
import "./UpdateEmployee.css";
import { Redirect } from "react-router-dom";
import ProfilePic from "./profile-picture.png";
import TotalEmployees from "./TotalEmployees";

const initialState = {
  view: <Profile />,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PROFILE":
      return { view: <Profile /> };
    case "STATEMENT":
      return { view: <Statement /> };
    default:
      return state;
  }
};

function UpdateEmployee() {
  const value = useContext(Context);
  const [employee, setEmployee] = useState({});
  const [salary, setSalary] = useState({});
  const [state, dispatch] = useReducer(reducer, initialState);

  const numberFormat = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/employee/${value.empId}/`)
      .then((response) => response.json())
      .then((data) => setEmployee(data));
    fetch(`http://127.0.0.1:8000/api/salary/?employee_id=${value.empId}`)
      .then((response) => response.json())
      .then((data) => setSalary(data[0]));
  }, []);

  if (!value.empId) {
    return <Redirect to="/view-employees" />;
  }

  return (
    <div className="UpdateEmployee">
      <div className="UpdateEmployee__profile">
        <img src={employee.profilePic} alt={ProfilePic} />
        <span id="UpdateEmployee__profile__fullName">
          {employee.firstname + " " + employee.lastname}
        </span>
        <span className="mb-2">
          {employee.designation}, {employee.department}
        </span>
        <div className="UpdateEmployee__profile__title mb-2">
          <small>Personal Details</small>
          <div></div>
        </div>
        <div className="UpdateEmployee__profile__personalDetails">
          <b>Email:</b>
          <i>{employee.email}</i>
          <b>Contact:</b>
          <i>{employee.contact}</i>
          <b>Gender:</b>
          <i>{employee.gender}</i>
          <b>Date Of Birth:</b>
          <i>{employee.dob}</i>
          <b>Date Of Hired:</b>
          <i>{employee.dateOfHired}</i>
          <b>Date Of Joined:</b>
          <i>{employee.dateOfJoined}</i>
        </div>
        <div className="UpdateEmployee__profile__title mb-2">
          <div></div>
        </div>
      </div>
      <div className="UpdateEmployee__details">
        <div className="UpdateEmployee__details__count">
          <TotalEmployees
            title="Salary(PPA)"
            count={numberFormat(salary.ppa)}
          />
          <TotalEmployees
            title="Salary(Monthly)"
            count={numberFormat(salary.monthly_salary)}
          />
          <TotalEmployees title="Working Days(Monthly)" count="24" />
        </div>
        <div className="UpdateEmployee__details__nav shadow">
          <ul>
            <li onClick={() => dispatch({ type: "PROFILE" })}>Profile</li>
            <li onClick={() => dispatch({ type: "STATEMENT" })}>Statement</li>
          </ul>
        </div>
        <div className="UpdateEmployee__details__container shadow">
          {state.view}
        </div>
      </div>
    </div>
  );
}
export default UpdateEmployee;

function Profile() {
  return (
    <div>
      <div className="UpdateEmployee__details__bankInfo shadow">
        <span className="UpdateEmployee__details__bankInfo__header">
          Bank information
        </span>
        <ul>
          <li>Bank name</li>
          <li>ICICI Bank</li>
        </ul>
        <ul>
          <li>Bank account No.</li>
          <li>159843014641</li>
        </ul>
        <ul>
          <li>IFSC Code</li>
          <li>ICI24504</li>
        </ul>
        <ul>
          <li>PAN No</li>
          <li>TC000Y56</li>
        </ul>
      </div>
    </div>
  );
}

function Statement() {
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">SRNO</th>
            <th scope="col">Salary</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">PaySlip</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>20,800.00</td>
            <td>31/01/2021</td>
            <td>Paid</td>
            <td>download</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

//https://smarthr-react.dreamguystech.com/orange/app/profile/employee-profile
