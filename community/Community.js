import React from "react";
import "./Community.css";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

const messages = [
  {
    user: "karthikeya",
    text: "hiii",
    time: "Dec 6, 05:43",
    side: "left",
  },
  {
    user: "BVK",
    text: "Hi everyone, how are you guys doing?!!",
    time: "Sep 2, 16:53",
    side: "left",
  },
  {
    user: "You",
    text: "hello",
    time: "Sep 4, 05:07",
    side: "right",
  },
  {
    user: "You",
    text: "hello guys",
    time: "Sep 2, 16:52",
    side: "right",
  },
];

export default function Community() {
  return (
    <div className="community-root">
      <h1 className="community-title">Join the Conversation</h1>
      <p className="community-sub">
        Connect with other students, share insights, and ask questions in our
        live community chat.
      </p>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}

        <ChatInput />
      </div>
    </div>
  );
}
