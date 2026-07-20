import React from "react";

const questions = [
  "What is EduFinder?",
  "Show all colleges",
  "How does course matching work?",
  "Find courses for my score",
  "What are the benefits?",
  "Contact information",
];

export default function QuickQuestions() {
  return (
    <div className="quick-grid">
      {questions.map((q, i) => (
        <button key={i} className="quick-btn">
          ✨ {q}
        </button>
      ))}
    </div>
  );
}
