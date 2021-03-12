import React, { useState } from "react";
import "./AddEmployee.css";
import { csrftoken } from "../API/CSRFToken";
import AddSalary from "../salary/AddSalary";

function AddEmployee() {
  const [input, setInput] = useState({
    active: true,
  });
  const [file, setFile] = useState({});
  const [empId, setEmpId] = useState();
  const [submit, setSubmit] = useState(false);

  const inputHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileHandle = (e) => {
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(input).map((key) => {
      formData.append(key, input[key]);
    });
    Object.keys(file).map((key) => {
      formData.append(key, file[key]);
    });

    fetch(`http://127.0.0.1:8000/api/employee/`, {
      method: "POST",
      headers: {
        "X-CSRFToken": csrftoken,
      },
      body: formData,
    }).then((res) =>
      res.ok
        ? (res
            .json()
            .then((data) => setEmpId(data.emp_id))
            .then(setSubmit(true)),
          alert("Employee Added Successfully!"))
        : alert("Failed To Add!")
    );
  };

  const resetHandle = () => {
    setInput({});
  };

  if (submit && empId) {
    return <AddSalary empId={empId} />;
  }

  return (
    <div className="AddEmployee shadow-lg">
      <div className="AddEmployee__header">
        <span>
          -: <u>Employee Registration Form</u> :-
        </span>
      </div>
      <form className="AddEmployee__form">
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Name</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="firstname"
              onChange={inputHandle}
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="lastname"
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Email</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Contact</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="tel"
              name="contact"
              id="contact"
              placeholder="contact"
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Gender</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <div className="AddEmployee__form__radio">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={inputHandle}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="AddEmployee__form__radio">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={inputHandle}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="AddEmployee__form__radio">
              <input
                type="radio"
                name="gender"
                id="transgender"
                value="transgender"
                onChange={inputHandle}
              />
              <label htmlFor="transgender">Transgender</label>
            </div>
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Date Of Birth</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input type="date" name="dob" id="dob" onChange={inputHandle} />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Address</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <textarea
              name="address"
              id="address"
              rows="3"
              placeholder="address"
              onChange={inputHandle}
            ></textarea>
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Profile</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="department"
              id="department"
              placeholder="department"
              onChange={inputHandle}
            />
            <input
              type="text"
              name="designation"
              id="designation"
              placeholder="designation"
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Date Of Hired</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="date"
              name="dateOfHired"
              id="dateOfHired"
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Date Of Joined</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="date"
              name="dateOfJoined"
              id="dateOfJoined"
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Profile Photo</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="file"
              accept="image/*"
              name="profilePic"
              id="profilePic"
              onChange={fileHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header"></div>
          <div className="AddEmployee__form__body">
            <div className="AddEmployee__form__button">
              <input
                type="reset"
                value="Reset"
                className="btn btn-warning"
                onClick={resetHandle}
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-success"
                onClick={submitHandle}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
