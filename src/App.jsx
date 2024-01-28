import About from './component/ABOUT/about'
import './App.css'
import Home from './component/home'
import { Route,Routes } from 'react-router-dom'
import Portfolio from './component/PORTFOLIO/portfolio'
function App() {
  

  return (
    <>
    <Routes>
    <Route path="/about" exact element={<About/>}></Route>
   <Route path="/" exact element={<Home/>}></Route>
   <Route path="/portfolio" exact element={<Portfolio/>}></Route>
      </Routes>
    
    </>
  )
}

export default App
