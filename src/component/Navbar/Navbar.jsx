import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex flex-wrap items-center justify-between p-4 bg-transparent text-white backdrop-blur-lg font-bold'>
      {/* Logo */}
      <div className='logo text-xl font-bold'>
        <Link to="/home">my logo</Link>
      </div>

      {/* Navigation Items */}
      <div className='nav-item flex items-center justify-center flex-grow mt-4 lg:mt-0'>
        <ul className='flex flex-wrap justify-center lg:justify-end space-x-6 lg:space-x-7 gap-4'>
          <li><Link to="/home" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/pages" className="hover:text-gray-400">Pages</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
        </ul>
      </div>

      {/* Action Button */}
      <div className='flex items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Let's Start
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
