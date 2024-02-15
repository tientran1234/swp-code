import React from 'react'
import Header from '../PORTFOLIO/Header'
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.css"
import Information from './information'
import Team from './Team'
import Footer from '../Footer'
import useAuthStore from '../../zustand/authStore'
import useRegister from '../../zustand/authRegister'
import Register from '../Register'
import Login from '../Login'
function About() {
  const isLoginFormOpen = useAuthStore((state) => state.isLoginFormOpen);
  const isRegisterFormOpen=useRegister((state)=>state.isRegisterFormOpen)
  return (
    <div>
      {isLoginFormOpen&&<Login/>}
        {isRegisterFormOpen&&<Register/>}
        <Header name="About us" navbar="about"></Header>
        <Information/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default About