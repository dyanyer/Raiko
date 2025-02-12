import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Mainlogo from "./Mainlogo";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar toggle

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:flex md:flex-col bg-gray-800 md:w-64 space-y-6 px-4 pt-5 pb-12 sm:px-6 lg:px-8 overflow-y-auto transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:absolute md:left-0 md:top-0 md:h-full`}
      >
        <div className="flex items-center justify-between">
          <div>
            <Mainlogo />
          </div>
          <div className="md:hidden absolute top-6 left-6">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <nav className="space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-sm font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        {/* Top bar, content, etc. */}
        <div className="flex justify-between items-center bg-white p-6">
          {/* Your top bar and other content */}
        </div>
        <div className="p-6"> {/* Main content here */} </div>
      </div>
    </div>
  );
};

export default Sidebar;
