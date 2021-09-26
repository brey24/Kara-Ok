import React from 'react';

const Quotes = (props) => {
  return (
    <div className="container" id="quotes-info">
    	<div className="row">
    		{/*<div className="col-12">
    			<h1 className="text-center font-weight-bold font-italic">"Some days there won't be a song in your heart. Sing anyway."</h1>
    			<p className="text-right font-weight-bold font-italic"> -Emory Austin</p>
    		</div>*/}
    		<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    			<div className="carousel-inner">
    				<div className="carousel-item active">
    					<h1 className="text-center font-weight-bold font-italic">"Some days there won't be a song in your heart. Sing anyway."</h1>
    					<p className="text-right font-weight-bold font-italic"> -Emory Austin</p>
    				</div>
    				<div className="carousel-item">
    					<h1 className="text-center font-weight-bold font-italic">
    						"There's no half-singing in the shower, you're either a rock star or an opera diva."
    					</h1>
    					<p className="text-right font-weight-bold font-italic"> -Harry Belafonte</p>
    				</div>
    				<div className="carousel-item">
    					<h1 className="text-center font-weight-bold font-italic">
    						"Singing allowed me to express myself in ways that I wouldn't be able to do otherwise."
    					</h1>
    					<p className="text-right font-weight-bold font-italic"> -Josh Turner</p>
    				</div>
    			</div>
    			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    				<span className="sr-only">Previous</span>
    			</a>
    			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    				<span className="carousel-control-next-icon" aria-hidden="true"></span>
    				<span className="sr-only">Next</span>
    			</a>
    		</div>
    	</div>
    </div>
  )
}

export default Quotes;