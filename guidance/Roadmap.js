import React from "react";
import "./Roadmap.css";

function Roadmap({ data, profession, onBack }) {
  return (
    <div className="roadmap-container">
      <h2 className="roadmap-title">Roadmap to Becoming a {profession}</h2>

      <div className="change-profession" onClick={onBack}>
        ← Change Profession
      </div>

      <div className="timeline">
        {data.map((step, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-circle">{index + 1}</div>

            <div className="timeline-content">
              <div className="timeline-header">
                <img src={step.icon} alt="icon" className="timeline-icon" />
                <span className="step-label">{step.stepTitle}</span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              <ul>
                {step.points.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
