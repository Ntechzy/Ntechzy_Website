import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServicesNav from "./ServicesNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 flex flex-wrap items-center justify-between p-4 bg-transparent text-white backdrop-blur-lg font-bold z-[10000]"> 
      {/* Logo */}
      <div className="logo text-2xl font-bold">
        <Link to="/" onClick={closeMenu} className="relative">
          <img
            src="assets/ntechzy_logo_white_text.png"
            alt="Ntechzy"
            className="transition-transform  duration-300 hover:scale-110 hover:shadow-lg"

            style={{ marginLeft:"30px", width: '80px', height: '30px',borderRadius:"15px"}}
          />
        </Link>
        
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden ml-auto">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Items */}
      <div
        className={`lg:flex ${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:w-auto lg:flex-grow lg:items-center lg:justify-center mt-4 lg:mt-0`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 text-center lg:justify-end space-y-4 lg:space-y-0 text-xl">
          <li>
            <Link to="/" className="hover:text-gray-400" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          {/* <li><Link to="/services" className="hover:text-gray-400" onClick={closeMenu}>Services</Link></li> */}
          <li className="relative">
            <ServicesNav closeMenu={closeMenu} />
          </li>
          <li>
            <Link
              to="/portfolio"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact-Us"
              className="hover:text-gray-400"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="lg:hidden">
            <button
              onClick={closeMenu}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Let's Start
            </button>
          </li>
        </ul>
      </div>

      {/* Action Button for Large Screens */}
      <div className="hidden lg:flex items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Let's Start
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
