import React from "react";
import CommonComponent from "./Common/CommonComponent";
import CommonFaq from "./Common/CommonFaq";
import Footer from "../HomeComponent/Footer";
import CommonScroll from "./Common/CommonScroll";
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
    heading: "Corporate Shoot",
    content:
    "For businesses looking to capture their corporate environment, Ntechzy Pvt Ltd offers professional Corporate Shoot services. We specialize in corporate photography and videography, highlighting your office space, events, and team dynamics. Our corporate shoots are designed to reflect your brand’s values and professionalism, helping create an authentic and appealing image for potential clients or employees. High-quality visuals from a corporate shoot can enhance your website, social media, and marketing materials.",
  },
];
const CorporateShootCmp = () => {
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
      <CommonScroll/>
      <Footer />
    </div>
  );
};

export default CorporateShootCmp;
