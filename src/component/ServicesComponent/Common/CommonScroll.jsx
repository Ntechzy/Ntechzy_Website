import React from "react";

const CommonScroll = () => {
  // Sample logos for demonstration
  const logos = [
    "/assets/logo1.jpg",
    "/assets/logo2.png",
    "/assets/logo3.png",
    "/assets/logo4.jpeg",
    "/assets/logo5.jpg",
    "/assets/logo6.jpeg",
    "/assets/logo7.jpg",
    "/assets/logo8.jpg",
    // "/assets/logo9.png",
    "/assets/logo10.jpg",
    "/assets/logo11.jpg",
    // "/assets/logo12.png",
  ];

  return (
   <div className="flex flex-col items-center text-white">
    <div className="text-3xl font-bold text-center m-4">
Our Clients
    </div>
    <div className="relative overflow-hidden w-full h-40 bg-white">
     
     <div className="absolute flex items-center justify-start animate-scroll-infinite gap-10">
       {logos.concat(logos).map((logo, index) => (
         <div key={index} className="w-[150px] h-[100px] bg-transparent">
           <img
             src={logo}
             alt={`logo-${index}`}
             className="w-full h-full object-contain text-3xl mt-9 rounded-lg shadow-xl transform transition-all"
           />
         </div>
       ))}
     </div>
   </div>
   </div>
  );
};

export default CommonScroll;
