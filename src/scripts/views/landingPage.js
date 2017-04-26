import React from 'react'
import STORE from '../store.js'
import ACTIONS from '../actions.js'
import User from '../models/userModel.js'
import Navbar from './components/navBar.js'


const LandingPage = React.createClass({

	componentWillMount: function(){

		//ACTIONS.refresh_needed_data()

		STORE.on('dataUpdated', () => {

			this.setState(STORE.data)

		})

	},

	getInitialState: function() {


		return STORE.data

	},

	componentDidMount: function() {

		$('.carousel-graphics').carousel()
		autoplay()   
		function autoplay() {
		    $('.carousel-graphics').carousel('next');
		    setTimeout(autoplay, 2200);
		}

		$('.carousel-logos').carousel()
    	
	},

 	render: function(){

 		if(true){
			
			return (

		 		<div className='grey darken-4'>

		 			<div className='row'>

		 				<div className='col s12 m6 offset-m3'>

		 					<h2 className="blue-grey darken-3 center-align white-text">JAMES SEWELL</h2>
		 					<h5 className="center-align white-text flow-text">Front-end Engineer - Houston, Tx</h5>

		 				</div>

		 			</div>

		 			<div className='row graphics-row container'>

		 				<div className='col s12 blue-grey darken-4'>

		 					<div className="card blue-grey darken-3">

		 						<h3 className="card-content flow-text white-text center-align">Graphic Design</h3>

		 						<div className="card-content blue-grey darken-3 col s12 m3">

			 						<div className="logos">

			 							<h4 className="white-text flow-text center-align"> Tools </h4>
			 							<div className="logo1 col s4">
			 								<img className="img-tools responsive-image" src="images/software_icons/ps_icon.png" />
			 							</div>
			 							<div className="logo1 col s4">
			 								<img className="img-tools responsive-image" src="images/software_icons/ai_icon.png" />
			 							</div>
			 							<div className="logo1 col s4">
			 								<img className="img-tools responsive-image" src="images/software_icons/blender_icon.png" />
			 							</div>
										
									</div>

			 						<span className="card-content"><p className="white-text flow-text">I produce digital assets using Photoshop CC, Illustrator CC, and Blender3D</p></span>

			 					</div>

			 					<div className="carousel carousel-graphics col s12 m9">

								    <a className="carousel-item carousel-item-graphics" href="#one!"><img src="images/A-Cut-Above.jpg" /></a>
								    <a className="carousel-item carousel-item-graphics" href="#two!"><img src="images/reverse-a-cut-above.jpg" /></a>
								    <a className="carousel-item carousel-item-graphics" href="#three!"><img src="images/Community-Arts-Center.jpg" /></a>
								    <a className="carousel-item carousel-item-graphics" href="#four!"><img src="images/envato-homepage-image.jpg" /></a>
								    <a className="carousel-item carousel-item-graphics" href="#five!"><img src="images/ironPongLogoWhiteV2.png" /></a>
								    <a className="carousel-item carousel-item-graphics" href="#five!"><img src="images/Mockup Tent - Copy/Tent3.png" /></a>

								</div>

							</div>

						</div>

		 			</div>

		 			<div className='row'>

		 				<div className='col s12 m6'>
		 		
		 					<div className='card blue-grey darken-4'>

				 				<div className="card-content white-text flow-text">

				 					<h3 className='blue-grey darken-3 card-title'><i className="medium material-icons">insert_chart</i>JAMES</h3>
				 				
				 					<p>lorem ipsum dom ado aid oaa oado adoia oadi adfado dsfd fdfso adfdso ad dooa addo a adddo adooa ado adoo adoo adaod</p>

				 					<a className="waves-effect waves-light btn deep-orange"><i className="material-icons left">cloud</i>button</a>

				 				</div>

		 					</div>

		 				</div>

		 				<div className='col s12 m6'>
		 		
		 					<div className='card blue-grey darken-4'>

				 				<div className="card-content white-text flow-text">

				 					<h3 className='blue-grey darken-3 card-title'><i className="medium material-icons">insert_chart</i>JAMES</h3>
				 				
				 					<p>lorem ipsum dom ado aid oaa oado adoia oadi adfado dsfd fdfso adfdso ad dooa addo a adddo adooa ado adoo adoo adaod</p>

				 					<a className="waves-effect waves-light btn deep-orange"><i className="material-icons left">cloud</i>button</a>

				 				</div>

		 					</div>

		 				</div>

		 			</div>

		 		</div>

			)

 		}

		else{

			return (

				<div className=''>
		
				</div>

			)

		}

 		return(

 			<div>
 				
 			</div>

 		)	
 		
 	}

})

export default LandingPage