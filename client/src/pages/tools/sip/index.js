import React, { useState } from "react";
import "./sip.css"; // Import the CSS file
import Navbar from '../../../header-footer/Header'

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [annualRate, setAnnualRate] = useState(12);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [futureValue, setFutureValue] = useState(0);

  const calculateSIP = () => {
    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = investmentPeriod * 12;

    const futureValue =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate);

    setFutureValue(futureValue.toFixed(2));
  };

  return (
    <div className="sip-calculator">
      <Navbar/>
      <h1>SIP Calculator</h1>
      <div>
        <label>
          Monthly Investment (₹):
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Annual Rate of Return (%):
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Investment Period (Years):
          <input
            type="number"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculateSIP}>Calculate</button>
      {futureValue > 0 && (
        <div className="result">
          <h2>Future Value: ₹{futureValue}</h2>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;