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
    heading: "College Branding and Promotion(Offline & Online)",
    content:
      " Our College Branding and Promotion services at Ntechzy Pvt Ltd are designed to elevate the visibility and reputation of educational institutions. We understand that colleges today compete not only on academic merit but also on how well they are perceived by prospective students, parents, and the community. Our approach combines both offline and online strategies, ensuring your institution reaches a broad audience effectively. Offline promotions may include event sponsorships, fairs, campus workshops, and targeted distribution of branded materials. Online, we leverage social media campaigns, engaging content, SEO optimization, and email marketing to build a strong digital footprint. Our goal is to help colleges establish a distinct brand identity, attract students, and build lasting relationships with stakeholders.",
  },
];
const OnlineOfflineComponent = () => {
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

export default OnlineOfflineComponent;
