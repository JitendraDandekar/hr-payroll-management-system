import React, { useEffect, useState } from "react";
import "./Calender.css";
import moment from "moment";

function Calender() {
  const currentDate = moment().date();
  const currentMonth = moment().month() + 1;
  const currentYear = moment().year();
  const listOfDays = ["S", "M", "T", "W", "T", "F", "S"];
  const listOfMonths = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const listOfYears = [];

  let yr = currentYear + 1;
  while (yr >= 1950) {
    listOfYears.push(yr);
    yr--;
  }

  const [input, setInput] = useState({
    month: currentMonth,
    year: currentYear,
  });
  const [date, setDate] = useState(input.month + "/" + input.year);

  useEffect(() => {
    setDate(input.month + "/" + input.year);
  }, [input]);

  let startDay = moment(date, "MM/YYYY").startOf("month").format("d");
  let blanks = [];
  for (let i = 0; i < startDay; i++) {
    blanks.push("");
  }

  let lastDate = moment(date, "MM/YYYY").endOf("month").format("D");
  let daysOfMonth = [];
  for (let i = 1; i <= lastDate; i++) {
    daysOfMonth.push(i);
  }

  let totalSlots = [...blanks, ...daysOfMonth];
  let cells = [];
  let rows = [];
  let count = 6;

  totalSlots.forEach((day, i) => {
    if (cells.length <= 6) {
      cells.push(
        <td
          key={i}
          className={
            cells.length == 6 || i == 0
              ? "holiday "
              : "" + currentDate == day &&
                currentYear == input.year &&
                currentMonth == input.month
              ? "currentDate"
              : ""
          }
        >
          {day}
        </td>
      );
    } else {
      rows.push(<tr key={i}>{cells}</tr>);
      cells = [];
      cells.push(
        <td key={i} className={currentDate == day ? "currentDate" : "holiday"}>
          {day}
        </td>
      );
    }
    if (i == totalSlots.length - 1) {
      rows.push(<tr key={i}>{cells}</tr>);
    }
  });

  return (
    <div className="Home__calender shadow hover">
      <div className="Home__calender__monthYear">
        <select
          className="Home__calender__month"
          value={input.month}
          onChange={(e) => setInput({ ...input, month: e.target.value })}
        >
          {Object.keys(listOfMonths).map((key, i) => (
            <option value={i + 1} key={i}>
              {listOfMonths[key]}
            </option>
          ))}
        </select>
        <select
          className="Home__calender__Year"
          value={input.year}
          onChange={(e) => setInput({ ...input, year: e.target.value })}
        >
          {Object.keys(listOfYears).map((key, i) => (
            <option key={i} value={listOfYears[key]}>
              {listOfYears[key]}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr className="Home__calender__days">
            {Object.keys(listOfDays).map((key, i) => (
              <th key={i} className={listOfDays[key] == "S" ? "holiday" : ""}>
                {listOfDays[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="Home__calender__dates">{rows}</tbody>
      </table>
    </div>
  );
}

export default Calender;

// totalSlots.forEach((day, i) => {
//   if (cells.length <= 6) {
//     if (i == count) {
//       cells.push(
//         <td className="holiday" key={i}>
//           {day}
//         </td>
//       );
//       count = count + 7;
//     } else {
//       if (
//         day == currentDate &&
//         currentMonth == input.month &&
//         currentYear == input.year
//       ) {
//         cells.push(
//           <td className="currentDate" key={i}>
//             {day}
//           </td>
//         );
//       } else {
//         if (i == 0) {
//           cells.push(
//             <td className="holiday" key={i}>
//               {day}
//             </td>
//           );
//         } else {
//           cells.push(<td key={i}>{day}</td>);
//         }
//       }
//     }
//   } else {
//     rows.push(<tr key={i}>{cells}</tr>);
//     cells = [];
//     cells.push(
//       <td className="holiday" key={i}>
//         {day}
//       </td>
//     );
//   }
//   if (totalSlots.length - 1 == i) {
//     rows.push(<tr key={i}>{cells}</tr>);
//   }
// });
