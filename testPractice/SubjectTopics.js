import React from "react";
import { useParams, Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import "./SubjectTopics.css";

const topicList = {
  Mathematics: ["Calculus", "Algebra"],
  Physics: ["Mechanics", "Optics"],
  Chemistry: ["Organic", "Inorganic"],
  Biology: ["Botany", "Zoology"],
};

const SubjectTopics = () => {
  const { subject } = useParams();
  const topics = topicList[subject] || [];

  return (
    <div className="subject-topics root-bg">
      <Link to="/test-practice" className="back-btn">
        ← Back to Subjects
      </Link>

      <div className="st-header">
        <div className="st-icon">
          <BookOpen size={26} />
        </div>

        <div>
          <h1 className="st-title">{subject} Practice</h1>
          <p className="st-sub">Choose a topic to practice.</p>
        </div>
      </div>

      <div className="st-grid">
        {topics.map((topic) => (
          <Link
            key={topic}
            to={`/test-practice/${subject}/${topic}`}
            className="st-card"
          >
            <div className="st-card-title">{topic}</div>
            <div className="st-cta">Select Topic →</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubjectTopics;
