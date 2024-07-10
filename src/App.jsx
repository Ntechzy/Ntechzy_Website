import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Banner from './component/Banner/Banner'
import Home from './Pages/Home'
const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/'exact element={<Home/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App