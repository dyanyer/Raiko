import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi"; // Close icon for mobile
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiSettings,
  FiShoppingCart,
  FiLogOut, // Added Logout icon
} from "react-icons/fi"; // Icons
import Mainlogo from "./Mainlogo";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation(); // Get current route for active highlighting

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome size={20} /> },
    { name: "Users", path: "/users", icon: <FiUsers size={20} /> },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <FiFileText size={20} />,
    },
    { name: "Reports", path: "/reports", icon: <FiFileText size={20} /> },
    { name: "Settings", path: "/settings", icon: <FiSettings size={20} /> },
  ];

  const handleLogout = () => {
    // Logic to log the user out (e.g., clear session, redirect to login page)
    localStorage.removeItem("authToken"); // Clear authentication token
    window.location.href = "/"; // Redirect to login page
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 transition-transform z-40 shadow-lg ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`} // The sidebar now slides in from the left on mobile
    >
      <div className="flex items-center justify-center mb-5 border-b border-white">
        <div className="flex items-center justify-between p-6">
          {/* Container for Text and Logo */}
          <div className="relative flex items-center right-6">
            <h2
              className="font-bold text-white mr-4" // Margin right to create space between text and logo
              style={{ fontSize: "50px" }}
            >
              RAIK
            </h2>
            <Mainlogo className="w-16 h-16 absolute top-0 left-30" />
          </div>

          {/* Mobile close button */}
          <button className="md:hidden" onClick={toggleSidebar}>
            <FiX size={24} className="hover:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 py-3 px-6 rounded-lg transition-all ${
                  location.pathname === item.path
                    ? "bg-gray-700 text-amber-400"
                    : "hover:bg-gray-700 text-gray-300"
                }`}
                onClick={toggleSidebar}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 py-3 px-6 w-full text-gray-300 hover:bg-gray-700 rounded-lg transition-all"
        >
          <FiLogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
