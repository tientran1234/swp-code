import React from 'react'
import { CiLogin } from "react-icons/ci";
import { BiRegistered } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import { FaPhone } from "react-icons/fa";

export default function BannerHeader() {
  return (
    <div>
        	<div className="bannerbg-w3l">
	
		<header>
			<div className="header_topw3layouts_bar">
				<div className="container">
				
					<div className="row border-bottom py-lg-4 py-3">
						<div className="col-xl-7 col-lg-6 header_agileits_left">
							<ul>
								<li className="mr-3">
                                <FaPhone style={{fontSize:"20px",transform:"translateY(5px)"}} /> +(010) 221 918 811</li>
								<li className="mr-3">
                                <MdEmail style={{fontSize:"20px",transform:"translateY(5px)"}} /> info@example.com
								</li>
							</ul>
						</div>
						<div className="col-xl-5 col-lg-6 header_right text-center mt-lg-0 mt-2">
							<div className="row">
							
								<div className="col-4 w3social-icons">
									<ul>
										<li>
											<a href="#" className="rounded-circle">
												
											</a>
										</li>
										<li className="px-2">
											<a href="#" className="rounded-circle">
												
											</a>
										</li>
										<li>
											<a href="#" className="rounded-circle">
												
											</a>
										</li>
										<li className="pl-2">
											<a href="#" className="rounded-circle">
												
											</a>
										</li>
									</ul>
								</div>
							
								<div className="col-4 header-loginw3ls text-lg-right text-center">
									<a href="#" className="log" data-toggle="modal" data-target="#exampleModalCenter1">
                                    <CiLogin style={{fontSize:"20px",transform:"translateY(5px)"}} /> Login</a>
								</div>
								<div className="col-4 header-loginw3ls">
									<a href="#" className="log" data-toggle="modal" data-target="#exampleModalCenter2">
                                    <BiRegistered style={{fontSize:"20px",transform:"translateY(5px)"}} /> Register</a>
								</div>
							</div>
						</div>
					</div>
					
					<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:"transparent",color: "white"}}>
						<a className="navbar-brand" href="#">District
							<span>Real Property</span>
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						    aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link" href="index.html">Home
										<span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item mx-xl-4 mx-lg-3 my-lg-0 my-3">
									<a className="nav-link" href="about.html">About Us</a>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
									    aria-expanded="false">
										Dropdown
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										<a className="dropdown-item scroll" href="#services">Services</a>
										<a className="dropdown-item scroll" href="#pricings">Pricings</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item scroll" href="#clients">Clients</a>
										<a className="dropdown-item" href="about.html">Our Agents</a>
									</div>
								</li>
								<li className="nav-item mx-xl-4 mx-lg-3 my-lg-0 my-3">
									<a className="nav-link" href="portfolio.html">Portfolio</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="contact.html">Contact Us</a>
								</li>
							</ul>
						</div>
					</nav>
				
				</div>
			</div>
		</header>
	
		<div className="banner-text-agile">
			<div className="container">
				<div className="banner-w3lstexts text-white text-center">
					<h1>Perfect Property</h1>
					<h4 className="text-uppercase mt-md-3 mt-2 mb-md-4 mb-3">for your home</h4>
					<p className="text-white">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris</p>
					<a href="about.html" className="banner-button btn mt-md-5 mt-4">Know More</a>
				</div>
			</div>
		</div>
		
	</div>
    </div>
  )
}
