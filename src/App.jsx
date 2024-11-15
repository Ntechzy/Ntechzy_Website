// import React from 'react's
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
// import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import BlogPage from './Pages/BlogPage'
// import BlogDetail from './component/BlogComponent/BlogShow/BlogDetails'
import ScrollToTop from './Pages/ScrollToTop'
import Portfolio from './Pages/Portfolio'
import ServicesNav from './component/Navbar/ServicesNav' 
import OnlineOfflinePage from './Pages/ServicesPages/CollegeBranding/OnlineOfflinePage'
import InfluencerMarketing from './Pages/ServicesPages/CollegeBranding/InfluencerMarketing'
import DigitalCampaiging from './Pages/ServicesPages/CollegeBranding/DigitalCampaiging'
import ProfessionalAdmissionCell from './Pages/ServicesPages/CollegeBranding/ProfessionalAdmissionCell'
import WebsiteSeo from './Pages/ServicesPages/CollegeBranding/WebsiteSeo'
import SearchEngineOptimization from './Pages/ServicesPages/DigitalMarketing/SearchEngineOptimization'
import SocialMediaManagement from './Pages/ServicesPages/DigitalMarketing/SocialMediaManagement'
import SearchEngineMarketing from './Pages/ServicesPages/DigitalMarketing/SearchEngineMarketing'
import Website from './Pages/ServicesPages/WebDesign/Website'
import AppDevelopment from './Pages/ServicesPages/MobileApplication/AppDevelopment'
import VideoServicesCmp from './component/ServicesComponent/VideoServicesCmp'
import VideoServices from './Pages/ServicesPages/MediaServices/VideoServices'
import CorporateShoot from './Pages/ServicesPages/MediaServices/CorporateShoot'
import CampusTour from './Pages/ServicesPages/MediaServices/CampusTour'
import PodcastShoot from './Pages/ServicesPages/MediaServices/PodcastShoot'
import Carrier from './Pages/Carrier'
import JobOpening from './component/CarrierPage/JobOpening'
import CompanyLife from './component/CarrierPage/CompanyLife'
// import Offline_online from './component/ServicesComponent/Offline&Online/Offline_online'
// import BubbleAnimation from './component/ParticleComponent/Particles'
// import ParticleComponent from './component/ParticleComponent/Particles'
// import ParticlesComponent from './component/ParticleComponent/Particles'
const App = () => {
  return (
    <>
    <Router>
    <ScrollToTop/>
    <Navbar/>
    {/* <ParticleComponent/> */}
    {/* <BubbleAnimation/> */}
   
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/about' exact element={<About/>}/>
    <Route path='/services/*' exact element={<ServicesNav/>}/>
    <Route path='/contact-Us' exact element={<ContactUs/>}/>
    <Route path='/blog/*' exact element={<BlogPage/>}/>
    <Route path="/portfolio/*" element={<Portfolio />} />
    <Route path="/carrier/*" element={<Carrier/>} />
    {/* <Route path="/carrier/lifeAtNtechzy" element={<CompanyLife/>} /> */}
    <Route path="/services/college-branding/offlineandonline" element={<OnlineOfflinePage/>} />
    <Route path="/services/college-branding/influencer-marketing" element={<InfluencerMarketing />} />
    <Route path="/services/college-branding/digital-campaigning" element={<DigitalCampaiging />} />
    <Route path="/services/college-branding/admission-cell" element={<ProfessionalAdmissionCell/>} />
    <Route path= "/services/college-branding/website-seo" element={<WebsiteSeo/>} />
    <Route path="/services/digital-marketing/search-engine-optimization" element={<SearchEngineOptimization />} />
    <Route path="/services/digital-marketing/social-media-management" element={<SocialMediaManagement/>} />
    <Route path="/services/digital-marketing/search-engine-marketing" element={<SearchEngineMarketing />} />
    <Route path="/services/web-design-and-development" element={<Website/>} />
    <Route path="/services/mobile-app-development" element={<AppDevelopment />} />
    <Route path="/services/media/video-services" element={<VideoServices />} />
    <Route path="/services/media/corporate-shoot" element={<CorporateShoot />} />
    <Route path="/services/media/podcast-setup" element={<PodcastShoot />} />
   {/* <Route path="/services/media/campus-tour" element={<CampusTour />} />s */}
    {/* <Route path="/services/media/motion-graphics" element={<Portfolio />} />
    <Route path="/services/media/documentary" element={<Portfolio />} />  */}
    {/* <Route path='/blog/:id' exact element={<BlogDetail/>}/> */}
    
    </Routes>
    </Router>
    </>
  )
}

export default App