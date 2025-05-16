import React, { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { HiPhone, HiVideoCamera, HiDotsVertical } from "react-icons/hi";

const ChatBox = ({ userName = "Jenny Wilson" }) => {
  const [messages, setMessages] = useState([
    { from: "them", text: "Hi" },
    { from: "me", text: "Hello!" },
    { from: "them", text: "How are you doing today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "me", text: input }]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-xl w-full rounded-2xl shadow-xl border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-blue-100 border-b rounded-t-2xl">
        <h2 className="text-xl font-semibold text-blue-900">{userName}</h2>
        <div className="flex space-x-4 text-blue-800 text-2xl">
          <HiPhone className="cursor-pointer hover:text-blue-600" />
          <HiVideoCamera className="cursor-pointer hover:text-blue-600" />
          <HiDotsVertical className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end ${
              msg.from === "me" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.from === "them" && (
              <img
                src="/user-avatar.jpg"
                alt="User"
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm shadow ${
                msg.from === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
            {msg.from === "me" && (
              <img
                src="/my-avatar.jpg"
                alt="Me"
                className="w-8 h-8 rounded-full ml-2"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 border-t px-4 py-3 bg-white rounded-b-2xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
