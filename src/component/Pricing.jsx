import React from 'react'

function Pricing() {
  return (
    <div>
        <section className="pricing py-5" id="pricings">
		<div className="container py-xl-5 py-lg-3">
			<div className="text-center mb-lg-5 mb-4">
				<h3 className="tittle mb-2 text-white">Our Pricings</h3>
				<p className="test-title-paara">A few word about our Planes</p>
			</div>
			<div className="inner-sec">
				<div className="card-deck text-center row mt-5">
					<div className="price-info-grid col-lg-4">
						<div className="price-inner">
							<div className="price-header">
								<h4>Starter</h4>
							</div>
							<div className="price-body">
								<h5 className="pricing-title">
									<span className="dolor">$</span> 789.00
									<label>Per Month</label>

								</h5>

								<ul className="list-unstyled mt-3 mb-4">
									<li className="py-2 border-bottom">Advertising</li>
									<li className="py-2 border-bottom">Branding Services</li>
									<li className="py-2 border-bottom">Online Marketing</li>
									<li className="py-2 border-bottom">Creative Marketing</li>
									<li className="py-2">-</li>
								</ul>
								<a href="#" className="btn btn-block py-2" data-toggle="modal" data-target="#exampleModalCenter2">
									<i className="far fa-user"></i> Get Started</a>
							</div>
						</div>
					</div>
					<div className="price-info-grid col-lg-4 my-lg-0 my-3">
						<div className="price-inner">
							<div className="price-header">
								<h4>Professional</h4>
							</div>
							<div className="price-body">
								<h5 className="pricing-title">
									<span className="dolor">$</span>1089.00
									<label>Per Month</label>
								</h5>
								<ul className="list-unstyled mt-3 mb-4">
									<li className="py-2 border-bottom">Advertising</li>
									<li className="py-2 border-bottom">Branding Services</li>
									<li className="py-2 border-bottom">Online Marketing</li>
									<li className="py-2 border-bottom">Creative Marketing</li>
									<li className="py-2">-</li>
								</ul>
								<a href="#" className="btn btn-block btn-outline-primary py-2" data-toggle="modal" data-target="#exampleModalCenter2">
									<i className="far fa-user"></i> Get Started</a>
							</div>
						</div>
					</div>
					<div className="price-info-grid col-lg-4">
						<div className="price-inner">
							<div className="price-header">
								<h4>Enterprise</h4>
							</div>
							<div className="price-body">
								<h5 className="pricing-title">
									<span className="dolor">$</span>2189.00
									<label>Per Month</label>

								</h5>
								<ul className="list-unstyled mt-3 mb-4">
									<li className="py-2 border-bottom">Advertising</li>
									<li className="py-2 border-bottom">Branding Services</li>
									<li className="py-2 border-bottom">Online Marketing</li>
									<li className="py-2 border-bottom">Creative Marketing</li>
									<li className="py-2">-</li>
								</ul>
								<a href="#" className="btn btn-block btn-outline-primary py-2" data-toggle="modal" data-target="#exampleModalCenter2">
									<i className="far fa-user"></i> Get Started</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Pricing