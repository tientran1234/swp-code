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



function Home() {
  return (
    <div>
        <BannerHeader/>
        <Login/>
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