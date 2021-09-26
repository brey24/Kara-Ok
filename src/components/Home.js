import React from 'react';
import ButtonHeader from './home-partials/ButtonHeader';
import Featured from './home-partials/Featured';
import Quotes from './home-partials/Quotes';
import Footer from './home-partials/Footer';
import Room from './Room';
import About from './home-partials/About';


const Home = (props) => {


  return (
  		<div>
		  	<div className="container-fluid" id="header">
			  	<div className="container" >
			  		<div className="row">
			  			<div className="col-10 col-md-6">
			  				<h1 className="text-white text-uppercase">Kara-Ok</h1>
			  				<p className="text-white">
			  					Sad? Stressed? Happy? Sing your heart out! Book now and everything's gonna be ok!
			  				</p>
			  				<hr/>
			  				<ButtonHeader />
			  			</div>
			  		</div>
			  	</div>
		  	</div>
		  	<div className="container-fluid d-flex justify-content-center align-items-center">
			  		
			  	<About />
			  		
			</div>

			<div className="container-fluid d-flex justify-content-center align-items-center" id="quotes">
				<Quotes />
			</div>

				{/*<div className="container-fluid py-5" id="featured">
			  		
			  	

			  	< Featured />
			  		
			</div>*/}
			<div className="container-fluid d-flex justify-content-center align-items-center text-center py-5" id="footer">
				<Footer />
			</div>
		</div>

  )
}

export default Home;