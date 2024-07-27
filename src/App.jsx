import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import BlogPage from './Pages/BlogPage'
import BlogDetail from './component/BlogComponent/BlogShow/BlogDetails'
import ScrollToTop from './Pages/ScrollToTop'
import Portfolio from './Pages/Portfolio'
const App = () => {
  return (
    <>
    <Router>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/about' exact element={<About/>}/>
    <Route path='/services' exact element={<Services/>}/>
    <Route path='/contact-Us' exact element={<ContactUs/>}/>
    <Route path='/blog/*' exact element={<BlogPage/>}/>
    <Route path="/portfolio/*" element={<Portfolio />} />
    {/* <Route path='/blog/:id' exact element={<BlogDetail/>}/> */}
    
    </Routes>
    </Router>
    </>
  )
}

export default App