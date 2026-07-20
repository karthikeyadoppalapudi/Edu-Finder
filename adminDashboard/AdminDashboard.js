import React from "react";
import "./AdminDashboard.css";
import FeedbackTable from "./FeedbackTable";

export default function AdminDashboard() {
  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Dashboard</h1>
      <p className="admin-subtitle">User Feedback and Reports</p>

      <div className="admin-card">
        <div className="card-header">
          <span className="card-icon">📥</span>
          <h2>Feedback Inbox</h2>
        </div>

        <p className="card-desc">
          Showing all feedback entries, sorted by most recent.
        </p>

        <FeedbackTable />
      </div>
    </div>
  );
}
