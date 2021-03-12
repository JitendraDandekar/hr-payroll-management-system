import React from "react";
import "./Period.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import moment from "moment";

function Period() {
  const startDate = moment().startOf("month").format("DD/MM/YYYY");
  const endDate = moment().endOf("month").format("DD/MM/YYYY");

  return (
    <div className="Home__period__card shadow hover">
      <span className="Home__period__date">
        Period: {startDate} - {endDate}
      </span>
      <div className="Home__period__cost">
        <div className="Home__period__payCost">
          <span className="Home__period__payCost__rupees">157,456,656.00</span>
          <span className="Home__period__payCost__tag">PAYROLL COST</span>
        </div>
        <div className="Home__period__payCost">
          <span className="Home__period__payCost__rupees">137,654,256.00</span>
          <span className="Home__period__payCost__tag">NET COST</span>
        </div>
      </div>
      <div className="Home__period__download">
        <span>
          <GetAppIcon />
        </span>
        <span>Check Status</span>
      </div>
    </div>
  );
}

export default Period;
