import React from "react";
import "./Count.css";
function Count() {
  return (
    <div className="Home__employee__count shadow hover">
      <span className="Home__employee__countTitle">Employees</span>
      <div className="Home__employee__countCard">
        <div className="Home__employee__countContainer">
          <span className="Home__employee__count__lineOne">Total</span>
          <span className="Home__employee__count__lineTwo">256</span>
        </div>
        <div className="Home__employee__count__verticalLine"></div>
        <div className="Home__employee__countContainer">
          <span className="Home__employee__count__lineOne">Available</span>
          <span className="Home__employee__count__lineTwo">250</span>
        </div>
        <div className="Home__employee__count__verticalLine"></div>
        <div className="Home__employee__countContainer">
          <span className="Home__employee__count__lineOne">Leave</span>
          <span className="Home__employee__count__lineTwo">6</span>
        </div>
      </div>
    </div>
  );
}

export default Count;
