import React from "react";
import "./Benefits.css";
import { useNavigate } from "react-router-dom";

const benefitsData = [
  {
    color: "var(--pink)",
    icon: "🏫",
    title: "Find Colleges Everywhere",
    desc: "Easily discover the best colleges in major cities and smaller towns, expanding your options beyond the usual choices.",
  },
  {
    color: "var(--green)",
    icon: "🧭",
    title: "Effortless Course Selection",
    desc: "Our smart system matches your academic percentage to suitable courses, making it simple to find the right path.",
  },
  {
    color: "var(--orange)",
    icon: "📄",
    title: "Complete Course Details",
    desc: "Get all the information you need, including curriculum, duration, fees, and admission requirements, all in one place.",
  },
  {
    color: "var(--blue)",
    icon: "📞",
    title: "Direct College Contact",
    desc: "We provide direct contact information for colleges so you can get your questions answered quickly.",
  },
  {
    color: "var(--purple)",
    icon: "👤",
    title: "Personalized For You",
    desc: "The entire experience is tailored to your academic performance, ensuring you only see relevant opportunities.",
  },
  {
    color: "var(--hotpink)",
    icon: "⏱️",
    title: "Save Time & Reduce Stress",
    desc: "Our platform streamlines your search, making the college selection process faster and much easier.",
  },
];

const Benefits = () => {
  const navigate = useNavigate(); // ⬅️ added

  return (
    <div className="benefits-container">
      <div className="benefits-header">
        <span className="badge">🎉 Your Advantage</span>
        <h1>Benefits of Using EduFinder</h1>
        <p>
          Discover how our platform makes finding the right college and course
          simple, fast, and personalized for you.
        </p>
      </div>

      <div className="benefits-grid">
        {benefitsData.map((item, index) => (
          <div key={index} className="benefit-card">
            <div className="top-bar" style={{ background: item.color }}></div>
            <div className="icon-circle" style={{ background: item.color }}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="benefits-cta">
        <h2>Ready to Find Your Future?</h2>
        <p>
          Take the next step. Start exploring colleges and courses that match
          your potential.
        </p>
        <button
          className="start-btn"
          onClick={() => navigate("/colleges")} // ⬅️ ONLY this line added
        >
          Start Exploring Now →
        </button>
      </div>
    </div>
  );
};

export default Benefits;
