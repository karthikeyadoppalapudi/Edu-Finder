import React from "react";
import "./WhyChoose.css";

export default function WhyChoose() {
  const items = [
    {
      title: "Smart Course Matching",
      desc: "Find courses that match your academic percentage",
      color: "pink",
    },
    {
      title: "Top Colleges",
      desc: "Access to premium educational institutions",
      color: "blue",
    },
    {
      title: "Career Guidance",
      desc: "Make informed decisions about your future",
      color: "green",
    },
    {
      title: "Quality Assured",
      desc: "Only verified colleges and courses",
      color: "orange",
    },
  ];
  return (
    <section className="why-section">
      <div className="container-inner">
        <span className="why-badge">Why Choose EduFinder?</span>
        <h2 className="why-title">Why Choose EduFinder?</h2>
        <p className="why-sub">
          We provide the tools and resources to make your college search
          seamless and successful.
        </p>

        <div className="why-grid">
          {items.map((it, i) => (
            <div className="why-card" key={i}>
              <div className={`why-top ${it.color}`} />
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
