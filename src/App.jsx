import './App.css'
import Home from './component/home'
import { BrowserRouter, Route, Routes,useNavigate } from 'react-router-dom'
import Portfolio from './component/PORTFOLIO/portfolio'
import About from './component/ABOUT/about'
import Contact from './component/CONTACT/contact'
import Detail from './component/PORTFOLIO/Detail'
import Dashboard from './component/DASHBOARD/Dashboard'
import DBComment from './component/DASHBOARD/comment/DBComment'
import DBUser from './component/DASHBOARD/user/DBUser'
import React,{useEffect} from 'react'

function App() {

const token =JSON.parse(localStorage.getItem("token"));
const navigate=useNavigate();
useEffect(() => {
  if (token !== "QpwL5tke4Pnpja7X4") {
    navigate("/");
  }
}, [navigate, token]);
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
          <Route path="/dashboard" exact element={token==="QpwL5tke4Pnpja7X4"?<Dashboard/>:null}></Route>
          <Route path="/dashboardComment" exact element ={token==="QpwL5tke4Pnpja7X4"?<DBComment/>:null}></Route>
          <Route path="/user" exact element ={token==="QpwL5tke4Pnpja7X4"?<DBUser/>:null}></Route>
      


        </Routes>
  

    </>
  )
}

export default App