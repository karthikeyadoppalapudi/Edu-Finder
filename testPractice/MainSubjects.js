import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import "./MainSubjects.css";

const subjects = [
  {
    name: "Mathematics",
    desc: "Practice mathematics with leveled tests.",
    color: "blue",
    link: "/test-practice/Mathematics",
  },
  {
    name: "Physics",
    desc: "Practice physics with leveled tests.",
    color: "pink",
    link: "/test-practice/Physics",
  },
  {
    name: "Chemistry",
    desc: "Practice chemistry with leveled tests.",
    color: "green",
    link: "/test-practice/Chemistry",
  },
  {
    name: "Biology",
    desc: "Practice biology with leveled tests.",
    color: "orange",
    link: "/test-practice/Biology",
  },
];

const MainSubjects = () => {
  return (
    <div className="main-subjects root-bg">
      <div className="ms-header">
        <span className="ms-badge">🎯 Prepare for Success</span>

        <h1 className="ms-title">Practice Tests</h1>

        <p className="ms-desc">
          Sharpen your skills for intermediate college admission tests. Our
          practice questions are based on the Class 9 & 10 syllabus.
        </p>
      </div>

      <div className="ms-grid">
        {subjects.map((sub) => (
          <div key={sub.name} className="ms-card">
            <div className={`ms-icon ${sub.color}`}>
              <BookOpen size={26} />
            </div>

            <h2 className="ms-card-title">{sub.name}</h2>
            <p className="ms-card-desc">{sub.desc}</p>

            <Link to={sub.link} className="ms-link">
              Select Subject →
            </Link>

            <div className={`ms-decor ${sub.color}-decor`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSubjects;
