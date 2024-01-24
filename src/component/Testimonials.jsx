import React from 'react'
import { CiStar } from "react-icons/ci";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
      	cssEase: "linear"
	  };
	return (
		<div>
			<div class="testimonials py-5" id="clients">
				<div class="container py-xl-5 py-lg-3">
					<div class="text-center mb-lg-5 mb-4">
						<h3 class="tittle mb-2 text-white">What Clients Say</h3>
						<p class="test-title-paara">A few word about our Clients</p>
					</div>
					<div class="w3_testimonials_grids">
						<section class="slider">
							<div class="flexslider">
								<ul class="slides">
									<Slider {...settings}>
									<li>
										<div class="w3_testimonials_grid">
											<p>"Nam Cumque nihil impedit quo minuslibero tempore, nihil impedit quo minus id quod possimus, Nam Cumque nihil impedit
												quo minuslibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit omnis voluptas".</p>
											<ul class="testi-w3ls-rate mt-4">
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
												<li class="mx-2">
												<CiStar style={{color:"yellow"}} />
												</li>
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
												<li class="mx-2">
												<CiStar style={{color:"yellow"}} />
												</li>
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
											</ul>
											<div class="row person-w3ls-testi mt-5">
												<div class="col-6 agile-left-test text-right">
													<img src="i../../src/assets/images/te1.jpg" alt=" " class="img-fluid rounded-circle" />
												</div>
												<div class="col-6 agile-right-test text-left mt-4">
													<h5>John Frank</h5>
													<p>Tempore Quo</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="w3_testimonials_grid">
											<p>"Nam Cumque nihil impedit quo minuslibero tempore, nihil impedit quo minus id quod possimus, Nam Cumque nihil impedit
												quo minuslibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit omnis voluptas".</p>
											<ul class="testi-w3ls-rate mt-4">
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
												<li class="mx-2">
												<CiStar style={{color:"yellow"}} />
												</li>
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
												<li class="mx-2">
												<CiStar style={{color:"yellow"}} />
												</li>
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
											</ul>
											<div class="row person-w3ls-testi mt-5">
												<div class="col-6 agile-left-test text-right">
													<img src="../../src/assets/images/te2.jpg" alt=" " class="img-fluid rounded-circle" />
												</div>
												<div class="col-6 agile-right-test text-left mt-4">
													<h5>John Frank</h5>
													<p>Tempore Quo</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="w3_testimonials_grid">
											<p>"Nam Cumque nihil impedit quo minuslibero tempore, nihil impedit quo minus id quod possimus, Nam Cumque nihil impedit
												quo minuslibero tempore, cum soluta nobis est eligendi optio cumque nihil impedit omnis voluptas".</p>
											<ul class="testi-w3ls-rate mt-4">
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
												<li class="mx-2">
												<CiStar style={{color:"yellow"}} />
												</li>
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
												<li class="mx-2">
												<CiStar style={{color:"yellow"}} />
												</li>
												<li>
												<CiStar style={{color:"yellow"}} />
												</li>
											</ul>
											<div class="row person-w3ls-testi mt-5">
												<div class="col-6 agile-left-test text-right">
													<img src="../../src/assets/images/te3.jpg" alt=" " class="img-fluid rounded-circle" />
												</div>
												<div class="col-6 agile-right-test text-left mt-4">
													<h5>John Frank</h5>
													<p>Tempore Quo</p>
												</div>
											</div>
										</div>
									</li>
									</Slider>
								</ul>
							</div>
						</section>

					</div>
				</div>
			</div>
		</div>
	);

}

export default Testimonials