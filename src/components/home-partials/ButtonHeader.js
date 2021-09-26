import React from 'react';
import {Link} from 'react-router-dom';


const ButtonHeader = (props) => {
  return (
    <div>
    	<Link to="/rooms" className="btn btn-warning w-45 mr-0 mr-md-1 my-1 my-md-0  text-uppercase font-weight-bold ">Book now!</Link>
	  	
   	</div>
  )
}

export default ButtonHeader;