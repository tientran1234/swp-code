import React from 'react'
import { CiStar } from "react-icons/ci";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import { getUser } from '../data/apiHome';

function Testimonials() {
	const [user, setUser] = useState();
	useEffect(() => {
		(async () => {
			try {
				const data = await getUser().then((data) => { setUser(data) })
			} catch (e) {
				console.log(e);
			}
		})()
	}, []);
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
	console.log(user);
	return (

		<div>
			{user && (<div className="testimonials py-5" id="clients">
				<div className="container py-xl-5 py-lg-3">
					<div className="text-center mb-lg-5 mb-4">
						<h3 className="tittle mb-2 text-white">What Clients Say</h3>
						<p className="test-title-paara">A few word about our Clients</p>
					</div>
					<div className="w3_testimonials_grids">
						<section className="slider">
							<div className="flexslider">
								<ul className="slides">
									<Slider {...settings}>
										{user.map((user) => (
											<li key={user.id}>
												<div className="w3_testimonials_grid">
													<p>{user.comment}</p>
													<ul className="testi-w3ls-rate mt-4">
														<li>
															<CiStar style={{ color: "yellow" }} />
														</li>
														<li className="mx-2">
															<CiStar style={{ color: "yellow" }} />
														</li>
														<li>
															<CiStar style={{ color: "yellow" }} />
														</li>
														<li className="mx-2">
															<CiStar style={{ color: "yellow" }} />
														</li>
														<li>
															<CiStar style={{ color: "yellow" }} />
														</li>
													</ul>
													<div className="row person-w3ls-testi mt-5">
														<div className="col-6 agile-left-test text-right">
															<img src={user.img} alt=" " className="img-fluid rounded-circle" />
														</div>
														<div className="col-6 agile-right-test text-left mt-4">
															<h5>{user.userName}</h5>
															<p>Tempore Quo</p>
														</div>
													</div>
												</div>
											</li>
										))}
									</Slider>
								</ul>
							</div>
						</section>

					</div>
				</div>
			</div>)}
		</div>
	);

}

export default Testimonials