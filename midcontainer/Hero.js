import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="container-inner hero-inner">
        <div className="hero-badge">🎓 Your Academic Journey Starts Here</div>

        <h1 className="hero-title">
          Find Your Perfect <span className="accent">College</span>
        </h1>

        <p className="hero-desc">
          Discover courses tailored to your academic performance. Our smart
          matching system connects you with the right opportunities at top
          colleges.
        </p>

        {/* Navigation Button */}
        <button
          className="hero-cta"
          onClick={() => navigate("/score")} // 👈 This makes Next Page work!
        >
          Explore Colleges →
        </button>
      </div>
    </section>
  );
}
