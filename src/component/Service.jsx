import React from 'react'
import { FaKey } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { MdOutlineSecurity } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { AiFillCrown } from "react-icons/ai";





function Service() {
  return (
    <div>
        <div className="what-w3ls py-5" id="services">
		<div className="container py-xl-5 py-lg-3">
			<div className="text-center mb-md-5 mb-4">
				<h3 className="tittle mb-sm-2">Our Services</h3>
				<p>Some words about our property services</p>
			</div>
			<div className="what-grids">
				<div className="row">
					<div className="col-md-6 what-grid1">
						<div className="row what-top">
							<div className="col-2 what-left">
                            <FaKey style={{fontSize:"30px",color:"red"}} />
							</div>
							<div className="col-10 what-right">
								<h4>Renting Service</h4>
								<p className="mt-2">Consectetur adipisicing elit. Ab aut dignissimos ea est, laboriosam consectetur adipisicing elit.</p>
							</div>
						</div>
						<div className="row what-top my-md-5 my-4">
							<div className="col-2 what-left">
                            <BiSolidDollarCircle style={{fontSize:"30px",color:"red"}} />
							</div>
							<div className="col-10 what-right">
								<h4>Saling Service</h4>
								<p className="mt-2">Consectetur adipisicing elit. Ab aut dignissimos ea est, laboriosam consectetur adipisicing elit.</p>
							</div>
						</div>
						<div className="row what-top">
							<div className="col-2 what-left">
                            <MdOutlineSecurity style={{fontSize:"30px",color:"red"}} />
							</div>
							<div className="col-10 what-right">
								<h4>Non Stop Security</h4>
								<p className="mt-2">Consectetur adipisicing elit. Ab aut dignissimos ea est, laboriosam consectetur adipisicing elit.</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 what-grid1 my-md-0 my-4">
						<div className="row what-top">
							<div className="col-2 what-left">
                            <MdManageAccounts style={{fontSize:"30px",color:"red"}}/>
							</div>
							<div className="col-10 what-right">
								<h4>Property Management</h4>
								<p className="mt-2">Consectetur adipisicing elit. Ab aut dignissimos ea est, laboriosam consectetur adipisicing elit.</p>
							</div>
						</div>
						<div className="row what-top my-md-5 my-4">
							<div className="col-2 what-left">
                            <FaClipboardList style={{fontSize:"30px",color:"red"}}/>
							</div>
							<div className="col-10 what-right">
								<h4>Property Listing</h4>
								<p className="mt-2">Consectetur adipisicing elit. Ab aut dignissimos ea est, laboriosam consectetur adipisicing elit.</p>
							</div>
						</div>
						<div className="row what-top">
							<div className="col-2 what-left">
                            <AiFillCrown  style={{fontSize:"30px",color:"red"}} />
							</div>
							<div className="col-10 what-right">
								<h4>Luxurious Fittings</h4>
								<p className="mt-2">Consectetur adipisicing elit. Ab aut dignissimos ea est, laboriosam consectetur adipisicing elit.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Service