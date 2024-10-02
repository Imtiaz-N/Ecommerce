import React, { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const handleLogin = () => {
    // Simulate user login
    setIsLoggedIn(true);
    setProfileImage("https://via.placeholder.com/150"); // Replace with actual user image URL
  };

  return (
    <nav className="bg-stone-300 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand Name */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <Link to="/" className="text-xl font-bold text-gray-800 font-sans">
              YourChoice
            </Link>
          </div>

          {/* Navigation Links in Center */}
          <div className="hidden md:flex space-x-4 mx-auto">
            <Link
              to="/"
              className="text-black font-serif hover:text-gray-900 hover:underline transform hover:scale-105 transition duration-300 "
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-black font-serif hover:text-gray-900 hover:underline  transform hover:scale-105 transition duration-300"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="text-black font-serif hover:text-gray-900 hover:underline transform hover:scale-105 transition duration-300 "
            >
              Categories
            </Link>
            <Link
              to="/contact"
              className="text-black font-serif hover:text-gray-900 hover:underline transform hover:scale-105 transition duration-300 "
            >
              Contact
            </Link>
          </div>

          {/* Sign Up, Sign In, and Profile Icons */}
          <div className="flex items-center space-x-1">
            {/* Cart Icon (only visible when logged in) */}
            {isLoggedIn && (
              <a href="#" className="relative">
                <FaShoppingCart className="text-black text-xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  3
                </span>
              </a>
            )}

            {/* Sign Up and Sign In Buttons */}
            {!isLoggedIn && (
              <>
                <Link
                  to="/signup"
                  className="border border-gray-300 px-2 py-1 rounded text-black hover:bg-gray-700 hover:text-white transform hover:scale-105 transition duration-300 font-serif"
                >
                  Sign Up
                </Link>
                <Link
                  to="/signin"
                  className="border border-gray-300 px-2 py-1 rounded text-black font-serif hover:bg-gray-700 hover:text-white transform hover:scale-105 transition duration-300 "
                >
                  Sign In
                </Link>
              </>
            )}

            {/* Profile Icon (when logged in) */}
            {isLoggedIn && (
              <a href="#">
                <img
                  className="h-8 w-8 rounded-full"
                  src={profileImage}
                  alt="Profile"
                />
              </a>
            )}

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Categories
            </Link>
            <Link
              to="/contact"
              className="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            {!isLoggedIn && (
              <>
                <Link
                  to="/signup"
                  className="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
                >
                  Sign Up
                </Link>
                <Link
                  to="/signin"
                  className="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
