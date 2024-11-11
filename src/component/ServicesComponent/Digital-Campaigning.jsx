import React from "react";
import CommonComponent from "./Common/CommonComponent";
import CommonFaq from "./Common/CommonFaq";
import Footer from "../HomeComponent/Footer";
const data = [
  {
    question: "What Kind Of Services Do You Offer?",
    answer:
      "We offer a range of services including digital marketing, web development, and consulting.",
  },
  {
    question: "What Are The Benefits Of Using Our Services?",
    answer:
      "Our services help you increase your online presence, improve user engagement, and boost sales.",
  },
  {
    question: "How Can I Get Started?",
    answer:
      "Getting started is easy! Contact us through our website or give us a call to discuss your needs.",
  },
  {
    question: "What Support Do You Provide?",
    answer:
      "We provide comprehensive support tailored to your requirements, ensuring your success.",
  },
];
const data2 = [
  {
    heading: "Digital Campaigning Support",
    content:
      "Digital campaigns are crucial in the digital age, and Ntechzy Pvt Ltd specializes in providing robust Digital Campaigning Support for your brand. From conception to execution, we craft digital campaigns that are data-driven, audience-focused, and goal-oriented. Our team handles every aspect, including ad creation, targeting, monitoring, and optimization, across various channels such as social media, search engines, and display networks. We ensure your campaigns achieve high reach, increase engagement, and drive desired outcomes, whether for brand awareness, lead generation, or sales growth.",
  },
];
const DigitalCampaigningCmp = () => {
  return (
    <div>
      <CommonComponent data2={data2} />
      <CommonFaq
        data={data}
        title="Frequently Asked Questions"
        subtitle="Get Answers from Our Experts"
        imageUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-listing-images-4.jpg"
        rating={4.8}
      />
      <Footer />
    </div>
  );
};

export default DigitalCampaigningCmp;
