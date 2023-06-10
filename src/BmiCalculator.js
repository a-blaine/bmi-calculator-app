import React, { useState, useMemo } from "react";

export default function BmiCalculator({ defaultHeight, defaultWeight }) {
  const [height, setHeight] = useState(defaultHeight);
  const [weight, setWeight] = useState(defaultWeight);

  const updateHeight = (event) => {
    let newHeight = event.target.value;
    setHeight(newHeight);
  };

  const updateWeight = (event) => {
    let newWeight = event.target.value;
    setWeight(newWeight);
  };

  const calculateResult = useMemo(() => {
    let calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [height, weight]);

  return (
    <div className="BmiCalculator">
      <h1>BMI Calculator</h1>
      <div className="container">
        <p>Weight: {weight} kg </p>
        <input type="range" min={36} max={230} onChange={updateWeight} />
        <p>Height: {height} cm</p>
        <input type="range" min={155} max={220} onChange={updateHeight} />
        <div>
          <p>Your BMI is: </p>
          <p className="bmi-result">{calculateResult}</p>
        </div>
      </div>
    </div>
  );
}
