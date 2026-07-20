import React, { useState, useEffect, useRef } from "react";
import "./Colleges.css";

import CollegeCard from "../components/CollegeCard";
import FeaturedCollegesHeader from "./FeaturedCollegesHeader";

export default function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const detailsRef = useRef(null); // 🔥 for smooth scroll

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/colleges");

        if (!res.ok) throw new Error("Server error");

        const data = await res.json();

        if (!Array.isArray(data)) throw new Error("Invalid data");

        const formattedData = data.map((c) => ({
          id: c.id,
          name: c.name,
          location: c.location,
          rating: c.rating,
          est: c.est || "N/A",
          image: c.image || "/images/college-1.jpg",
          locationLink: c.locationLink || "#",
        }));

        setColleges(formattedData);
      } catch (err) {
        console.error(err);
        setError("Failed to load colleges");
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  // 🔥 scroll when selecting college
  useEffect(() => {
    if (selectedCollege && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCollege]);

  return (
    <div className="colleges-page">
      <FeaturedCollegesHeader />

      {/* LOADING */}
      {loading && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Loading colleges...
        </p>
      )}

      {/* ERROR */}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {/* COLLEGE CARDS */}
      {!loading && !error && !selectedCollege && (
        <div className="college-card-container">
          {colleges.map((c) => (
            <CollegeCard
              key={c.id}
              college={c}
              onView={() => setSelectedCollege(c)}
            />
          ))}
        </div>
      )}

      {/* 🔥 DETAILS SECTION */}
      {selectedCollege && (
        <div className="college-details" ref={detailsRef}>
          <button className="back-btn" onClick={() => setSelectedCollege(null)}>
            ← Back to All Colleges
          </button>

          {/* HEADER */}
          <div className="details-header">
            <h1>{selectedCollege.name}</h1>

            <div className="details-meta">
              <span>📍 {selectedCollege.location}</span>
              <span>⭐ {selectedCollege.rating}/5</span>
              <span>📅 Est. {selectedCollege.est}</span>
            </div>

            <p style={{ marginTop: "10px", opacity: 0.9 }}>
              A leading educational institution focused on academic excellence
              and student success.
            </p>
          </div>

          {/* TITLE */}
          <h2 className="course-title">Available Courses</h2>
          <p className="course-sub">
            Explore our comprehensive academic programs
          </p>

          {/* COURSES */}
          <div className="course-grid">
            {/* MEC */}
            <div className="course-card">
              <div className="course-top mec">MEC</div>

              <div className="course-body">
                <p>Mathematics, Economics, Commerce</p>

                <div className="info-row">
                  <span>⏱ 2 Years</span>
                  <span>🎓 Intermediate</span>
                </div>

                <div className="fee-box">₹40,000/year</div>

                <div className="tag-list">
                  <span className="tag">Mathematics</span>
                  <span className="tag">Economics</span>
                  <span className="tag">Commerce</span>
                </div>

                <div className="eligibility">10th Pass • Minimum 55%</div>
              </div>
            </div>

            {/* MPC */}
            <div className="course-card">
              <div className="course-top mpc">MPC</div>

              <div className="course-body">
                <p>Mains, Advance, EAPCET</p>

                <div className="info-row">
                  <span>⏱ 2 Years</span>
                  <span>🎓 Intermediate</span>
                </div>

                <div className="fee-box">₹1,70,000</div>

                <div className="tag-list">
                  <span className="tag">Maths</span>
                  <span className="tag">Physics</span>
                  <span className="tag">Chemistry</span>
                </div>

                <div className="eligibility">10th Pass • Minimum 65%</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
