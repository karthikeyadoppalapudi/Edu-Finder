import React from "react";

export default function MessageBubble({ user, text, time, side }) {
  return (
    <div className={`msg-row ${side}`}>
      {side === "left" && <div className="avatar">{user[0]}</div>}

      <div className="msg-bubble">
        <strong>{user}</strong>
        <p>{text}</p>
        <span>{time}</span>
      </div>

      {side === "right" && <div className="avatar right">K</div>}
    </div>
  );
}
