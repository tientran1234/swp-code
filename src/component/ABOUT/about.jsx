import React from 'react'
import Header from '../PORTFOLIO/Header'
import "../../assets/css/style.css"
import "../../assets/css/bootstrap.css"
import Information from './information'
import Team from './Team'
import Footer from '../Footer'
function About() {
  return (
    <div>
        <Header name="About us"></Header>
        <Information/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default About