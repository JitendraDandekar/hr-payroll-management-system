import React, { useState } from "react";
import { csrftoken } from "../API/CSRFToken";
import AddEmployee from "../employees/AddEmployee";
import "./AddSalary.css";

function AddSalary({ empId }) {
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState({
    employee_id: empId,
    ppa: 0,
    monthly_salary: 0,
    basic_da: 0,
    hra: 0,
    conveyance: 0,
    pf: 0,
    esic: 0,
    professional_tax: 0,
    net_salary: 0,
  });

  const inputHandle = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const generateSalaryHandle = (e) => {
    e.preventDefault();

    let ppa = input.ppa;
    let monthly_salary = (ppa / 12).toFixed(2);
    let basic_da = (monthly_salary * 0.5).toFixed(2);
    let hra = (basic_da * 0.1).toFixed(2);
    let pf = (basic_da * 0.12).toFixed(2);
    let conveyance = (1600).toFixed(2);
    let esic = (125).toFixed(2);
    let professional_tax = (200).toFixed(2);
    let net_salary = (
      monthly_salary -
      hra -
      pf -
      conveyance -
      esic -
      professional_tax
    ).toFixed(2);

    setInput({
      ...input,
      monthly_salary: monthly_salary,
      basic_da: basic_da,
      hra: hra,
      conveyance: conveyance,
      pf: pf,
      esic: esic,
      professional_tax: professional_tax,
      net_salary: net_salary,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/api/salary/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(input),
    })
      .then((res) =>
        res.ok
          ? alert("Employee created Successfully!")
          : alert("Failed To Add!")
      )
      .then(setSubmit(true));
  };

  if (submit) {
    return <AddEmployee />;
  }

  return (
    <div className="AddSalary AddEmployee shadow-lg">
      <div className="AddEmployee__header">
        <span>
          -: <u>Add Salary</u> :-
        </span>
      </div>
      <form className="AddEmployee__form">
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>PPA</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="ppa"
              id="ppa"
              placeholder="ppa"
              value={input.ppa}
              onChange={inputHandle}
            />
            <button onClick={generateSalaryHandle}>Generate Salary</button>
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Monthly Salary</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="monthly_salary"
              id="monthly_salary"
              placeholder="monthly salary"
              value={input.monthly_salary}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Basic DA</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="basic_da"
              id="basic_da"
              placeholder="basic da"
              value={input.basic_da}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>HRA</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="hra"
              id="hra"
              placeholder="hra"
              value={input.hra}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Conveyance</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="conveyance"
              id="conveyance"
              placeholder="conveyance"
              value={input.conveyance}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>PF</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="pf"
              id="pf"
              placeholder="pf"
              value={input.pf}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>ESIC</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="esic"
              id="esic"
              placeholder="esic"
              value={input.esic}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Professional Tax</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="professional_tax"
              id="professional_tax"
              placeholder="professional_tax"
              value={input.professional_tax}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header">
            <span>Net Salary</span>
            <span className="AddEmployee__form__required">*</span>
          </div>
          <div className="AddEmployee__form__body">
            <input
              type="text"
              name="net_salary"
              id="net_salary"
              placeholder="net_salary"
              value={input.net_salary}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="AddEmployee__form__row">
          <div className="AddEmployee__form__header"></div>
          <div className="AddEmployee__form__body">
            <div className="AddEmployee__form__button">
              <input type="reset" value="Reset" className="btn btn-warning" />
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

export default AddSalary;
