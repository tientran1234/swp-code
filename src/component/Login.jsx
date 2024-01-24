import React from 'react'

export default function () {
  return (
    <div>
        <div className="modal fade" id="exampleModalCenter1" tabIndex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header text-center">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<div className="login px-4 mx-auto mw-100">
						<h5 className="text-center mb-4">Login Now</h5>
						<form action="#" method="post">
							<div className="form-group">
								<label>Username</label>
								<input type="text" className="form-control" name="text" placeholder="" required=""/>
							</div>
							<div className="form-group">
								<label className="mb-2">Password</label>
								<input type="password" className="form-control" name="password" placeholder="" required=""/>
							</div>
							<button type="submit" className="btn btn-primary submit mb-4">Login</button>
							<p className="text-center pb-4">
								<a href="#">Forgot your password?</a>
							</p>
							<p className="text-center pb-4">
								Don't have an account?
								<a href="#" data-toggle="modal" data-target="#exampleModalCenter2">Create one now</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
