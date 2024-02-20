import './App.css'
import Home from './component/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Portfolio from './component/PORTFOLIO/portfolio'
import About from './component/ABOUT/about'
import Contact from './component/CONTACT/contact'
import Detail from './component/PORTFOLIO/Detail'
import Dashboard from './component/DASHBOARD/Dashboard'
import DBComment from './component/DASHBOARD/comment/DBComment'
import DBUser from './component/DASHBOARD/user/DBUser'

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
          
        <Route path="/dashboardComment" exact element={<DBComment/>}></Route>
        <Route path="/user" exact element ={<DBUser/>}></Route>

        </Routes>
  

    </>
  )
}

export default App