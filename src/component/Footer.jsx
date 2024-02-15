import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";






function Footer() {
  return (
    <div>
        <div className="footer-top py-5 text-center">
		<div className="container py-xl-5 py-lg-3">
			<h2 className="text-white mb-4">Select Your Dream Property</h2>
			<h5 className="text-white mb-sm-5 mb-4 pb-sm-5 pb-4">Contact Us</h5>
			<FaLocationDot style={{fontSize:"100px",color:"red"}} />
		</div>
	</div>

	<div className="footer py-5 text-center">
		<div className="container py-xl-5 py-lg-3">
			<div className="address row mb-4">
				<div className="col-lg-4 address-grid">
					<div className="row address-info">
						<div className="col-md-3 address-left text-center">
                        <MdEmail style={{fontSize:"50px",color:"red"}}/>
						</div>
						<div className="col-md-9 address-right text-left">
							<h6 className="ad-info text-uppercase mb-2">Email</h6>
							<p>
								<a href="mailto:example@email.com"> mail 1@example.com</a>
							</p>
							<p>
								<a href="mailto:example@email.com"> mail 2@example.com</a>
							</p>
						</div>

					</div>
				</div>
				<div className="col-lg-4 address-grid my-lg-0 my-4">
					<div className="row address-info">
						<div className="col-md-3 address-left text-center">
                        <FaPhone style={{fontSize:"50px",color:"red"}} />
						</div>
						<div className="col-md-9 address-right text-left">
							<h6 className="ad-info text-uppercase mb-2">call us</h6>
							<p>+1 234 567 8901</p>
							<p>+1 567 567 9876</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 address-grid">
					<div className="row address-info">
						<div className="col-md-3 address-left text-center">
                        <FaAddressBook style={{fontSize:"50px",color:"red"}} />
						</div>
						<div className="col-md-9 address-right text-left">
							<h6 className="ad-info text-uppercase mb-2">Address</h6>
							<p> 786 Main Road, hollies</p>
							<p> California, USA</p>
						</div>
					</div>
				</div>
			</div>
			
			<div className="w3social-icons-footer text-center pt-sm-5 pt-3">
				<ul>
					<li>
						<a href="#" className="rounded-circle">
                        <FaFacebook style={{transform:"translateY(2px)"}} />
						</a>
					</li>
					<li className="px-2">
						<a href="#" className="rounded-circle">
                        <FaGoogle style={{transform:"translateY(2px)"}} />
						</a>
					</li>
					<li>
						<a href="#" className="rounded-circle">
                        <FaTwitter style={{transform:"translateY(2px)"}} />
						</a>
					</li>
					<li className="px-2">
						<a href="#" className="rounded-circle">
                        <FaInstagram style={{transform:"translateY(2px)"}} />
						</a>
					</li>
					
				</ul>
			</div>
		
		</div>
	</div>
    </div>
  )
}

export default Footer