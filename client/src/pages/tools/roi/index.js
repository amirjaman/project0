import React, { useState } from "react";
import "./roi.css"; // Import the CSS file
import Navbar from "../../../header-footer/Header";

const ROICalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [finalValue, setFinalValue] = useState(15000);
  const [roi, setROI] = useState(0);

  const calculateROI = () => {
    const roiValue =
      ((finalValue - initialInvestment) / initialInvestment) * 100;
    setROI(roiValue.toFixed(2));
  };

  return (
    <div className="roi-calculator">
      <Navbar />
      <h1>ROI Calculator</h1>
      <div className="roi-calculator__form">
        <label>
          Initial Investment (₹):
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Final Value (₹):
          <input
            type="number"
            value={finalValue}
            onChange={(e) => setFinalValue(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculateROI}>Calculate ROI</button>
      {roi !== 0 && (
        <div className="result">
          <h2>ROI: {roi}%</h2>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;
