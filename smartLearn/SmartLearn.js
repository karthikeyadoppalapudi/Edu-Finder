import React from "react";
import "./SmartLearn.css";
import { FaFlask, FaAtom, FaMicroscope, FaCalculator } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const subjects = [
  {
    title: "Mathematics",
    description: "Explore video lessons for core mathematics concepts.",
    route: "/SmartLearn/mathematics",
    icon: <FaCalculator />,
    iconClass: "blue",
    circleClass: "blue-circle",
  },
  {
    title: "Physics",
    description: "Explore video lessons for core physics concepts.",
    route: "/SmartLearn/physics",
    icon: <FaAtom />,
    iconClass: "pink",
    circleClass: "pink-circle",
  },
  {
    title: "Chemistry",
    description: "Explore video lessons for core chemistry concepts.",
    route: "/SmartLearn/chemistry",
    icon: <FaFlask />,
    iconClass: "green",
    circleClass: "green-circle",
  },
  {
    title: "Biology",
    description: "Explore video lessons for core biology concepts.",
    route: "/SmartLearn/biology",
    icon: <FaMicroscope />,
    iconClass: "orange",
    circleClass: "orange-circle",
  },
];

const SmartLearn = () => {
  const navigate = useNavigate();

  return (
    <div className="smartlearn-page">
      <div className="smartlearn-badge">🔍 Interactive Video Lessons</div>

      <h1 className="smartlearn-title">SmartLearn Hub</h1>
      <p className="smartlearn-subtitle">
        Master key concepts from your Class 9 & 10 syllabus with our curated{" "}
        <br />
        video lessons. Choose a subject to begin.
      </p>

      <div className="smartlearn-grid">
        {subjects.map((s, index) => (
          <div
            key={index}
            className="smart-card"
            onClick={() => navigate(s.route)}
          >
            <div className={`smart-icon ${s.iconClass}`}>{s.icon}</div>
            <h2>{s.title}</h2>
            <p>{s.description}</p>
            <span className="smart-link">View Lessons →</span>
            <div className={`smart-bg-circle ${s.circleClass}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartLearn;
