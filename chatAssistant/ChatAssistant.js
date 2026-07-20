import React, { useState } from "react";
import "./ChatAssistant.css";
import ChatBubble from "./ChatBubble";
import QuickQuestions from "./QuickQuestions";

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I'm your EduFinder AI assistant 🤖. Ask me anything about colleges, scores, or guidance!",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { type: "user", message: input };

    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMsg = {
        type: "bot",
        message: data.reply || "No response from server",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);

      setMessages((prev) => [
        ...prev,
        { type: "bot", message: "Server error. Try again later." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="ca-root">
      {/* HERO */}
      <div className="ca-hero">
        <span className="ca-badge">💬 AI-Powered Assistant</span>
        <h1 className="ca-title">Chat Assistant</h1>
        <p className="ca-sub">
          Ask me anything about EduFinder, colleges, or your score.
        </p>

        <QuickQuestions />
      </div>

      {/* CHAT BOX */}
      <div className="ca-chat-card">
        <div className="ca-messages">
          {messages.map((msg, i) => (
            <ChatBubble
              key={i}
              type={msg.type}
              message={msg.message}
              time={new Date().toLocaleTimeString()}
            />
          ))}
        </div>

        <div className="ca-input-box">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
          />
          <button className="send-btn" onClick={sendMessage}>
            ➤
          </button>
        </div>
      </div>

      {/* HELP */}
      <div className="ca-help-box">
        <h3>What can I help you with?</h3>

        <div className="ca-help-grid">
          <div className="help-card purple">
            <strong>Navigation</strong>
            <p>"show colleges", "contact info"</p>
          </div>

          <div className="help-card blue">
            <strong>Questions</strong>
            <p>College advice, education help</p>
          </div>

          <div className="help-card green">
            <strong>EduFinder</strong>
            <p>Features, guidance, matching</p>
          </div>

          <div className="help-card orange">
            <strong>Info</strong>
            <p>Admissions, trends</p>
          </div>
        </div>
      </div>
    </div>
  );
}
