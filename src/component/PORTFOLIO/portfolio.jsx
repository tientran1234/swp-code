import React from 'react'
import Header from './Header'
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.css"
import Gallery from './Gallery'
import {useAuthStore} from '../../zustand/authStore'
import Login from '../Login'
import useRegister from '../../zustand/authRegister'
import Register from '../Register'

function Portfolio() {
  const isLoginFormOpen = useAuthStore((state) => state.isLoginFormOpen);
  const isRegisterFormOpen=useRegister((state)=>state.isRegisterFormOpen)
  return (
    <div>
      
        <Header name="Portfolio"/>
        {isLoginFormOpen&&<Login/>}
        {isRegisterFormOpen&&<Register/>}
        <Gallery/>
    </div>
  )
}

export default Portfolio