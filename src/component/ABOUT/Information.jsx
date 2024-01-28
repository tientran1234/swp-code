import React from 'react'

function Information() {
  return (
    <div>
        <div className="features py-5">
		<div className="container py-xl-5 py-lg-3">
			<div className="text-center mb-lg-5 mb-4">
				<h3 className="tittle mb-2">About Us</h3>
				<p>Some words about our property</p>
			</div>
			<div className="row features-row">
				<div className="col-lg-5 features-right mt-3">
					<img src="../../../src/assets/images/about.jpg" className="img-fluid" alt="" />
				</div>
				<div className="col-lg-7 features-left mt-lg-0 mt-5">
					<div className="row features-grid">
						<div className="col-3 features-grid-left text-right">
							<i className="fab fa-blackberry"></i>
						</div>
						<div className="col-9 features-grid-right">
							<h4 className="mb-2">Itaque earum rerum </h4>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum </p>
						</div>
					</div>
					<div className="row features-grid features-grid-mdl my-4">
						<div className="col-3 features-grid-left text-right">
							<i className="fab fa-d-and-d"></i>
						</div>
						<div className="col-9 features-grid-right">
							<h4 className="mb-2">Sapiente delectus</h4>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum </p>
						</div>
					</div>
					<div className="row features-grid">
						<div className="col-3 features-grid-left text-right">
							<i className="fab fa-mixcloud"></i>
						</div>
						<div className="col-9 features-grid-right">
							<h4 className="mb-2">Itaque earum rerum </h4>
							<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Information