import React from "react";
import "./HowItWorks.css";
import { useNavigate } from "react-router-dom";

export default function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      side: "left",
      icon: "📘",
      color: "blue",
      title: "Enter Your Percentage",
      text: "Input your academic percentage to get started with personalized course recommendations.",
    },
    {
      id: 2,
      side: "right",
      icon: "🔍",
      color: "pink",
      title: "Browse Colleges",
      text: "Explore our curated list of top colleges and educational institutions.",
    },
    {
      id: 3,
      side: "left",
      icon: "🎓",
      color: "green",
      title: "Find Matching Courses",
      text: "Discover courses that align with your academic performance and career goals.",
    },
    {
      id: 4,
      side: "right",
      icon: "📊",
      color: "orange",
      title: "Make Informed Decisions",
      text: "Compare options, fees, and requirements to choose the best path forward.",
    },
  ];

  return (
    <div className="how-page">
      <div className="how-header-tag">Simple & Effective Process</div>

      <h1 className="how-main-title">How EduFinder Works</h1>

      <p className="how-main-desc">
        Our app is designed to help students find suitable courses based on
        their academic percentage. We match your performance with the right
        opportunities at top colleges.
      </p>

      <div className="timeline-container">
        {steps.map((step) => (
          <div key={step.id} className={`timeline-item ${step.side}`}>
            {step.side === "right" && (
              <div className="step-number">{step.id}</div>
            )}

            <div className="step-card">
              <div className={`step-icon ${step.color}`}>{step.icon}</div>
              <div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            </div>

            {step.side === "left" && (
              <div className="step-number">{step.id}</div>
            )}
          </div>
        ))}
      </div>

      <h2 className="ready-title">Ready to Get Started?</h2>
      <p className="ready-text">
        Join thousands of students who have found their perfect academic match.
      </p>
      <button className="ready-btn" onClick={() => navigate("/colleges")}>
        Explore Colleges Now →
      </button>
    </div>
  );
}
