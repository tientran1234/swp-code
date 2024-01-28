import React from 'react'
import Header from '../PORTFOLIO/Header'
import Form from './Form'
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.css"
import useAuthStore from '../../zustand/authStore'
import useRegister from '../../zustand/authRegister'
import Login from '../Login'
import Register from '../Register'
import Footer from '../Footer'

function Contact() {
    const isLoginFormOpen = useAuthStore((state) => state.isLoginFormOpen);
    const isRegisterFormOpen=useRegister((state)=>state.isRegisterFormOpen)
  return (
    <div>
        <Header name="Contact Us"/>
        {isLoginFormOpen&&<Login/>}
        {isRegisterFormOpen&&<Register/>}
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact