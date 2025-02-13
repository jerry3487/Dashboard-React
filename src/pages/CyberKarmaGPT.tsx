import { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaRegStickyNote, FaUserCircle } from "react-icons/fa";

const CyberKarmaGPT = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! How can I assist you with your cybersecurity needs today?",
    },
    {
      id: 2,
      sender: "user",
      text: "Hi there, can you help me understand our current cybersecurity posture?",
    },
    {
      id: 3,
      sender: "bot",
      text: "Of course! I have a comprehensive overview of your cybersecurity framework. Would you like a summary or details on a specific area?",
    },
    {
      id: 4,
      sender: "user",
      text: "Start with a summary, please.",
    },
    {
      id: 5,
      sender: "bot",
      text: "Sure! Based on the latest assessments:\n\n• Threat Protection: 85% secure. Your systems have good protection against known threats.\n• Access Control: 70% secure. There are some areas of improvement in user access control.\n• Data Protection: 90% secure. Data encryption and backup procedures are well in place.\n• Incident Response: 75% secure. There are gaps in your incident response plan. Would you like detailed feedback on any specific area?",
    },
  ]);

  return (
    <div className="bg-[#0A0F1D] min-h-screen flex flex-col items-center px-6 py-6 text-white">

      {/*  Chat Container */}
      <div className="w-full max-w-5xl bg-[#121826] p-6 rounded-lg shadow-lg border border-[#6a5acd] space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "bot" && (
              <FaUserCircle className="text-xl text-gray-400 mr-2 self-start" />
            )}

            <div
              className={`relative max-w-[70%] p-3 rounded-lg shadow-lg ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-200"
                }`}
            >
              <p className="whitespace-pre-line text-sm">{msg.text}</p>
              {/* Icons - Like, Dislike, Notes */}
              <div className="absolute -bottom-5 right-0 flex space-x-2 text-gray-400 text-sm">
                <FaThumbsUp className="cursor-pointer hover:text-green-400 text-base" />
                <FaThumbsDown className="cursor-pointer hover:text-red-400 text-base" />
                <FaRegStickyNote className="cursor-pointer hover:text-yellow-400 text-base" />
              </div>
            </div>

            {msg.sender === "user" && (
              <FaUserCircle className="text-xl text-gray-400 ml-2 self-start" />
            )}
          </div>
        ))}
      </div>

      {/*  Chat Input */}
      <div className="w-full max-w-5xl flex items-center bg-[#121826] rounded-md p-4 mt-4 border border-[#6a5acd]">
        <input
          type="text"
          placeholder="Type Something..."
          className="w-full bg-transparent text-white px-3 py-2 text-sm focus:outline-none"
        />
        <button className="bg-green-500 px-5 py-2 rounded-md ml-3 text-sm">Send</button>
      </div>
    </div>
  );
};

export default CyberKarmaGPT;
