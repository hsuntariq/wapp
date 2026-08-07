// ============================================
// FILE: Home.jsx
// ============================================
import React from "react";
import IconBar from "../components/IconBar";
import ChatBar from "../components/ChatBar";
import MessagePanel from "../components/MessagePanel";

const Home = () => {
  return (
    <div className="bg-[#f4faff] text-[#0c1e26] h-screen overflow-hidden flex font-sans">
      {/* IconBar */}
      <IconBar />

      {/* Main Content */}
      <div className="ml-20 flex-1 flex h-full w-[calc(100%-5rem)]">
        {/* ChatBar - hidden on mobile, shown on md+ */}
        <div className="hidden md:block">
          <ChatBar />
        </div>

        {/* MessagePanel */}
        <MessagePanel />
      </div>
    </div>
  );
};

export default Home;
