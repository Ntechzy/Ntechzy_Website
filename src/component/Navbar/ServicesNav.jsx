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

  const handleMainHeadingClick = (index) => {
    if (activeMainHeading === index) {
      setActiveMainHeading(null);
    } else {
      setActiveMainHeading(index);
    }
  };

  return (
    <nav className="relative" ref={menuRef}>
      <ul className="flex space-x-4">
        <li className="relative group">
          <span
            className="text-white hover:text-gray-400 m-auto flex items-center justify-center text-center cursor-pointer transition-transform duration-300 md:sticky absolute  right-[-346px] mt-[-13px] p-[-4px] md:p-3"
            onClick={toggleMainMenu}
          >
          
            Services
          </span>
          {isMainMenuOpen && (
            <ul className="absolute mt-2 bg-white font-semibold text-gray-800 shadow-lg rounded-md space-y-2 z-10 w-max">
              {serviceData.map((service, index) => (
                <li
                  key={index}
                  className="relative group"
                >
                  {/* Main heading click event for small screens */}
                  <span
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleMainHeadingClick(index)} // Handle click for both small and larger screens
                  >
                    {service.mainHeading}
                  </span>

                  {/* Subheadings for small screens */}
                  {activeMainHeading === index && (
                    <ul className="space-y-2 border-2 border-blue-100 bg-gray-300 text-gray-800 rounded-md md:hidden">
                      {service.subHeadings.map((sub, subIndex) => (
                        <li key={subIndex} className="px-4 py-2 hover:bg-gray-200">
                          <Link to={sub.url} onClick={closeMenu}>
                            {sub.subHeading}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subheadings for larger screens (on hover) */}
                  {activeMainHeading === index && (
                    <ul className="hidden md:absolute top-0 left-full ml-2 bg-gray-100 text-gray-800 shadow-lg rounded-md space-y-2 w-max md:block">
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
