import React from 'react';
import Slider from "react-slick";
import { FaStar, FaStarHalf } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientFeedback = () => {
  // JSON data as provided
  const data = {
    "settings": {
      "dots": true,
      "infinite": true,
      "speed": 500,
      "slidesToShow": 2,
      "slidesToScroll": 1,
      "autoplay": true,
      "autoplaySpeed": 3000,
      "responsive": [
        {
          "breakpoint": 768,
          "settings": {
            "slidesToShow": 1
          }
        }
      ]
    },
    "feedback": [
      {
        "text": "\"We have been incredibly pleased with the services provided by Ntechzy. The team's expertise in digital marketing has significantly boosted our online presence and engagement with prospective students.\"",
        "rating": 4.5,
        "client": {
          "name": "Major S.D. Singh Ayurvedic Medical College & Hospital Farrukhabad",
          "logo": "/assets/clientlogo.png"
        }
      },
      {
        "text": "\"Ntechzy's innovative strategies and dedicated support have been a game changer for our institution. The tailored solutions have greatly enhanced our outreach efforts and student engagement.\"",
        "rating": 5,
        "client": {
          "name": "Naiminath Ayurvedic Medical College",
          "logo": "/assets/clientlogo.png"
        }
      },
      {
        "text": "\"The team at Ntechzy has consistently delivered outstanding results. Their expertise in media services has made a substantial impact on our marketing campaigns, bringing remarkable visibility and engagement.\"",
        "rating": 5,
        "client": {
          "name": "Vimla Family Ayurvedic Medical College",
          "logo": "/assets/clientlogo.png"
        }
      },
      {
        "text": "\"Ntechzy has provided exceptional digital marketing services that have driven impressive results for our college. Their commitment to excellence and customer satisfaction is evident in the outcomes we’ve achieved.\"",
        "rating": 4.5,
        "client": {
          "name": "ITM Ayurvedic Medical College",
          "logo": "/assets/clientlogo.png"
        }
      }
    ]
  };

  return (
    <div className="text-white py-8 px-4">
      <div className="text-center text-2xl font-bold mb-4 text-slate-500" data-aos="flip-right">
        Client Feedback
      </div>

      <div className="text-center mb-8 font-bold text-2xl md:text-4xl" data-aos="flip-left">
        Happy Words From Happy Customers
      </div>

      <Slider {...data.settings} className="px-4 md:px-10">
        {data.feedback.map((feedback, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg flex flex-col items-center mx-2 mb-6"
            data-aos="fade-up"
          >
            <p className="mb-4 text-center" data-aos="fade-up">
              {feedback.text}
            </p>
            <div className="flex justify-between items-center w-full mb-4">
              <div className="flex" data-aos="flip-left">
                {Array.from({ length: 5 }, (_, i) => (
                  <React.Fragment key={i}>
                    {i < Math.floor(feedback.rating) ? (
                      <FaStar />
                    ) : i === Math.floor(feedback.rating) && feedback.rating % 1 !== 0 ? (
                      <FaStarHalf />
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex items-center ml-4" data-aos="flip-right">
                <img
                  src={feedback.client.logo}
                  alt={`Client ${index + 1}`}
                  className="rounded-full w-12 h-12 md:w-16 md:h-16 mb-2 mr-2"
                  data-aos="fade-up"
                />
                <div className="text-base md:text-lg font-semibold">{feedback.client.name}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientFeedback;
