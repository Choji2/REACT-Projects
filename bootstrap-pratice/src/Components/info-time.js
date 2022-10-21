import React from "react";
import { useEffect, useState } from "react";
const Time = () => {
  const [dateState, setDate] = React.useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const f_Date =
    month[dateState.getUTCMonth()] +
    " " +
    dateState.getUTCDay() +
    ", " +
    dateState.getUTCFullYear() +
    " " +
    dateState.getHours() +
    ":" +
    dateState.getMinutes() +
    ":" +
    dateState.getSeconds();

  return f_Date;
};

export default Time;
