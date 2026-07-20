import React from "react";

export default function FeedbackRow() {
  const columns = [
    {
      className: "col type-badge",
      content: <span className="badge">general feedback</span>,
    },
    {
      className: "col from",
      content: (
        <>
          <strong>Example User</strong>
          <div className="email">example@gmail.com</div>
          <div className="phone">9876543210</div>
        </>
      ),
    },
    {
      className: "col subject",
      content: (
        <>
          <strong>example</strong>
          <p>Just a sample feedback message.</p>
          <div className="reply-box">
            <span className="reply-title">Your Reply:</span>
            thanks for your feedback
          </div>
        </>
      ),
    },
    {
      className: "col date",
      content: "Sep 11, 2025",
    },
    {
      className: "col status",
      content: <button className="status-btn">Resolved ⌄</button>,
    },
    {
      className: "col actions",
      content: (
        <>
          <button className="action-btn">↩</button>
          <button className="action-btn delete">🗑</button>
        </>
      ),
    },
  ];

  return (
    <div className="table-row">
      {columns.map((col, index) => (
        <div className={col.className} key={index}>
          {col.content}
        </div>
      ))}
    </div>
  );
}
