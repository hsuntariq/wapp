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
import axios from "axios";

const MessagePanel = () => {
  const [message, setMessage] = useState("");
  const { selected, generateColor } = useGlobal();
  const { user, getMyChats, selectedConv } = useGlobal();
  const handleSend = async () => {
    if (message.trim()) {
      const response = await axios.post(
        `http://localhost:5174/add-message/${user?._id}/${selected?._id}`,
        {
          message,
        },
      );
      getMyChats();
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
              {selected?.receiver_id?.name[0] || selected?.name[0]}
            </div>
          )}

          <div>
            <h2 className="text-base font-semibold text-[#0c1e26]">
              {selected?.receiver_id?.name || selected?.name}
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

        {/* messages */}

        {selectedConv?.map((item, index) => {
          return <p>{item.message}</p>;
        })}
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
