import React from "react";
import "./PayDate.css";
import moment from "moment";

function PayDate() {
  const lastDay = moment().endOf("month").format("DD");
  const monthYear = moment().endOf("month").format("MMM, YYYY");

  return (
    <div className="Home__payDate__card shadow hover">
      <span className="Home__payDate__card__lineOne">PAY DAY</span>
      <span className="Home__payDate__card__lineTwo">{lastDay}</span>
      <span className="Home__payDate__card__lineThree">{monthYear}</span>
      <div className="Home__payDate__card__lineFour"></div>
      <span className="Home__payDate__card__lineFive">256 Employees</span>
    </div>
  );
}

export default PayDate;
