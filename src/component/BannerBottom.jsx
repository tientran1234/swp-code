import React from 'react'


export default function BannerBottom() {
  return (
    <div>
        <div className="serach-w3agile py-5">
		<div className="container py-xl-4 py-lg-3">
			<h3 className="title-w3ls mb-md-5 mb-4 font-weight-bold text-center">Find Your Property</h3>
			<div className="place-grids">
				<form action="#" method="post">
					<div className="row">
						<div className="col-sm-3 col-6 place-grid">
							<h5>Select City</h5>
							<select className="sel" required="">
								<option value="">City 1</option>
								<option value="">City 2</option>
								<option value="">City 3</option>
								<option value="">City 4</option>
								<option value="">City 5</option>
								<option value="">City 6</option>
							</select>
						</div>
						<div className="col-sm-3 col-6 place-grid">
							<h5>Property type</h5>
							<select className="sel" required="">
								<option value="">Select</option>
								<option value="">Apartment</option>
								<option value="">Independent house</option>
								<option value="">Villa</option>
								<option value="">Pent House</option>
							</select>
						</div>
						<div className="col-sm-3 col-6 place-grid mt-sm-0 mt-3">
							<h5>Type</h5>
							<select className="sel" required="">
								<option value="">BHK</option>
								<option value="">1BHK</option>
								<option value="">2BHK</option>
								<option value="">3BHK</option>
								<option value="">4BHK</option>
								<option value="">5BHK</option>
							</select>
						</div>
						<div className="col-sm-3 col-6 place-grid">
							<input type="submit" value="Search"/>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
    </div>
  )
}
