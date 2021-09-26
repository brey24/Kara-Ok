import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import RoomBook from './room-partials/RoomBook';
import RoomAdminControl from './room-partials/RoomAdminControl';
import Loading from './../images/loading.gif';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Moment from 'react-moment';

const Booking = (props) => {

  

	  const { id } = useParams();

    const [room, setRoom] = useState({
        name: "",
        image: "",
        price: "",
        description: ""
    });

   
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
        fetch(`https://karaokdb.herokuapp.com/rooms/${id}`)
        .then(response => response.json())
        .then(data => {
            setRoom(data)
            setIsLoading(false)
        });
    },[]);




  return (
  <div>
    
  	<div className="container my-5" id="booking">
  		<div className="card shadow-lg mb-3">
  			<div className="row no-gutters">
  				<div className="col-md-4">
  					<img src={`https://karaokdb.herokuapp.com/${room.image}`} alt="" className="card-img-top"  />
  				</div>
  				<div className="col-md-8">

  				{
  					!isLoading ?
	  					<div className="card-body">
	  						
	  							<h1 className="card-title">{room.name}</h1>
	  						
	  						<p className="card-text text-dark">
	  							Description: {room.description}
	  						</p>
	  						<p className="card-text text-dark">Price: &#8369; {room.price}
	  						</p>
	  						<div className="row">
	  							<div className="col col-sm-6 col-md-6">
                 
                    
	  								<RoomBook room={room} />
	  							</div>
                  
	  						</div>
	  					</div>
	  				: 
		  				<div className="container" id="booking-loading">
							<div className="row">
								<div className="col-12" id="loading">
									<img src={Loading} alt="" />
									
								</div>
								
							</div>
						</div>
  				}
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
  )
}

export default Booking;