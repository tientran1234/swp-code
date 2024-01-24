import React from 'react'
import { MdBedroomParent } from "react-icons/md";
import { MdBathroom } from "react-icons/md";
import { FaCar } from "react-icons/fa";

function StatsSection() {
  return (
    <div>
        <div className="middlesection-agile py-5" style={{margin:"100px"}}>
		<div className="container-fluid py-xl-5 py-lg-3">
			<div className="row">
				<div className="col-lg-6 left-build-wthree aboutright-agilewthree mt-0">
					<h4>Sell Your Best House</h4>
					<h6 className="mt-3 mb-5">Some words about our property</h6>
					<div className="row mb-xl-5 mb-4" style={{textAlign:"center"}}>
						<div className="col-4 w3layouts_stats_left w3_counter_grid" >
                        <MdBedroomParent style={{fontSize:"50px",color:"red"}} />
							<p className="counter">6</p>
							<p className="para-text-w3ls">Bedroom</p>
						</div>
						<div className="col-4 w3layouts_stats_left w3_counter_grid2">
                        <MdBathroom style={{fontSize:"50px",color:"red"}} />
							<p className="counter">4</p>
							<p className="para-text-w3ls">Bathroom</p>
						</div>
						<div className="col-4 w3layouts_stats_left w3_counter_grid1">
                        <FaCar style={{fontSize:"50px",color:"red"}} />
							<p className="counter">2</p>
							<p className="para-text-w3ls">Car Parking</p>
						</div>
					</div>
					<p>Cras sagittis mi sit amet malesuada mollis. Mauris porroinit consectetur cursus tortor vel interdum. Suspendisse interdum
						velit vel qu dapibus condimentum. Pellentesque consequat.</p>
				</div>
				<div className="col-lg-6 text-lg-left text-center mt-lg-0 mt-md-5 mt-4">
					<img src="../../src/assets/images/middle.jpg" alt="" className="img-fluid" />
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default StatsSection