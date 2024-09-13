import React from 'react'
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
// import BubbleAnimation from './component/ParticleComponent/Particles'
// import ParticleComponent from './component/ParticleComponent/Particles'
import ParticlesComponent from './component/ParticleComponent/Particles'
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
    <Route path="/collegebrandpromotion/offline&online" element={<Portfolio />} />
    <Route path="/collegebrandpromotion/influencer-marketing" element={<Portfolio />} />
    <Route path="/collegebrandpromotion/digital-campaigning-support" element={<Portfolio />} />
    <Route path="/collegebrandpromotion/professional-admission-cell-assistance" element={<Portfolio />} />
    <Route path="/collegebrandpromotion/website-seo" element={<Portfolio />} />
    <Route path="/digital-marketing/search-engine-optimization" element={<Portfolio />} />
    <Route path="/digital-marketing/social-media-management" element={<Portfolio />} />
    <Route path="/digital-marketing/social-media-marketing" element={<Portfolio />} />
    <Route path="/digital-marketing/social-media-marketing" element={<Portfolio />} />
    <Route path="/digital-marketing/social-media-marketing" element={<Portfolio />} />
    {/* <Route path='/blog/:id' exact element={<BlogDetail/>}/> */}
    
    </Routes>
    </Router>
    </>
  )
}

export default App