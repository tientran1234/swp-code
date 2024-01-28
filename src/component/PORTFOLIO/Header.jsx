import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import useRegister from '../../zustand/authRegister';
import useAuthStore from '../../zustand/authStore';
import { CiLogin } from "react-icons/ci";
import { BiRegistered } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
function Header(props) {
	const toggleLoginForm = useAuthStore((state) => state.toggleLoginForm);
	const toggleRegisterForm = useRegister((state) => state.toggleRegisterForm)
	const isRegisterFormOpen = useRegister((state) => state.isRegisterFormOpen)
	const [isSticky, setSticky] = useState(false);
	const [isDropdownVisible, setDropdownVisible] = useState(false);
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
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, [isSticky]);
	
	return (
		<div>
			<div className="bannerbg-w3l bannerbg-w3l-inner">

			<header className={isSticky ? 'sticky' : ''}>
					<div className="header_topw3layouts_bar">
						<div className="container">

							<div className="row border-bottom py-lg-4 py-3">
								<div className="col-xl-7 col-lg-6 header_agileits_left">
									<ul>
										<li className="mr-3">
											<FaPhone style={{ fontSize: "20px", transform: "translateY(5px)", color: "red" }} /> +(010) 221 918 811</li>
										<li className="mr-3">
											<MdEmail style={{ fontSize: "20px", transform: "translateY(5px)", color: "red" }} /> info@example.com
										</li>
									</ul>
								</div>
								<div className="col-xl-5 col-lg-6 header_right text-center mt-lg-0 mt-2">
									<div className="row">

										<div className="col-4 w3social-icons">

										</div>

										<div className="col-4 header-loginw3ls text-lg-right text-center">
											<p onClick={toggleLoginForm} style={{ color: "white", cursor: "pointer" }} href="#" className="log" data-toggle="modal" data-target="#exampleModalCenter1">
												<CiLogin style={{ fontSize: "20px", transform: "translateY(5px)", color: "red" }} /> Login</p>
										</div>
										<div className="col-4 header-loginw3ls">
											<p onClick={toggleRegisterForm} style={{ color: "white", cursor: "pointer" }} className="log" data-toggle="modal" data-target="#exampleModalCenter2">
												<BiRegistered style={{ fontSize: "20px", transform: "translateY(5px)", color: "red" }} /> Register</p>
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
											<Link className="nav-link" to="/about">About us</Link>

										</li>
										<li className="nav-item dropdown">
											<p className="nav-link dropdown-toggle"  onClick={toggleDropdown} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
												aria-expanded="false">
												Dropdown
											</p>
											{isDropdownVisible && (
												<div className="dropdown-menu" aria-labelledby="navbarDropdown">
													<p className="dropdown-item" >
														Services
													</p>
													<p className="dropdown-item" >
														Pricings
													</p>
													<div className="dropdown-divider"></div>
													<p className="dropdown-item" >
														Clients
													</p>
													<p className="dropdown-item" >
														Our Agents
													</p>
												</div>
											)}
										</li>
										<li className="nav-item  active mx-xl-4 mx-lg-3 my-lg-0 my-3">
											<Link className="nav-link" to="/portfolio">Portfolio</Link>

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

				<div className="banner-w3ltext about-w3bnr">
					<div className="container">
						<h1 className="text-white text-center">
							<a href="index.html">Home</a> / {props.name}</h1>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Header