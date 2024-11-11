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
    heading: "Search Engine Marketing (SEM)",
    content:
    "Search Engine Marketing (SEM) with Ntechzy Pvt Ltd is designed to boost your online visibility through paid advertising on search engines. Our SEM specialists create targeted ads that appear at the top of search results, reaching your potential customers at the exact moment they are searching for your products or services. We manage everything from ad creation and budget allocation to monitoring and optimization, ensuring maximum return on investment (ROI). Our SEM campaigns are data-driven, transparent, and tailored to align with your business objectives.",
  },
];
const Sem = () => {
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

export default Sem;
