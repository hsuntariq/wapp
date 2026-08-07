// ============================================
// FILE: IconBar.jsx
// ============================================
import React from 'react';
import { 
  IoChatbubblesOutline, 
  IoPeopleOutline, 
  IoPeopleCircleOutline,
  IoSettingsOutline,
  IoArchiveOutline
} from 'react-icons/io5';

const IconBar = () => {
  return (
    <nav className="fixed h-full w-20 flex flex-col items-center py-4 bg-white dark:bg-[#22333b] border-r border-[#bdc9c5] z-20">
      {/* Header Avatar */}
      <div className="mb-8 cursor-pointer">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO0XGZMDHVFQRYTSjbWUE3BJt39JmJYXCy2_oB6KLHsCeQbf9srCzhdVmFkOwioB6Iz7DwUkvjRIb07xLBP0xMblAsc6I1iPzBhIsOzw_PbQ6v7wMjVN1baKV6AcqzxrVbhyZ7sq6At0_NJ3gQevdJUd0Nyl7n2Dx0M3-uqw7RMXyvaCbklaNfdc_4PT2WB7MM-IPTaJZflfwT8WnC0cOq6f-ueo6UWKSdaWfDoK9QEJ2_3w-SG2ZpKg"
          alt="Avatar"
        />
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