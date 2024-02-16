import './App.css'
import Home from './component/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './component/PORTFOLIO/portfolio'
import About from './component/ABOUT/about'
import Contact from './component/CONTACT/contact'
import Detail from './component/PORTFOLIO/Detail'
import Dashboard from './component/DASHBOARD/Dashboard'
import DBComment from './component/DASHBOARD/comment/DBComment'

function App() {


  return (
    <>

        <Routes>

          <Route path="/" exact element={<Home />}></Route>
          <Route path="/portfolio"
            element={<Portfolio />}
            >
             
              </Route>
               <Route path="portfolio/detail/:id" element={<Detail/>}></Route>
          
           
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
          <Route path="/dashboard" exact element={<Dashboard/>}></Route>
          


        </Routes>
  

    </>
  )
}

export default App