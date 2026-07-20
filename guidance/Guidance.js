import React, { useState, useRef, useEffect } from "react";
import "./Guidance.css";
import Roadmap from "./Roadmap";
import roadmapData from "./Roadmaps/roadmapData"; // 🔥 IMPORTANT

const careers = [
  {
    id: "software",
    name: "Software Engineer",
    icon: "💻",
    color: ["#2193ff", "#00d2ff"],
  },
  { id: "doctor", name: "Doctor", icon: "❤️", color: ["#ff5f6d", "#ffc371"] },
  {
    id: "ca",
    name: "Chartered Accountant",
    icon: "📊",
    color: ["#0fd850", "#00c6ff"],
  },
  {
    id: "civil",
    name: "Civil Engineer",
    icon: "🛠️",
    color: ["#ff4b1f", "#ff9068"],
  },
  {
    id: "teacher",
    name: "Teacher / Professor",
    icon: "🎓",
    color: ["#833ab4", "#fd1d1d"],
  },
  { id: "lawyer", name: "Lawyer", icon: "⚖️", color: ["#7f00ff", "#e100ff"] },
  {
    id: "architect",
    name: "Architect",
    icon: "📐",
    color: ["#00b09b", "#96c93d"],
  },
  {
    id: "data",
    name: "Data Scientist",
    icon: "📈",
    color: ["#00c6ff", "#0072ff"],
  },
  {
    id: "psychologist",
    name: "Psychologist",
    icon: "🧠",
    color: ["#ff0084", "#ff8c00"],
  },
  { id: "pilot", name: "Pilot", icon: "✈️", color: ["#0072ff", "#00c6ff"] },
  { id: "chef", name: "Chef", icon: "👨‍🍳", color: ["#ff8c00", "#ff4b1f"] },
  {
    id: "journalist",
    name: "Journalist",
    icon: "📰",
    color: ["#ff0084", "#ff8c00"],
  },
  {
    id: "pharmacist",
    name: "Pharmacist",
    icon: "💊",
    color: ["#00c6ff", "#8f94fb"],
  },
  {
    id: "police",
    name: "Police Officer",
    icon: "🛡️",
    color: ["#6a11cb", "#2575fc"],
  },
];

function Guidance() {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const roadmapRef = useRef(null);

  // ✅ AUTO SCROLL
  useEffect(() => {
    if (selectedCareer && roadmapRef.current) {
      roadmapRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedCareer]);

  // ✅ SINGLE DYNAMIC ROADMAP (NO SWITCH NEEDED)
  const renderRoadmap = () => {
    if (!selectedCareer) return null;

    return (
      <Roadmap
        data={roadmapData[selectedCareer]}
        profession={careers.find((c) => c.id === selectedCareer)?.name}
        onBack={() => setSelectedCareer(null)}
      />
    );
  };

  return (
    <div className="guidance-page">
      <section className="guidance-section">
        <div className="tag">Your Path to Success</div>
        <h1 className="heading">The Power of Education</h1>

        <div className="quote-box">
          <p>
            "Education is more than just acquiring knowledge; it’s about
            lighting a fire within you..."
          </p>
        </div>
      </section>

      <h2 className="career-title">Choose Your Career Path</h2>
      <p className="career-subtitle">
        Select a profession to see a detailed roadmap.
      </p>

      <div className="career-grid">
        {careers.map((c) => (
          <div
            key={c.id}
            className="career-card"
            onClick={() => setSelectedCareer(c.id)}
          >
            <div
              className="career-icon"
              style={{
                background: `linear-gradient(135deg, ${c.color[0]}, ${c.color[1]})`,
              }}
            >
              {c.icon}
            </div>
            <div className="career-name">{c.name}</div>
          </div>
        ))}
      </div>

      {/* ✅ ROADMAP SECTION */}
      {selectedCareer && <div ref={roadmapRef}>{renderRoadmap()}</div>}
    </div>
  );
}

export default Guidance;
