// ============================================
// FILE: ChatBar.jsx
// ============================================
import React,{useState} from "react";
import {
  IoAddCircleOutline,
  IoFilterOutline,
  IoSearchOutline,
  IoCheckmarkDoneCircleOutline,
  IoPeopleOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";

const ChatBar = () => {
    const [selected,setSelected] = useState(null)


  const conversations = [
    {
      id: 1,
      name: "John Doe",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCmmW4Iwp5-HA7nxpog9diHhTVIxs2omuWj7iMmaPXjjgDfzmUFkQXfISBTLxcUKygmALj_4RoRRtxuQhJnW2pT-aPZ87w3Uj-VnhPcIJRNPSVXh-1GHFgGJIUgUsKscox7x2ztX4ksVYS-GtCtD4-aZ9ZyjKe8VWyy9GaXV1JcpZgGauY6-_X7QXFZSyPFsEt2AjxI1Q5zNoFphLZFdJehIyj8XRzivqwODdyTMFC15gDKS6GQyFXLnw",
      lastMessage:
        "The latest quarterly report looks solid. Let's review it...",
      timestamp: "10:42 AM",
      unread: 0,
      isActive: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCgw7vf4nT8ap6NThYB_btvQwSJBaeK910BHQQDCTyAdd1Fz5M9a7Fv3E7Km4BPIzjS5EMCVlN3PDDbisF-i8oak8Kt4m1VyjhCg61DyCx-X-YZde3mrFOlgk8qj3z98Mog4dKi351fnB9M555GN5fMp6ySNoQhWCzuVXcIQYVxTnjICRajeETxaBLtVssO95EMTZ7Cp7OER2h0aT6ASa9krscttbr1YSHE0r7o2sZYsa_kg_02tgSohA",
      lastMessage: "Can you send over those wireframes?",
      timestamp: "Yesterday",
      unread: 2,
      isActive: false,
    },
    {
      id: 3,
      name: "Team Alpha",
      avatar: null,
      lastMessage: "Mike: We should align on the Q3 roadmap next week.",
      timestamp: "Monday",
      unread: 0,
      isActive: false,
      isGroup: true,
    },
    {
      id: 4,
      name: "Announcements",
      avatar: null,
      lastMessage: "Server maintenance scheduled for this weekend.",
      timestamp: "Aug 12",
      unread: 0,
      isActive: false,
      isGroup: true,
    },
  ];

  return (
    <div className="w-[350px] h-full bg-white border-r border-[#bdc9c5] flex flex-col z-10 shrink-0">
      {/* Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-[#bdc9c5] shrink-0">
        <h1 className="text-xl font-semibold text-[#0c1e26]">Chats</h1>
        <div className="flex space-x-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3d4946] hover:bg-[#e8f6ff] transition-colors">
            <IoAddCircleOutline className="text-2xl" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#3d4946] hover:bg-[#e8f6ff] transition-colors">
            <IoFilterOutline className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 shrink-0">
        <div className="relative w-full">
          <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3d4946] text-xl" />
          <input
            className="w-full h-10 pl-10 pr-4 bg-[#e8f6ff] text-[#0c1e26] rounded-full border-none focus:ring-1 focus:ring-[#00685d] text-sm placeholder:text-[#3d4946]/60"
            placeholder="Search or start a new chat"
            type="text"
          />
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {conversations.map((conv) => (
          <div
            onClick={()=>setSelected(conv)}
            key={conv.id}
            className={`h-[72px] px-4 flex items-center space-x-3 cursor-pointer hover:bg-[#f4faff] transition-colors ${
              conv.isActive
                ? "bg-[#d9ebf6] relative"
                : "border-b border-[#bdc9c5]/30"
            }`}
          >
            {conv.isActive && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00685d]"></div>
            )}

            {/* Avatar */}
            {conv.avatar ? (
              <img
                className="w-12 h-12 rounded-full object-cover shrink-0"
                src={conv.avatar}
                alt={conv.name}
              />
            ) : conv.isGroup ? (
              <div className="w-12 h-12 rounded-full bg-[#a5ede0] flex items-center justify-center shrink-0 text-[#226e63]">
                <IoPeopleOutline className="text-2xl" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-[#b05e43] flex items-center justify-center shrink-0 text-white">
                <IoChatbubbleOutline className="text-2xl" />
              </div>
            )}

            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-semibold text-[#0c1e26] truncate">
                  {conv.name}
                </h3>
                <span className="text-xs font-medium text-[#3d4946]">
                  {conv.timestamp}
                </span>
              </div>
              <div className="flex items-center text-sm text-[#3d4946] truncate">
                {conv.unread > 0 && (
                  <IoCheckmarkDoneCircleOutline className="text-[16px] mr-1 text-[#00685d]" />
                )}
                <span
                  className={`truncate ${conv.unread > 0 ? "font-medium text-[#0c1e26]" : ""}`}
                >
                  {conv.lastMessage}
                </span>
                {conv.unread > 0 && (
                  <span className="bg-[#00685d] text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center shrink-0 ml-2">
                    {conv.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBar;
