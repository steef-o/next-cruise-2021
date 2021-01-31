import React from "react";
import { getTodaysDate } from "../logic/helpers";
import ArrowThickLeft from "../assets/icons/ArrowThickLeft";
import ArrowThickRight from "../assets/icons/ArrowThickRight";

const DateSelector = () => {
  return (
    <div className="text-white text-center flex justify-center mx-auto justify-between mt-5 ">
      <button className="p-4">
        <ArrowThickLeft />
      </button>
      <h2 className="text-4xl sm:text-5xl font-bold pt-1">
        {getTodaysDate({ month: "short", day: "2-digit" })}
      </h2>
      <button className="p-4">
        <ArrowThickRight />
      </button>
    </div>
  );
};

export default DateSelector;
