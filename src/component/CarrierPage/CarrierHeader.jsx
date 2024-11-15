// src/components/Header.js
import React from 'react';

const CarrierHeader = () => {
  return (
    <header className="bg-white text-black p-6 ">
      <div className="container mx-auto flex justify-center items-center">
      
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/carrier/jobs" className="hover:underline">Job Openings</a></li>
            <li><a href="/carrier/lifeAtNtechzy" className="hover:underline">Life at Ntechzy</a></li>
            <li><a href="/carrier/benefits" className="hover:underline">Benefits</a></li>
            {/* <li><a href="/carrier/application" className="hover:underline">Application Process</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default CarrierHeader;
