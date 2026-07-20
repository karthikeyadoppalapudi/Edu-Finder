import React from "react";
import { useParams, Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import "./TopicDifficulties.css";

const levels = [
  { name: "Easy", desc: "Tests with an easy difficulty." },
  { name: "Medium", desc: "Tests with a medium difficulty." },
  { name: "Hard", desc: "Tests with a hard difficulty." },
];

const TopicDifficulties = () => {
  const { subject, topic } = useParams();

  return (
    <div className="topic-difficulties root-bg">
      <Link to={`/test-practice/${subject}`} className="back-btn">
        ← Back to Topics
      </Link>

      <h1 className="td-title">
        {subject} - <span className="td-topic">{topic}</span>
      </h1>
      <p className="td-sub">Choose a difficulty level.</p>

      <div className="td-grid">
        {levels.map((lvl) => (
          <Link
            key={lvl.name}
            to={`/test-practice/${subject}/${topic}/${lvl.name}`}
            className="td-card"
          >
            <div className="td-icon">
              <BarChart3 size={24} />
            </div>
            <div className="td-name">{lvl.name}</div>
            <div className="td-desc">{lvl.desc}</div>
            <div className="td-cta">View Tests →</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicDifficulties;
