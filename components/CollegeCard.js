import React from "react";
import "./CollegeCard.css";

export default function CollegeCard({ college, onView }) {
  return (
    <div className="college-card">
      {/* IMAGE */}
      <div className="card-image-wrapper">
        <img src={college.image} alt={college.name} className="college-image" />
        <div className="rating-badge">{college.rating}★</div>
      </div>

      {/* CONTENT */}
      <div className="college-content">
        <h3 className="college-title">{college.name}</h3>

        <p className="college-location">📍 {college.location}</p>
        <p className="college-est">Established: {college.est}</p>

        {/* BUTTONS */}
        <div className="college-buttons">
          <button className="view-btn" onClick={onView}>
            View Courses →
          </button>

          <button
            className="loc-btn"
            onClick={() => window.open(college.locationLink, "_blank")}
          >
            Location
          </button>
        </div>
      </div>
    </div>
  );
}
