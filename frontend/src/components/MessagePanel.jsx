// ============================================
// FILE: MessagePanel.jsx
// ============================================
import React, { useContext, useEffect, useState } from "react";
import {
  IoVideocamOutline,
  IoCallOutline,
  IoSearchOutline,
  IoEllipsisVertical,
  IoAddOutline,
  IoHappyOutline,
  IoSendOutline,
  IoCheckmarkDoneCircleOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { AppContext, useGlobal } from "../context/AppProvider";

const MessagePanel = () => {
  const [message, setMessage] = useState("");
  const { selected, generateColor } = useGlobal();
  const messages = [
    {
      id: 1,
      text: "Hey, I had a chance to review the Q3 design proposals. They look really strong overall.",
      time: "10:35 AM",
      isOutgoing: false,
    },
    {
      id: 2,
      text: "Are we still meeting at 2 PM to go over the final feedback?",
      time: "10:36 AM",
      isOutgoing: false,
    },
    {
      id: 3,
      text: "Yes, definitely. I've compiled the notes from the engineering team as well.",
      time: "10:40 AM",
      isOutgoing: true,
    },
    {
      id: 4,
      text: "The latest quarterly report looks solid. Let's review it during the call.",
      time: "10:42 AM",
      isOutgoing: true,
      hasAttachment: true,
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message
      setMessage("");
    }
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-[#dff1fc] relative">
      {/* Chat Header */}
      <div className="h-16 w-full bg-[#d3e5f1] border-b border-[#bdc9c5] flex justify-between items-center px-4 shrink-0 sticky top-0 z-10">
        <div className="flex items-center space-x-3 cursor-pointer">
          {selected?.avatar ? (
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={selected?.avatar}
              alt="John Doe"
            />
          ) : (
            <div
              style={{
                background: generateColor(),
              }}
              className="w-10 h-10 flex justify-center items-center bg-red-500 rounded-full object-cover"
            >
              {selected?.name[0]}
            </div>
          )}

          <div>
            <h2 className="text-base font-semibold text-[#0c1e26]">
              {selected?.name}
            </h2>
            <p className="text-xs font-medium text-[#3d4946]">Online</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3d4946] hover:bg-[#d9ebf6] transition-colors">
            <IoVideocamOutline className="text-xl" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3d4946] hover:bg-[#d9ebf6] transition-colors">
            <IoCallOutline className="text-xl" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3d4946] hover:bg-[#d9ebf6] transition-colors">
            <IoSearchOutline className="text-xl" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3d4946] hover:bg-[#d9ebf6] transition-colors">
            <IoEllipsisVertical className="text-xl" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 flex flex-col space-y-4 custom-scrollbar bg-[#EFEFEF] relative">
        <div className="flex justify-center my-4">
          <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-[#3d4946] shadow-sm">
            Today
          </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isOutgoing ? "self-end" : "self-start"} max-w-[75%]`}
          >
            <div
              className={`rounded-lg p-4 shadow-sm border relative ${
                msg.isOutgoing
                  ? "bg-[#008376]/20 rounded-tr-none border-[#00685d]/10"
                  : "bg-white rounded-tl-none border-[#bdc9c5]/20"
              }`}
            >
              {msg.hasAttachment && (
                <div className="bg-white p-2 rounded flex items-center space-x-3 mb-3 border border-[#bdc9c5]/30 cursor-pointer hover:bg-[#f4faff] transition-colors">
                  <div className="w-10 h-10 bg-[#ffdad6] text-[#93000a] rounded flex items-center justify-center shrink-0">
                    <IoDocumentTextOutline className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0c1e26] truncate">
                      Q3_Design_Notes_Final.pdf
                    </p>
                    <p className="text-xs font-medium text-[#3d4946]">1.2 MB</p>
                  </div>
                </div>
              )}
              <p className="text-sm text-[#0c1e26] mb-2">{msg.text}</p>
              <div className="flex justify-end items-center mt-1 space-x-1">
                <span className="text-[11px] text-[#3d4946] leading-none">
                  {msg.time}
                </span>
                {msg.isOutgoing && (
                  <IoCheckmarkDoneCircleOutline className="text-[14px] text-[#00685d]" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="h-20 bg-[#d3e5f1] w-full border-t border-[#bdc9c5] flex items-center px-6 shrink-0">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3d4946] hover:bg-[#d9ebf6] transition-colors mr-2">
          <IoAddOutline className="text-2xl" />
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3d4946] hover:bg-[#d9ebf6] transition-colors mr-3">
          <IoHappyOutline className="text-2xl" />
        </button>
        <div className="flex-1 relative">
          <input
            className="w-full bg-white border border-[#bdc9c5]/50 rounded-xl px-4 py-3 text-sm text-[#0c1e26] focus:outline-none focus:border-[#00685d] focus:ring-1 focus:ring-[#00685d] placeholder:text-[#3d4946]/60"
            placeholder="Type a message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
        </div>
        <button
          className="w-12 h-12 ml-4 rounded-full bg-[#00685d] hover:bg-[#008376] text-white flex items-center justify-center transition-colors shadow-sm"
          onClick={handleSend}
        >
          <IoSendOutline className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default MessagePanel;
