import React from 'react';
import { useParams } from 'react-router-dom';
import portfolioData from './PortfolioData_campaign.json';

const PortfolioDetail = () => {
  const { id } = useParams();
  const item = portfolioData.find(p => p.id === parseInt(id));

  if (!item) {
    return <div className="text-white font-bold text-center text-[30px] md:text-[100px]">Portfolio item not found</div>;
  }

  return (
    <div className="p-4 flex flex-col mt-[-90px] md:flex-row items-center min-h-screen bg-gray-900 text-white gap-5">
      <div className="w-full md:w-1/2 lg:w-[400px] p-4">
        <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg shadow-lg" data-aos="flip-right" />
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-col items-start" data-aos="flip-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{item.title}</h1>
        <p className="text-gray-300 mb-6">{item.description}</p>
        {/* Add more details here if needed */}
        <div className="flex flex-wrap gap-4">
          {/* Additional content can be added here */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
