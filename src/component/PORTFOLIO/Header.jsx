import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        	<div className="bannerbg-w3l bannerbg-w3l-inner">
	
		<header>
			<div className="header_topw3layouts_bar">
				<div className="container">
					
					<div className="row border-bottom py-lg-4 py-3">
						<div className="col-xl-7 col-lg-6 header_agileits_left">
							<ul>
								<li className="mr-3">
									<i className="fas fa-phone mr-2"></i> +(010) 221 918 811</li>
								<li>
									<i className="fas fa-envelope mr-2"></i>
									<a href="mailto:info@example.com">info@example.com</a>
								</li>
							</ul>
						</div>
						<div className="col-xl-5 col-lg-6 header_right text-center mt-lg-0 mt-2">
							<div className="row">
								
								<div className="col-4 w3social-icons">
									<ul>
										<li>
											<a href="#" className="rounded-circle">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li className="px-2">
											<a href="#" className="rounded-circle">
												<i className="fab fa-google-plus-g"></i>
											</a>
										</li>
										<li>
											<a href="#" className="rounded-circle">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li className="pl-2">
											<a href="#" className="rounded-circle">
												<i className="fab fa-dribbble"></i>
											</a>
										</li>
									</ul>
								</div>
								
								<div className="col-4 header-loginw3ls text-lg-right text-center">
									<a href="#" className="log" data-toggle="modal" data-target="#exampleModalCenter1">
										<i className="fas fa-user mr-2"></i> Login</a>
								</div>
								<div className="col-4 header-loginw3ls">
									<a href="#" className="log" data-toggle="modal" data-target="#exampleModalCenter2">
										<i className="fas fa-key mr-2"></i> Register</a>
								</div>
							</div>
						</div>
					</div>
					
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="#">District
							<span>Real Property</span>
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						    aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
							</button>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link to="/" className="nav-link">Home</Link>
									{/* <a className="nav-link" href="index.html">
										<span className="sr-only">(current)</span>
									</a> */}
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
										<a className="dropdown-item" href="index.html">Services</a>
										<a className="dropdown-item" href="index.html">Pricings</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="about.html">Clients</a>
										<a className="dropdown-item" href="about.html">Our Agents</a>
									</div>
								</li>
								<li className="nav-item  active mx-xl-4 mx-lg-3 my-lg-0 my-3">
									<Link className="nav-link" to="/portfolio">Portfolio</Link>
									
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
		
		<div className="banner-w3ltext about-w3bnr">
			<div className="container">
				<h1 className="text-white text-center">
					<a href="index.html">Home</a> / Portfolio</h1>
			</div>
		</div>
	
	</div>
    </div>
  )
}

export default Header