import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const PoliticalSection5 = () => {
  return (
    <div className="w-[95%] m-auto text-white  " data-aos="fade-up">
      <div className=" relative ">
        <div className=" md:h-screen w-96 md:bg-red-500  "></div>
        <div className=" md:absolute md:top-32 md:left-[400px] left-64   border-[18px] ">
          <img src="/assets/election6.png" alt="" className="md:w-full h-96" />
        </div>
        <div className=" md:absolute md:top-72  md:left-[800px] md:text-6xl text-6xl font-bold absolute top-48 left-44">
          <Link to="https://www.facebook.com/DrJitendrasinghyadav/videos/259338342972205/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C" target="_blank"><FaPlayCircle /></Link>
        </div>
        <div className=" md:absolute md:top-[600px] md:left-96 md:text-2xl text-xl md:font-semibold pt-6  md:w-[59%] ml-7">
        We will create a <span className="text-red-500"> very positive</span> image of yours on social media and on the ground also. 
        Through Interesting insight about you, your past works, about your family wellbeings.
        </div>
      </div>
    </div>
  );
};

export default PoliticalSection5;
