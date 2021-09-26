import React, {useContext, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import swal from 'sweetalert';
import {AppContext} from './../AppProvider'



const Login = (props) => {

	const [authUser, setAuthUser] = useContext(AppContext)

	const [credentials, setCredentials] = useState({
		email: "",
		password: ""
	})

	const [isSuccess, setIsSuccess] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	if(isSuccess) {
		return <Redirect to="/" />
	}



	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name] : e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		setIsLoading(true)


		fetch("https://karaokdb.herokuapp.com/users/login", {
			method: "post",
			body: JSON.stringify(credentials),
			headers: {
				"Content-Type" : "application/json"
			}

		})
		.then( response => {
            console.log(response.status);
            if(response.status !== 200){ 
            	swal({
            		title: "Login Failed!",
            		text: "Please check your credentials",
            		icon: "error",
            		button: "Ok",
            		timer: 3000
            	});
            	// setAlert({
            	// 	hasAlert: true,
            	// 	color: "danger",
            	// 	message: "Check credentials"
            	// })
            } 

            return response.json()
        })
		.then( data => {
			if(data.token){
				localStorage["appState"] = data.token
				setAuthUser({
					isAuth: true,
					fullname: data.fullname,
					email: data.email,
					isAdmin: data.isAdmin
				})
				setIsSuccess(true)
			
			} else {
				setIsLoading(false)
			}
			console.log(data)
		});
	}

	if(authUser.isAuth){
		return <Redirect to="/" />
	}

  return (
	<div>
	  	<div className="container-fluid" id="login-page">
	  		<div className="row">
	  			<div className="col-12 col-md-6 my-5 my-md-0 d-flex justify-content-center align-items-center">
	  				<div className="card shadow bg-white w-75">
	  					<div className="card-header font-weight-bold">
	  						<svg width="2rem" height="2rem" viewBox="0 0 16 16" className="bi bi-people-fill mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	  							<path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
	  						</svg>
	  						Login
	  					</div>
	  					<div className="card-body">
		  					<form onSubmit={handleSubmit}>
			  					
		  						<div className="form-group">
		  								<label htmlFor="email" className="font-weight-bold">Email:</label>
		  								<div className="input-group-prepend">
		  									<div className="input-group-text">
		  										<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		  											<path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
		  										</svg>
		  									</div>
		  									<input 
		  										type="email" 
		  										className="form-control" 
		  										id="email" 
		  										placeholder="Email" 
		  										name="email" 
		  										onChange={handleChange}
		  									/>
		  								</div>
		  								
		  						</div>
		  						<div className="form-group">
		  							<label htmlFor="password" className="font-weight-bold">Password:</label>
		  							<div className="input-group-prepend">
		  								<div className="input-group-text">
		  									<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		  										<path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
		  										<path fillRule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
		  									</svg>
		  								</div>
		  								<input 
		  									type="password" 
		  									className="form-control" 
		  									id="password" 
		  									placeholder="Password" 
		  									name="password" 
		  									onChange={handleChange}
		  									/>
		  							</div>
		  						</div>
		  						<small className="d-block">Don't have an account? <Link to="/register">Sign up.</Link></small>
		  						<button 
		  							className="btn btn-primary mt-2"
		  							disabled={isLoading}
		  						>
		  						{
		  							isLoading ?
		  							"Login..." :
		  							"Login"
		  						}
		  						</button>
	  						</form>
		  				</div>
	  				</div>
	  			</div>
	  			<div className="col-12 col-md-6 d-none d-md-block" id="login-image">
	  				
	  			</div>
	  		</div>
	  	</div>
	</div>
  )
}

export default Login;