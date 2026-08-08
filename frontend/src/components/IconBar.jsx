// ============================================
// FILE: IconBar.jsx
// ============================================
import React, { useContext } from "react";
import {
  IoChatbubblesOutline,
  IoPeopleOutline,
  IoPeopleCircleOutline,
  IoSettingsOutline,
  IoArchiveOutline,
} from "react-icons/io5";
import { AppContext, useGlobal } from "../context/AppProvider";

const IconBar = () => {
  const { user, generateColor } = useGlobal();

  return (
    <nav className="fixed h-full w-20 flex flex-col items-center py-4 bg-white dark:bg-[#22333b] border-r border-[#bdc9c5] z-20">
      {/* Header Avatar */}
      <div className="mb-8 cursor-pointer">
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
            {user?.name[0]}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex-1 w-full flex flex-col items-center space-y-4">
        <button
          className="w-12 h-12 rounded-xl flex items-center justify-center text-[#00685d] font-bold bg-[#a5ede0]/20 border-l-4 border-[#00685d] relative cursor-pointer active:opacity-80 transition-colors duration-200"
          title="Chats"
        >
          <IoChatbubblesOutline className="text-2xl" />
        </button>
        <button
          className="w-12 h-12 rounded-xl flex items-center justify-center text-[#3d4946] hover:bg-[#e8f6ff] hover:text-[#00685d] transition-colors duration-200 cursor-pointer active:opacity-80"
          title="Status"
        >
          <IoPeopleOutline className="text-2xl" />
        </button>
        <button
          className="w-12 h-12 rounded-xl flex items-center justify-center text-[#3d4946] hover:bg-[#e8f6ff] hover:text-[#00685d] transition-colors duration-200 cursor-pointer active:opacity-80"
          title="Communities"
        >
          <IoPeopleCircleOutline className="text-2xl" />
        </button>
      </div>

      {/* Footer Tabs */}
      <div className="w-full flex flex-col items-center space-y-4 mt-auto">
        <button
          className="w-12 h-12 rounded-xl flex items-center justify-center text-[#3d4946] hover:bg-[#e8f6ff] hover:text-[#00685d] transition-colors duration-200 cursor-pointer active:opacity-80"
          title="Settings"
        >
          <IoSettingsOutline className="text-2xl" />
        </button>
        <button
          className="w-12 h-12 rounded-xl flex items-center justify-center text-[#3d4946] hover:bg-[#e8f6ff] hover:text-[#00685d] transition-colors duration-200 cursor-pointer active:opacity-80"
          title="Archive"
        >
          <IoArchiveOutline className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default IconBar;
