import React, { useState } from "react";
import "./SeniorInsights.css";

export default function SeniorInsights() {
  const [search, setSearch] = useState("");

  // ---------- FEATURE CARDS ----------
  const features = [
    {
      icon: "💡",
      title: "Course Tips",
      text: "Get advice on choosing the right course for your goals",
      color: "blue",
    },
    {
      icon: "❤️",
      title: "Real Experiences",
      text: "Read authentic stories from alumni students",
      color: "pink",
    },
    {
      icon: "🎓",
      title: "Journey Roadmap",
      text: "See the complete journey of successful students",
      color: "orange",
    },
  ];

  // ---------- COLLEGE CARDS ----------
  const colleges = [
    { name: "IIT Delhi", seniors: 1, color: "purple" },
    { name: "AIIMS Delhi", seniors: 1, color: "green" },
    { name: "NIT Warangal", seniors: 1, color: "red" },
    { name: "SRCC Delhi", seniors: 1, color: "pink" },
    { name: "NIFT Mumbai", seniors: 1, color: "blue" },
    { name: "BITS Pilani", seniors: 1, color: "orange" },
  ];

  // ---------- Filter Logic ----------
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  // ---------- Click Handler ----------
  const handleCardClick = (collegeName) => {
    alert("You clicked: " + collegeName);
  };

  return (
    <div className="insights-page">
      <div className="insights-tag">💡 Learn from Experience</div>

      <h1 className="insights-title">Senior Insights</h1>

      <p className="insights-subtitle">
        Select a college to connect with seniors and learn from their
        experiences, journey, and get valuable tips.
      </p>

      {/* FEATURE CARDS */}
      <div className="insights-features">
        {features.map((feature, index) => (
          <div key={index} className={`feature-card ${feature.color}`}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>

      {/* SEARCH BAR */}
      <div className="insights-search">
        <input
          type="text"
          placeholder="🔍  Search for a college..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="insights-grid-title">
        Select a College to View Senior Profiles
      </h2>

      {/* COLLEGE GRID */}
      <div className="college-grid">
        {filteredColleges.map((college, index) => (
          <div
            key={index}
            className={`college-card ${college.color}`}
            onClick={() => handleCardClick(college.name)}
          >
            <div className="college-badge">{college.seniors} Senior</div>
            <h3>{college.name}</h3>
            <p>View alumni profiles</p>
          </div>
        ))}
      </div>
    </div>
  );
}
