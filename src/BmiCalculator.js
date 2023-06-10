import React from "react";

export default function BmiCalculator() {
  return (
    <div className="BmiCalculator">
      <h1>BMI Calculator</h1>
      <div className="container">
        <p>Weight: kg </p>
        <input type="range" />
        <p>Height: cm</p>
        <input type="range" />
        <div>
          <p>Your BMI is: </p>
          <p className="bmi-result">20.5</p>
        </div>
      </div>
    </div>
  );
}
