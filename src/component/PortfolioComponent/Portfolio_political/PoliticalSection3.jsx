import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const PoliticalSection3 = () => {
  return (
    <div className="w-[95%] m-auto text-white  " data-aos="fade-up">
      <div className=" relative ">
        <div className=" md:h-screen w-96 md:bg-red-500  "></div>
        <div className=" md:absolute md:top-32 md:left-[400px] left-64   border-[18px] ">
          <img src="/assets/pgroup.png" alt="" className="md:w-full h-96" />
        </div>
        <div className=" md:absolute md:top-72  md:left-[800px] md:text-6xl text-6xl font-bold absolute top-48 left-44">
          <Link to="https://www.facebook.com/DrJitendrasinghyadav/videos/1729909500733925/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&ref=sharing" target="_blank"><FaPlayCircle /></Link>
        </div>
        <div className=" md:absolute md:top-[600px] md:left-96 md:text-2xl text-xl md:font-semibold pt-6  md:w-[59%] ml-7">
          We will be broadcasting your motives, also urging people to come forth
          and participate in a party’s /personal vision and to create awareness
          regarding a party’s promises and strength.
        </div>
      </div>
    </div>
  );
};

export default PoliticalSection3;
