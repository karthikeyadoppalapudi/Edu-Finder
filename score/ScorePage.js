import React, { useState } from "react";
import "./ScorePage.css";

const ScorePage = () => {
  const [percentage, setPercentage] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 FETCH ELIGIBLE COLLEGES
  const findColleges = async () => {
    if (!percentage) {
      alert("Please enter your percentage");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/api/colleges?percentage=${percentage}`,
      );

      const data = await res.json();

      console.log("API Response:", data);

      if (Array.isArray(data)) {
        setColleges(data);
      } else {
        console.error("Expected array but got:", data);
        setColleges([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setColleges([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="score-container">
      {/* HEADER */}
      <div className="score-header">
        <button className="matching-btn">
          ⚡ Personalized College Matching
        </button>
        <h1>Your Score, Your College</h1>
        <p>
          Enter your percentage to find eligible colleges based on criteria.
        </p>
      </div>

      {/* STEP 1 */}
      <div className="score-card step1">
        <div className="step-header">
          <span className="step-icon">👤</span>
          <h2>Your Information</h2>
        </div>

        <div className="form-grid">
          <input type="text" placeholder="Student Name" />
          <input type="text" placeholder="Parent Name" />
          <input type="text" placeholder="Contact Number" />
          <input type="email" placeholder="Email Address" />
        </div>
      </div>

      {/* STEP 2 */}
      <div className="score-card step3">
        <div className="step-header">
          <span className="step-icon">🎓</span>
          <h2>Enter Your Percentage</h2>
        </div>

        <div className="percentage-row">
          <input
            type="number"
            placeholder="Enter your percentage"
            className="percentage-input"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />

          <button className="find-btn" onClick={findColleges}>
            🔍 Find My Colleges
          </button>
        </div>
      </div>

      {/* RESULTS */}
      <div className="results-section">
        <h2>Eligible Colleges</h2>

        {/* 🔄 Loading */}
        {loading && <p>Loading colleges...</p>}

        {/* ❌ No data */}
        {!loading && colleges.length === 0 && <p>No colleges found</p>}

        {/* ✅ Cards */}
        {!loading &&
          colleges.map((c) => (
            <div className="college-card" key={c.college_id}>
              {/* LEFT */}
              <div className="college-left">
                <h3>{c.name}</h3>
                <p>📍 {c.location}</p>
                <p>⭐ Rating: {c.rating}</p>
                <p>🎯 Eligibility: {c.eligibility_criteria}%</p>
              </div>

              {/* RIGHT */}
              <div className="college-right">
                <button className="view-btn">View Details</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ScorePage;
