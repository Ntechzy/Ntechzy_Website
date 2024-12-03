import React from "react";
// import AboutHomeCard from '../Card/AboutHomeCard'
// import IconCard from '../Card/IconCard'
// import { MdLocalHospital } from 'react-icons/md'

const PatternImage = () => {
  return (
    <div className="md:flex md:flex-row flex flex-col md:p-14 w-[95%]  md:gap-7 gap-2  text-white  m-auto"  data-aos="fade-down">
      <div className="w-[45%] ">
        {/* <div className='main flex flex-col justify-center items-center m-auto w-[90%] md:my-8 my-5'> */}

        <div className="sub-main grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 w-full mt-10 ">
         
          <div className="md:w-[500px] w-[350px] ml-5 ">
            <img src="/assets/politicalpic2.png" alt="loading" className="md:w-[500px] md:h-[500px] w-[400px] h-[350px]"/>
          </div>
        </div>
      </div>

      <div className="md:w-[65%] p-3  md:p-6 py-7 flex flex-col justify-center">
        <div className="font-semibold md:text-4xl text-2xl py-6 ">
          POLITICAL CAMPAIGNS ARE THE DRIVING FORCE OF ANY PARTY
        </div>
        <h3 className="md:text-3xl text-xl font-bold mb-4 text-red-500">WHO WE ARE</h3>
        <h1 className="md:text-3xl text-2xl  mb-4">
          We The Team Ntechzy are Fully Equipped with the capability to drive
          people through your vision and Motive of this election
        </h1>
      </div>
    </div>
  );
};

export default PatternImage;
