import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';

const Login = () => {

	const loginForm = useFormik({
		initialValues: {
			email: '',
			password: ''
		},

		onSubmit: async(values) => {
			console.log(values);
			const res = await fetch('http://localhost:5000/user/authenticate',{
				method:'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body: JSON.stringify(values)

			});
			if(res.status===200){
				Swal.fire({
					icon:'success',
					title:'Success',
					text:'LOgin in sucessfull'
				})

			}else if(res.status===401){
				Swal.fire({
					icon:'error',
					title:'Error',
					text:'invalid credentials'

				})
			}
		}
	})

	return (
		<section className="vh-100 " style={{ backgroundImage:'url("https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1536/https://www.iimtindia.net/Blog/wp-content/uploads/2021/05/Blogging-1536x864.jpg")' }}>
		<div className="container py-5 h-100">
		  <div className="row d-flex justify-content-center align-items-center h-100">
			<div className="col col-xl-10">
			  <div className="card mask-custom " style={{ borderRadius: "1rem" }}>
				<div className="row g-0">
				  
				  <div className="col-md-6 col-lg-7 d-flex align-items-center ">
					<div className="card-body p-4 p-lg-5 text-black">
					  <form onSubmit={loginForm.handleSubmit}>
						<div className="d-flex align-items-center mb-3 pb-1">
						  <i
							className="fas fa-cubes fa-2x me-3"
							style={{ color: "#ff6219" }}
						  />
						  <span className="h1 fw-bold mb-0">Magic blogs</span>
						</div>
						<h5
						  className="fw-normal mb-3 pb-3"
						  style={{ letterSpacing: 1 }}
						>
						  Sign into your account
						</h5>
						<div className="mb-4">
						<label className="form-label text-black" htmlFor="form2Example17">
							Email address
						  </label>
						  <input
							type="email"
							id="email"
							onChange={loginForm.handleChange}
							value={loginForm.values.email}
							className="form-control form-control-lg"
						  />
						  
						</div>
						<div className="mb-4">
						<label className="form-label text-black" htmlFor="form2Example27">
							Password
						  </label>
						  <input
							type="password"
							id="password"
							onChange={loginForm.handleChange}
							value={loginForm.values.password}
							className="form-control form-control-lg"
						  />
						 
						</div>
						<div className="pt-1 mb-4">
						  <button
							className="btn btn-dark btn-lg btn-block"
							type="submit"
						  >
							Login
						  </button>
						</div>
						<a className="small text-black" href="#!">
						  Forgot password?
						</a>
						<p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
						  Don't have an account?{" "}
						  <a href="#!" style={{ color: "#393f81" }}>
							Register here
						  </a>
						</p>
						<a href="#!" className="small text-black ">
						  Terms of use.
						</a>
						<a href="#!" className="small tex-black">
						  Privacy policy
						</a>
					  </form>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	  
	)
}

export default Login;