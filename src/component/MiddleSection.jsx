import React from 'react'
import { FaCheck } from "react-icons/fa";
function MiddleSection() {
  return (
    <div>
        <div className="middle-w3l">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 col-md-4 button">

				</div>
				<div className="col-lg-6 col-md-8 left-build-wthree py-5 px-sm-5 px-4">
					<div className="py-xl-5 py-lg-3 px-xl-4">
						<h4>A Beautiful Beach House</h4>
						<h6 className="mt-3 mb-xl-5 mb-4">Excepteur sint occaecat</h6>
						<p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<ul className="list-beach mt-lg-5 mt-4">
							<li>
								<div className="row">
									<div className="col-1 text-center">
                                    <FaCheck style={{color:"black"}} />
									</div>
									<div className="col-10">
										<p>Totam rem aperiamet quasi architecto beatae vitae dicta sunt explicabo beatae vitae dicta.</p>
									</div>
								</div>
							</li>
							<li className="my-3">
								<div className="row">
									<div className="col-1 text-center">
                                    <FaCheck style={{color:"black"}} />
									</div>
									<div className="col-10">
										<p>A rchitecto beatae Totam rem aperiamet quasi architecto beatae vitae dicta sunt explicabo.</p>
									</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div className="col-1 text-center">
                                    <FaCheck style={{color:"black"}} />
									</div>
									<div className="col-10">
										<p>Dicta sunt explicabo Totam rem aperiamet quasi architecto beatae vitae dicta sunt explicabo.</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default MiddleSection