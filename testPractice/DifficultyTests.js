import React from "react";
import { useParams, Link } from "react-router-dom";
import "./DifficultyTests.css";

const DifficultyTests = () => {
  const { subject, topic, level } = useParams();
  const tests = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="difficulty-tests root-bg">
      <Link to={`/TestPractice/${subject}/${topic}`} className="back-btn">
        ← Back to Difficulties
      </Link>

      <h1 className="dt-title">
        {subject} - {topic} - <span className="dt-level">{level} Level</span>
      </h1>
      <p className="dt-sub">Select a test to begin your practice session.</p>

      <div className="dt-grid">
        {tests.map((num) => (
          <Link
            key={num}
            to={`/TestPractice/${subject}/${topic}/${level}/test/${num}`}
            className="dt-test"
          >
            <div className="dt-test-label">Test</div>
            <div className="dt-test-num">{num}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DifficultyTests;
