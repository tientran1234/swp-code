import React from 'react'
import BannerHeader from './bannerHeader'
import "../assets/css/style.css"
import "../assets/css/bootstrap.css"
import "../assets/css/fontawesome-all.css"
import Login from './Login'
import MiddleSection from './MiddleSection'
import BannerBottom from './BannerBottom'
import Service from './Service'
import Pricing from './Pricing'
import StatsSection from './StatsSection'
import Testimonials from './Testimonials'
import Footer from './Footer'
import useAuthStore  from '../zustand/authStore';
import useRegister from '../zustand/authRegister'
import Register from './Register'


function Home() {
  const isLoginFormOpen = useAuthStore((state) => state.isLoginFormOpen);
  const isRegisterFormOpen=useRegister((state)=>state.isRegisterFormOpen)
  return (
    <div>
        <BannerHeader/>
        {isLoginFormOpen&&<Login/>}
        {isRegisterFormOpen&&<Register/>}
        <BannerBottom/>
        <MiddleSection/>
        <Service/>
        <Pricing/>
        <StatsSection/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home