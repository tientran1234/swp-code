
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../data/apiHome';
import { handleApiLogin } from '../data/apiLoginRegister';
import { getListUser } from '../data/apiUser';
import useAuthStore from '../zustand/authStore';

export default function () {
	const navigate=useNavigate();	
	const [userName,setUserName]=useState();
	const [passWord,setPassword]=useState();
	const [error,setError]=useState();
	const [listUser,setListUser]=useState();

	useEffect(() => {
        const fetchData = async () => {
            try {
				const data = await getListUser();
				setListUser(data);
                console.log('Data:', listUser);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
	const userExistsAsync = async () => {
        return listUser && listUser.find(user => user.username === userName && user.password === passWord);
    };
	const user={
		username:userName,
		password:passWord,
	}
	const isLoginFormOpen = useAuthStore((state) => state.isLoginFormOpen);
	console.log(isLoginFormOpen);
	const toggleLoginForm = useAuthStore((state) => state.toggleLoginForm);
	const handleLogin = async (e) => {
		const userExists = listUser && listUser.some(user => user.username === userName && user.password === passWord);
		e.preventDefault();
		try {
			const data = await handleApiLogin(user);
			if (data) {
                localStorage.setItem("token", JSON.stringify(data.token));
                navigate("/dashboard");
            } else {
                setError("An error occurred during login");
            }
	
		} catch (error) {
			console.error('Error during login:', error);
			console.log(userName);
			console.log(passWord);
			console.log(listUser);
			const exists = await userExistsAsync();
			console.log(exists);

            if (!exists) {
                setError("Username or password is incorrect");
            }else{
				localStorage.setItem("name",exists.username)
				navigate("/");
				window.location.reload();
			}
		}
	};
	

  return (
	
    <div>
        <div className={`modal fade ${isLoginFormOpen ? 'show' : ''}`}  id="exampleModalCenter1" tabIndex="-1" role="dialog" >
		<div className="modal-dialog modal-dialog-centered" role="document">
			<div className="modal-content">
				<div className="modal-header text-center">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleLoginForm}>
						<span >&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<div className="login px-4 mx-auto mw-100">
						<h5 className="text-center mb-4">Login Now</h5>
						<form onSubmit={handleLogin} method="post">
							<div className="form-group">
								<label>Username</label>
								<input type="text" onChange={(e)=>setUserName(e.target.value)} className="form-control" name="text" placeholder="" required=""/>
							</div>
							<div className="form-group">
								<label className="mb-2">Password</label>
								<input type="password"  onChange={(e)=>setPassword(e.target.value)} className="form-control" name="password" placeholder="" required=""/>
							</div>
							<button className="btn btn-primary submit mb-4">Login</button>
							{/* <p className="text-center pb-4">
								<a href="#">Forgot your password?</a>
							</p>
							<p className="text-center pb-4">
								Don't have an account?
								<a href="#" data-toggle="modal" data-target="#exampleModalCenter2">Create one now</a>
							</p> */}
							<p className="text-center pb-4">
								
								<span data-toggle="modal" style={{color:"red"}} data-target="#exampleModalCenter2">{error?error:""}</span>
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
