import React from "react";
import { Route, Routes } from "react-router-dom";
import PortNav from "../component/PortfolioComponent/PortNav";
// import PortfolioDetail from "../component/PortfolioComponent/Portfolio_campaign/Portfolio Detail";
// import Portfolio_office from "../component/PortfolioComponent/Portfolio_office/Portfolio_office";
// import Portfolio_campaign from "../component/PortfolioComponent/Portfolio_campaign/Portfolio_campaign";
// import PortfolioDetailOffice from "../component/PortfolioComponent/Portfolio_office/PortfolioDetailOffice";
// import Portfolio_services from "../component/PortfolioComponent/Portfolio_spotlight/Portfolio_spotlight";
import PortfolioDetailServices from "../component/PortfolioComponent/Portfolio_spotlight/PortfolioDetailSpotlight";
import Portfolio_ntechzy from "../component/PortfolioComponent/Portfolio_ntechzy/portfolio_ntechzy";
import Portfolio_ntechzy_Details from "../component/PortfolioComponent/Portfolio_ntechzy/Portfolio_ntechzy_Detail";
import Portfolio_political from "../component/PortfolioComponent/Portfolio_political/Portfolio_political";
// import PortfolioDetail from "../component/PortfolioComponent/Portfolio_services/PortfolioDetailServices";
import PortfolioDetailPolitical from "../component/PortfolioComponent/Portfolio_spotlight/PortfolioDetailSpotlight";
import Portfolio_spotlight from "../component/PortfolioComponent/Portfolio_spotlight/Portfolio_spotlight";
import PortfolioDetailSpotlight from "../component/PortfolioComponent/Portfolio_spotlight/PortfolioDetailSpotlight";
import PoliticalPage from "./PoliticalPage";

const Portfolio = () => {
  return (
    <>
      <PortNav />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Portfolio_ntechzy />} />
          <Route path="/ntechzy" element={<Portfolio_ntechzy />} />
          <Route path="/ntechzy/:id" element={<Portfolio_ntechzy_Details />} />
          <Route path="/political_campaign" element={<PoliticalPage/>} />
          <Route path="/political_campaign/:id" element={<PoliticalPage/>} />
          <Route path="/SpotlightWithNikhil" element={<Portfolio_spotlight />} />
          <Route path="/SpotlightWithNikhil/:id" element={<PortfolioDetailSpotlight />} />
        </Routes>
      </div>
    </>
  );
};

export default Portfolio;
