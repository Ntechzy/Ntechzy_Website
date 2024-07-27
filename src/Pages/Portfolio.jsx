import React from "react";
import { Route, Routes } from "react-router-dom";
import PortNav from "../component/PortfolioComponent/PortNav";
import PortfolioDetail from "../component/PortfolioComponent/Portfolio_campaign/Portfolio Detail";
import Portfolio_office from "../component/PortfolioComponent/Portfolio_office/Portfolio_office";
import Portfolio_campaign from "../component/PortfolioComponent/Portfolio_campaign/Portfolio_campaign";
import PortfolioDetailOffice from "../component/PortfolioComponent/Portfolio_office/PortfolioDetailOffice";
import Portfolio_services from "../component/PortfolioComponent/Portfolio_services/Portfolio_services";
import PortfolioDetailServices from "../component/PortfolioComponent/Portfolio_services/PortfolioDetailServices";

const Portfolio = () => {
  return (
    <>
      <PortNav />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Portfolio_campaign />} />
          <Route path="/campaign" element={<Portfolio_campaign />} />
          <Route path="/office" element={<Portfolio_office />} />
          <Route path="/services" element={<Portfolio_services />} />
          <Route path="/campaign/:id" element={<PortfolioDetail />} />
          <Route path="/office/:id" element={<PortfolioDetailOffice />} />
          <Route path="/services/:id" element={<PortfolioDetailServices />} />
        </Routes>
      </div>
    </>
  );
};

export default Portfolio;
