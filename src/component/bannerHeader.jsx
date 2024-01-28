import React,{useState, useEffect} from 'react'
import {useAuthStore} from '../zustand/authStore';
import { CiLogin } from "react-icons/ci";
import { BiRegistered } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import { FaPhone } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useRegister from '../zustand/authRegister';

export default function BannerHeader() {
	const toggleLoginForm = useAuthStore((state) => state.toggleLoginForm);
	const toggleRegisterForm= useRegister((state)=>state.toggleRegisterForm);
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const [isSticky, setSticky] = useState(false);
	
	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};
	
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 100) {
		  setSticky(true);
		} else {
		  setSticky(false);
		}
	  };
	  const scrollToElement = (id) => {
		const element = document.getElementById(id);
		if (element) {
		  element.scrollIntoView({ behavior: 'smooth' });
		}
	  };
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, [isSticky]);
	
  return (
    <div>
        	<div className="bannerbg-w3l">
	
		<header className={isSticky ? 'sticky' : ''}>
			<div className="header_topw3layouts_bar">
				<div className="container">
				
					<div className="row border-bottom py-lg-4 py-3">
						<div className="col-xl-7 col-lg-6 header_agileits_left">
							<ul>
								<li className="mr-3">
                                <FaPhone style={{fontSize:"20px",transform:"translateY(5px)",color:"red"}} /> +(010) 221 918 811</li>
								<li className="mr-3">
                                <MdEmail style={{fontSize:"20px",transform:"translateY(5px)",color:"red"}} /> info@example.com
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
									<p onClick={toggleLoginForm}  className="log" style={{color:"white",cursor:"pointer"}} data-toggle="modal" data-target="#exampleModalCenter1">
                                    <CiLogin style={{fontSize:"20px",transform:"translateY(5px)",color:"red"}} /> Login</p>
								</div>
								<div className="col-4 header-loginw3ls">
									<p onClick={toggleRegisterForm} className="log" data-toggle="modal" style={{color:"white",cursor:"pointer"}} data-target="#exampleModalCenter2">
                                    <BiRegistered style={{fontSize:"20px",transform:"translateY(5px)",color:"red"}} /> Register</p>
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
									<Link to="/" className="nav-link">Home</Link>
								</li>
								<li className="nav-item mx-xl-4 mx-lg-3 my-lg-0 my-3">
									<Link to="/about" className="nav-link">About us</Link>
								</li>
								<li className="nav-item dropdown">
									<p className="nav-link dropdown-toggle" onClick={toggleDropdown} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
									    aria-expanded="false">
										Dropdown
									</p>
									{isDropdownVisible && (
												<div className="dropdown-menu" aria-labelledby="navbarDropdown">
													<span className="dropdown-item" onClick={() => scrollToElement('services')}>
														Services
													</span>
													<span className="dropdown-item" onClick={() => scrollToElement('pricings')}>
														Pricings
													</span>
													<div className="dropdown-divider"></div>
													<span className="dropdown-item" onClick={() => scrollToElement('clients')}>
														Clients
													</span>
													<span className="dropdown-item" onClick={() => scrollToElement('agents')}>
														Our Agents
													</span>
												</div>
											)}
								</li>
								<li className="nav-item mx-xl-4 mx-lg-3 my-lg-0 my-3">
								<Link to="/portfolio" className="nav-link">Portfolio</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/contact">Contact Us</Link>
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