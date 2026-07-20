import React from "react";
import "./ReadySection.css";
import { useNavigate } from "react-router-dom";

export default function ReadySection() {
  const navigate = useNavigate();

  return (
    <section className="ready-section">
      <div className="container-inner">
        <h2>Ready to Find Your Ideal Course?</h2>
        <p>
          Join thousands of students who have found their perfect academic
          match.
        </p>

        <button className="ready-btn" onClick={() => navigate("/score")}>
          Get Started Now →
        </button>
      </div>
    </section>
  );
}
