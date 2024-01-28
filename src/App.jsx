import './App.css'
import Home from './component/home'
import { Route,Routes } from 'react-router-dom'
import Portfolio from './component/PORTFOLIO/portfolio'
import About from './component/ABOUT/about'
import Contact from './component/CONTACT/contact'
function App() {
  

  return (
    <>
    <Routes>

   <Route path="/" exact element={<Home/>}></Route>
   <Route path="/portfolio" exact element={<Portfolio/>}></Route>
   <Route path="/about" exact element={<About/>}></Route>
   <Route path="/contact" exact element={<Contact/>}></Route>
      </Routes>
    
    </>
  )
}

export default App