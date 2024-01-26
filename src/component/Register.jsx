import React from 'react'
import useRegister from '../zustand/authRegister'

function Register() {
    const isRegisterFormOpen=useRegister((state)=>state.isRegisterFormOpen);
    const toggleRegisterForm=useRegister((state)=>state.toggleRegisterForm)
  return (
    <div>
        <div className={`modal fade ${isRegisterFormOpen ? 'show' : ''}`} id="exampleModalCenter2" tabindex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header text-center">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleRegisterForm}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<div className="login px-4 mx-auto mw-100">
						<h5 className="text-center mb-4">Register Now</h5>
						<form action="#" method="post">
							<div className="form-group">
								<label>First Name</label>
								<input type="text" className="form-control" name="text" placeholder="" required=""/>
							</div>
							<div className="form-group">
								<label>Last Name</label>
								<input type="text" className="form-control" name="text" placeholder="" required=""/>
							</div>
							<div className="form-group">
								<label className="mb-2">Password</label>
								<input type="password" className="form-control" name="password" id="password1" placeholder="" required=""/>
							</div>
							<div className="form-group">
								<label>Confirm Password</label>
								<input type="password" className="form-control" name="password" id="password2" placeholder="" required=""/>
							</div>
							<button type="submit" className="btn btn-primary submit mb-4">Register</button>
							<p className="text-center pb-4">
								<a href="#">By clicking Register, I agree to your terms</a>
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

export default Register