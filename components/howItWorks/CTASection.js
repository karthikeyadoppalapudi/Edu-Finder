import React from "react";
import "./CTASection.css";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="cta-section">
      <h2>Ready to Get Started?</h2>
      <p>
        Join thousands of students who have found their perfect academic match.
      </p>

      <Link to="/colleges" className="cta-btn">
        Explore Colleges Now →
      </Link>
    </div>
  );
};

export default CTASection;
