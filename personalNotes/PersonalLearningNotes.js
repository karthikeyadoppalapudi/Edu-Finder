import React from "react";
import "./PersonalLearningNotes.css";

export default function PersonalLearningNotes() {
  return (
    <div className="notes-page">
      {/* TOP BADGE */}
      <div className="notes-badge">📘 Personal Learning Journal</div>

      {/* HEADER */}
      <h1 className="notes-title">My Learning Notes</h1>
      <p className="notes-subtitle">
        Track your learning journey, document your progress, and organize your
        study goals in one place.
      </p>

      {/* Add New Note Button */}
      <div className="center-row">
        <button className="add-note-btn">+ Add New Note</button>
      </div>

      {/* FILTER BAR */}
      <div className="filter-box">
        <div className="filter-item">
          <label>🔍 Search</label>
          <input placeholder="Search notes..." />
        </div>

        <div className="filter-item">
          <label>Category</label>
          <select>
            <option>All Categories</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Subject</label>
          <select>
            <option>All Subjects</option>
          </select>
        </div>

        <div className="filter-item small">
          <label>Filter</label>
          <div className="row">
            <input type="checkbox" />
            <span>Important only</span>
          </div>
        </div>

        <div className="results-count">0 notes found</div>
      </div>

      {/* EMPTY STATE BOX */}
      <div className="empty-box">
        <div className="empty-icon">📖</div>
        <h2>No Notes Found</h2>
        <p>Start your learning journal by adding your first note!</p>

        <button className="add-note-btn">+ Add Your First Note</button>
      </div>
    </div>
  );
}
