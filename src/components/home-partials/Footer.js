import React from 'react';
import {Link} from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className="container-fluid" id="footers">
    	<div className="row">
    		<div className="container d-block d-md-flex">
	    		<div className="col-12 col-md-4">
	    			<div className="container text-left text-md-center">
		    			<h1 className="text-uppercase mb-3 text-left">Get in touch</h1>
		    			<h5 className="text-secondary mb-3 text-left">For hassle free reservations:</h5>
		    			<p className="text-secondary mb-3 text-left">email us at: karaok@gmail.com</p>
		    			<p className="text-secondary mb-3 text-left">(+639)504912182</p>
		    		</div>
	    		</div>
	    		<div className="col-12 col-md-4">
	    			<div className="container text-left text-md-center">
	    				<h1 className="text-uppercase mb-3 text-left text-md-center">Quick Links</h1>

	    				<ul>
	    					<li><Link to="/home" className="text-decoration-none  text-uppercase text-secondary text-center">Home</Link></li>
	    					<li><Link to="/rooms" className="text-decoration-none text-uppercase text-secondary text-center">Room</Link></li>
	    					<li><Link to="/login" className="text-decoration-none text-uppercase text-secondary text-center">Login</Link></li>
	    					<li><Link to="/register" className="text-decoration-none text-uppercase text-secondary text-center">Register</Link></li>
	    				</ul>
	    				
	    			</div>
	    		</div>
	    		<div className="col-12 col-md-4">
	    			<div className="container text-left text-md-center">
	    				<h1 className="text-uppercase mb-3 text-left text-md-center ">Social Media</h1>
	    				<i className="fab fa-facebook text-warning text-left mr-3"></i>
	    				<i className="fab fa-twitter text-warning text-left mr-3"></i>
	    				<i className="fab fa-instagram text-warning text-left mr-3"></i>
	    			</div>
	    		</div>
	    	</div>
    	</div>
    	<div className="text-center">
    		<h6 className="mt-5">Copyright 2020 All rights reserved | by <span className="text-warning text-uppercase">Kara-Ok</span> </h6>
    	</div>
    </div>
  )
}

export default Footer;