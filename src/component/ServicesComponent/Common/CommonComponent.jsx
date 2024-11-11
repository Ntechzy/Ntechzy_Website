import React from 'react';
import ExpertAns from '../../HomeComponent/ExpertAns';


const CommonComponent = ({data2}) => {
  return (
    <>
    <div className="md:p-6 flex  justify-center text-white" data-aos="fade-up">
      {
        data2.map((item, index) => (
            <div key={index} className=" shadow-lg rounded-lg p-8">
        <h1 className="text-2xl md:text-3xl w-72 font-bold text-white mb-4 md:w-[60%] m-auto text-center">
            {item.heading}
        </h1>
        <p className="text-white leading-relaxed text-lg w-[90%] m-auto mt-9">
         {item.content}
        </p>
      </div>
        ))
      }
    </div>
    </>
  );
};

export default CommonComponent;
