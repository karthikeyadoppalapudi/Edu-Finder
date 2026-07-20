import React from "react";
import "./FeedbackTable.css";
import FeedbackRow from "./FeedbackRow";

const feedbackHeaders = [
  "Type",
  "From",
  "Subject & Message",
  "Date",
  "Status",
  "Actions",
];

export default function FeedbackTable() {
  return (
    <div className="feedback-table">
      <div className="table-header">
        {feedbackHeaders.map((h, i) => (
          <div key={i} className="header-col">
            {h}
          </div>
        ))}
      </div>

      {/* Example rows */}
      <FeedbackRow />
      <FeedbackRow />
      <FeedbackRow />
    </div>
  );
}
