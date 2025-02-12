import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css"; // Make sure you have chatbot styling

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/chatbot", {
        message: input,
      });

      setMessages([
        ...newMessages,
        { text: response.data.response, sender: "bot" },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { text: "Error getting response. Try again later.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">AI Beauty Chatbot</div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
