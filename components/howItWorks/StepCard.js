import React from "react";
import "./StepCard.css";

const StepCard = ({ icon, title, text, right }) => {
  return (
    <div className={`step-card ${right ? "right" : ""}`}>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default StepCard;
