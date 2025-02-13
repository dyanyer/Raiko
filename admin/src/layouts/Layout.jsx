import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiMenu } from "react-icons/fi"; // Menu icon for mobile toggle

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 min-h-screen transition-all">
        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden p-4 bg-gray-800 text-white fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          <FiMenu size={24} />
        </button>

        <main className="p-4 md:ml-64 transition-all">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
