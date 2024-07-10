import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='sticky top-0 flex items-center justify-between p-4 bg-transparent text-white backdrop-blur-lg font-bold'>
      <div className='logo text-xl font-bold'>
        <Link to="/home">my logo</Link>
      </div>
      <div className='nav-item'>
        <ul className='flex space-x-6 gap-7'>
          <li><Link to="/home" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/pages" className="hover:text-gray-400">Pages</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
        </ul>
      </div>
      <div className='text-xl font-bold'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Let's Start
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
