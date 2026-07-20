import React from "react";

export default function ChatBubble({ type, message, time }) {
  return (
    <div className={`bubble ${type}`}>
      <div className="bubble-msg">{message}</div>
      <div className="bubble-time">{time}</div>
    </div>
  );
}
