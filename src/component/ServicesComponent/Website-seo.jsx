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
    heading: "Website SEO",
    content:
      "Ntechzy Pvt Ltd provides Website SEO services focused on optimizing your website's structure, speed, and usability to improve search engine rankings and user experience. We conduct a thorough website audit, identifying areas for improvement in terms of content, code, and mobile responsiveness. Our team ensures that your site is optimized for both search engines and users, improving its chances of ranking higher and attracting relevant traffic. Our approach is designed to enhance visibility, drive organic traffic, and ultimately help convert visitors into customers.",
  },
];
const WebsiteSeoCmp = () => {
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

export default WebsiteSeoCmp;
