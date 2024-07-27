import React, { useState } from "react";
import { Link } from "react-router-dom";
import portfolioData from "./PortfolioData_campaign.json";

const Portfolio_campaign = () => {
  const [data] = useState(portfolioData);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {data.map((item) => (
        <Link
          to={`/portfolio/campaign/${item.id}`}
          key={item.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden  
       hover:bg-[#71717a] " data-aos="flip-right"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{item.title}</h2>
            <p className="text-gray-700">{truncate(item.description, 90)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Portfolio_campaign;
