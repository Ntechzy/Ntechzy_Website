import React from 'react';
import { Link } from 'react-router-dom';

const PortNav = () => {
  return (
    <nav className="top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md">
      <ul className="flex justify-center gap-10 font-bold" data-aos="flip-left">
        <li>
          <Link to="/portfolio/campaign" className="cursor-pointer hover:underline p-2">Campaign</Link>
        </li>
        <li>
          <Link to="/portfolio/office" className="cursor-pointer hover:underline p-2">Office</Link>
        </li>
        <li>
          <Link to="/portfolio/services" className="cursor-pointer hover:underline p-2">Services</Link>
        </li>
        {/* <li>
          <Link to="/portfoliolist" className=" cursor-pointer hover:underline p-2">Portfolio List</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default PortNav;
