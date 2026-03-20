import React, { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const reply = "AI Insight: Stay consistent with your habits!";
    setMessages([...messages, { user: input }, { bot: reply }]);
    setInput("");
  };

  return (
    <div>
      <h3>AI Chat</h3>
      <div style={{ height: 200, overflow: "auto" }}>
        {messages.map((m, i) => (
          <p key={i}>{m.user || m.bot}</p>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}