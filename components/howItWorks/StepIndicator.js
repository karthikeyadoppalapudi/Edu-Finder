import React from "react";
import "./StepIndicator.css";

const StepIndicator = ({ number }) => {
  return (
    <div className="step-indicator">
      <span>{number}</span>
    </div>
  );
};

export default StepIndicator;
