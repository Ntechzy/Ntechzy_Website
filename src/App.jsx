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
// import Offline_online from './component/ServicesComponent/Offline&Online/Offline_online'
import Offline_online_page from './Pages/ServicesPages/CollegeBranding/Offline_online_page'
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
    <Route path='/services' exact element={<ServicesNav/>}/>
    <Route path='/contact-Us' exact element={<ContactUs/>}/>
    <Route path='/blog/*' exact element={<BlogPage/>}/>
    <Route path="/portfolio/*" element={<Portfolio />} />
    <Route path="/collegebrandpromotion/offline&online" element={<Offline_online_page/>} />
    <Route path="/collegebrandpromotion/influencer-marketing" element={<Portfolio />} />
    <Route path="/collegebrandpromotion/digital-campaigning-support" element={<Portfolio />} />
    <Route path="/collegebrandpromotion/professional-admission-cell-assistance" element={<Portfolio />} />
    <Route path="/collegebrandpromotion/website-seo" element={<Portfolio />} />
    <Route path="/digital-marketing/search-engine-optimization" element={<Portfolio />} />
    <Route path="/digital-marketing/social-media-management" element={<Portfolio />} />
    <Route path="/digital-marketing/social-media-marketing" element={<Portfolio />} />
    <Route path="/web-design-and-development/E-commerce" element={<Portfolio />} />
    <Route path="/web-design-and-development/portfolios" element={<Portfolio />} />
    <Route path="/web-design-and-development/education" element={<Portfolio />} />
    <Route path="/web-design-and-development/corporate" element={<Portfolio />} />
    <Route path="/mobile-development/" element={<Portfolio />} />
    <Route path="/media-services/video-services" element={<Portfolio />} />
    <Route path="/media-services/corporate-shoot" element={<Portfolio />} />
    <Route path="/media-services/campus-tour" element={<Portfolio />} />
    <Route path="/media-services/motion-graphic-animation-video" element={<Portfolio />} />
    <Route path="/media-services/documentary" element={<Portfolio />} />
    {/* <Route path='/blog/:id' exact element={<BlogDetail/>}/> */}
    
    </Routes>
    </Router>
    </>
  )
}

export default App