import axios from 'axios';
import React,{useState} from 'react'
import Swal from 'sweetalert2';
import useAuthStore from '../../zustand/authStore';

function Form() {
	const [data,setData]=useState();
	const toggleLoginForm = useAuthStore((state) => state.toggleLoginForm);
	const username=localStorage.getItem("name");
	const formData={
		id:"",
		userName:username,
		comment:data,
		img:"../../src/assets/images/te1.jpg"
	}
	console.log(formData);
	const handlePost=async(e)=>{
		e.preventDefault();
		if(username){
			const data=await axios.post("https://65c072d325a83926ab96506a.mockapi.io/api/home/user",formData).then((data)=>{
				if(data.status===400){
					Swal.fire({
						title: "Send failed!",
						text: "You clicked the button!",
						icon: "error"
					  });
				}else{
					Swal.fire({
						title: "Send Successfully!",
						text: "You clicked the button!",
						icon: "success"
					  });
				}
			})
			
		}else{
			toggleLoginForm();
		}
	}

  return (
    <div>
        <section class="wthree-row w3-contact py-5">
		<div class="container py-xl-5 py-lg-3">
			<div class="text-center mb-lg-5 mb-4">
				<h3 class="tittle mb-2">Contact Us</h3>
				<p>Quick Send Us Message</p>
			</div>
			<div class="row contact-form py-3">
			
				<div class="col-lg-6 map text-center">
					<h4 >Our world wide range of Branches </h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125416.69847789708!2d106.66639335362389!3d10.790480605200338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2sFPT%20University%20HCMC!5e0!3m2!1sen!2s!4v1706329210941!5m2!1sen!2s"  height="400" style={{border:0,width:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					{/* <img src="images/map.jpg" alt="" class="img-fluid" /> */}
				</div>
			
				<div class="col-lg-6 wthree-form-left mt-lg-0 mt-5">
					<div class="contact-top1">
						<form onSubmit={handlePost} class="f-color">
							<div class="form-group">
								<label>Your Message</label>
								<textarea onChange={(e)=>setData(e.target.value)} class="contact-formw3ls form-control" rows="5" id="contactcomment" required></textarea>
							</div>
							<button  class="btn submit contact-submit">Submit</button>
						</form>
					</div>
				</div>
			
			</div>
		</div>
	</section>
    </div>
  )
}

export default Form