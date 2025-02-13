import React from "react";
import Mainlogo from "./MainLogo";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom"; // Import Link for navigation

const TopBar = () => {
  return (
    <div className="w-full">
      <div className="flex mx-auto justify-evenly items-center space-x-3  sm:p-6 border-b border-white">
        {/* Logo and Site Name */}
        <Link to="/">
          <div className="flex items-center space-x-2 border-r border-white mr-4 pr-4 hover:cursor-pointer ">
            {" "}
            {/* Link to homepage */}
            <Mainlogo className="w-8 h-8 sm:w-10 sm:h-10" />{" "}
            {/* Link to homepage */}
            <div className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
              Raiko
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-white lg:space-x-8 text-base sm:text-lg lg:text-xl mr-40">
          <Link
            to="/marketplace"
            className="cursor-pointer text-white hover:text-gray-400 transition"
          >
            {" "}
            {/* Link to Marketplace */}
            <div className="cursor-pointer hover:text-gray-400 transition">
              Marketplace
            </div>
          </Link>

          <div className="cursor-pointer hover:text-gray-400 transition">
            Games
          </div>
          <div className="cursor-pointer hover:text-gray-400 transition">
            Create
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-80 md:w-96 lg:w-1/3 mt-4 sm:mt-0 mr-20 ">
          <div className="flex items-center space-x-2 border p-2 rounded-2xl w-full h-10 sm:h-12 border-white bg-transparent">
            <FaSearch className="text-lg sm:text-2xl text-white ml-2" />
            <input
              className="p-2 text-white bg-transparent w-full text-sm sm:text-base lg:text-xl outline-none"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Profile & Cart Section */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-xl sm:text-2xl mt-4 sm:mt-0 text-white">
          <div className="cursor-pointer hover:text-gray-400 transition">
            Login
          </div>
          <CgProfile className="cursor-pointer hover:text-gray-400 transition" />
          <BsCart3 className="cursor-pointer hover:text-gray-400 transition" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
