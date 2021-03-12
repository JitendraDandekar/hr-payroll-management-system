import React from "react";
import "./Wishes.css";
import cake from "./cake.jpg";

function Wishes() {
  return (
    <div className="Wishes shadow hover">
      <span className="Wishes__title">Anniversaries & Birthdays!</span>
      <div className="Wishes__horizontalLine"></div>
      <div className="Wishes__body">
        <img src={cake} alt="cake" width="80px" height="90px" />
        <ul>No Birthdays & Anniversaries..</ul>
      </div>
    </div>
  );
}

export default Wishes;
