import React from 'react';

const data = [
  {
    link: "/assets/farrukhabad.png",
    title: "DOCUMENTARIES",
  },
  {
    link: "/assets/election3.png",
    title: "POLITICAL SONGS",
  },
  {
    link: "/assets/election4.png",
    title: "SLOGANS ABOUT YOU",
  },
  {
    link: "/assets/election5.png",
    title: "POLITICAL PARTY BRANDING",
  },
];

const PoliticalSection8 = () => {
  return (
    <div className="text-white w-[95%] m-auto "  data-aos="fade-up">
      <div className="text-black bg-white font-bold text-2xl md:text-4xl md:w-full text-center p-4">
        WE WILL PRODUCE
      </div>
      <div className="flex flex-wrap  justify-center items-center gap-4 p-4 mt-9">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center h-full">
            <img
              src={item.link}
              alt={item.title}
              className="w-80 h-48 object-cover rounded-md"
            />
            <div className="text-center text-lg mt-2 p-4 font-medium">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoliticalSection8;
