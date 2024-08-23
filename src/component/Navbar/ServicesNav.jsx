import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import serviceData from './servicesData'; // Adjust the import path according to your folder structure

const ServicesNav = ({ closeMenu }) => {
  const [isMainMenuOpen, setMainMenuOpen] = useState(false);
  const [activeMainHeading, setActiveMainHeading] = useState(null);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMainMenuOpen(false);
        setActiveMainHeading(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMainMenu = () => {
    setMainMenuOpen((prev) => !prev);
    setActiveMainHeading(null); 
  };

  const handleMouseEnter = (index) => {
    setActiveMainHeading(index);
  };

  const handleMouseLeave = () => {
    setActiveMainHeading(null);
  };

  return (
    <nav className="relative" ref={menuRef}>
      <ul className="flex space-x-4">
        <li className="relative group">
          <span
            className="text-white hover:text-gray-400 cursor-pointer transition-transform duration-300"
            onClick={toggleMainMenu}
          >
            Services
          </span>
          {isMainMenuOpen && (
            <ul
              className="absolute mt-2 bg-white font-semibold text-gray-800 shadow-lg rounded-md space-y-2 z-10 w-max"
              onMouseLeave={handleMouseLeave} // Hide subheadings on mouse leave
            >
              {serviceData.map((service, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <span
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {service.mainHeading}
                  </span>
                  {activeMainHeading === index && service.subHeadings.length > 0 && (
                    <ul className="absolute top-0 left-full ml-2 bg-gray-100 text-gray-800 shadow-lg rounded-md space-y-2 w-max">
                      {service.subHeadings.map((sub, subIndex) => (
                        <li key={subIndex} className="px-4 py-2 hover:bg-gray-200">
                          <Link to={sub.url} onClick={closeMenu}>
                            {sub.subHeading}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default ServicesNav;
