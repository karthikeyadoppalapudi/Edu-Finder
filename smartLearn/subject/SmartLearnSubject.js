import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SmartLearnSubject.css";
import { FaCalculator } from "react-icons/fa";

const SmartLearnSubject = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  // 📌 Mathematics Lessons Data (same as screenshot)
  const lessons = [
    {
      tag: "Calculus",
      title: "Calculus - Limits and Continuity Complete",
      desc: "Master limits, continuity, and applications in calculus. 45-minute lecture.",
      img: "https://i.ibb.co/SJZyCX6/calculus.jpg",
    },
    {
      tag: "Differentiation",
      title: "Differentiation - Complete Chapter",
      desc: "Learn derivatives, chain rule, product rule and examples. 35+ mins.",
      img: "https://i.ibb.co/jvZnjgC/diff.jpg",
    },
    {
      tag: "Integration",
      title: "Integration - Full Concept Lecture",
      desc: "Integration techniques including substitution and parts. 40 minutes.",
      img: "https://i.ibb.co/0c0t3n1/integration.jpg",
    },
    {
      tag: "Trigonometry",
      title: "Trigonometry - All Formulas & Concepts",
      desc: "Identities, equations & applications. 50+ minutes lecture.",
      img: "https://i.ibb.co/C6hV0Sm/trigo.jpg",
    },
    {
      tag: "Matrices",
      title: "Matrices & Determinants - Full Chapter",
      desc: "Complete matrices, determinants & applications. 45 minutes.",
      img: "https://i.ibb.co/2qZvZFB/matrices.jpg",
    },
    {
      tag: "Probability",
      title: "Probability - Complete Concepts",
      desc: "Bayes theorem, conditional probability & more. 40+ mins.",
      img: "https://i.ibb.co/3z3Ry3v/prob.jpg",
    },
  ];

  return (
    <div className="subject-page">
      {/* Back Button */}
      <div className="back-btn" onClick={() => navigate("/SmartLearn")}>
        ← Back to Subjects
      </div>

      {/* Title */}
      <div className="subject-title">
        <div className="subject-icon">
          <FaCalculator />
        </div>
        <h1>Mathematics Lessons</h1>
      </div>

      {/* Search */}
      <div className="subject-search">
        <input
          type="text"
          placeholder="Search for topics, concepts, or keywords..."
        />
      </div>

      {/* Lessons Grid */}
      <div className="lesson-grid">
        {lessons.map((l, i) => (
          <div className="lesson-card" key={i}>
            <img className="lesson-thumbnail" src={l.img} alt={l.title} />

            <div className="lesson-content">
              <div className="lesson-tag">{l.tag}</div>
              <div className="lesson-title">{l.title}</div>
              <div className="lesson-desc">{l.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartLearnSubject;
