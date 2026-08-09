// ============================================
// FILE: ChatBar.jsx
// ============================================
import React, { useContext, useState } from "react";
import {
  IoAddCircleOutline,
  IoFilterOutline,
  IoSearchOutline,
  IoCheckmarkDoneCircleOutline,
  IoPeopleOutline,
  IoChatbubbleOutline,
} from "react-icons/io5";
import { AppContext, useGlobal } from "../context/AppProvider";
import { useEffect } from "react";
import moment from "moment";
const ChatBar = () => {
  const {
    selected,
    setSelected,
    allUsers,
    user,
    generateColor,
    conversations,
    setConversations,
  } = useGlobal();
  const [searchedUser, setSearchedUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getMyUsers = () => {
    let newUsers = allUsers.filter((item, index) => {
      return item.name.toLowerCase().startsWith(search.toLowerCase());
    });
    setSearchedUsers(newUsers);
  };

  useEffect(() => {
    getMyUsers();
  }, [search]);

  // get my chats

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
          <IoSearchOutline className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-[#3d4946] text-xl" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 outline-0 focus:border-green-500 bg-[#e8f6ff] text-[#0c1e26] rounded-full border-none focus:ring-1 focus:ring-[#00685d] text-sm placeholder:text-[#3d4946]/60"
            placeholder="Search or start a new chat"
            type="text"
          />
        </div>
      </div>

      {/* search list */}

      {search?.length > 0 && (
        <ul className="p-3 unstyled flex flex-col gap-2 rounded-md shadow-xl bggray-200 shadow-zinc-600 w-[90%] mx-auto my-3">
          {searchedUser?.length > 0 ? (
            searchedUser?.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setSelected(item);
                    setSearch("");
                  }}
                  className="flex cursor-pointer hover:bg-gray-300 p-2 border  border-gray-300 border-t-0 border-e-0 border-s-0 rounded-md items-center gap-3"
                >
                  {user?.avatar ? (
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={user?.avatar}
                      alt="John Doe"
                    />
                  ) : (
                    <div
                      style={{
                        background: generateColor(),
                      }}
                      className="w-10 h-10 flex justify-center items-center bg-red-500 rounded-full object-cover"
                    >
                      {item?.name[0].toUpperCase()}
                    </div>
                  )}
                  <div className="">
                    <h4 className="text-sm font-bold ">{item.name}</h4>
                    <h4 className="text-sm text-gray-500 font-semibold">
                      @{item.username}
                    </h4>
                  </div>
                </div>
              );
            })
          ) : (
            <h4 className="font-semibold text-center text-gray-500 text-sm">
              No Record found
            </h4>
          )}
        </ul>
      )}

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {conversations.map((conv) => (
          <div
            onClick={() => setSelected(conv)}
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
                alt={conv.receiver_id.name}
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
                <h3 className="text-sm font-semibold text-[#0c1e26] truncate">
                  {conv.receiver_id.name}
                </h3>
                <span className="text-xs font-medium text-[#3d4946]">
                  {moment(
                    conv.messages[conv?.messages?.length - 1]?.time,
                  ).fromNow()}
                </span>
              </div>
              <div className="flex items-center text-sm text-[#3d4946] truncate">
                {conv.unread > 0 && (
                  <IoCheckmarkDoneCircleOutline className="text-[16px] mr-1 text-[#00685d]" />
                )}
                <span
                  className={`truncate ${conv.unread > 0 ? "font-medium text-[#0c1e26]" : ""}`}
                >
                  {conv.messages[conv?.messages?.length - 1]?.message}
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
