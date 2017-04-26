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

		$('.carousel').carousel()
		autoplay()   
		function autoplay() {
		    $('.carousel').carousel('next');
		    setTimeout(autoplay, 2200);
		}
    	
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

		 			<div className='row'>

		 				<div className='col s12'>

			 				<div className="carousel">
							    <a className="carousel-item" href="#one!"><img src="images/A-Cut-Above.jpg" /></a>
							    <a className="carousel-item" href="#two!"><img src="images/reverse-a-cut-above.jpg" /></a>
							    <a className="carousel-item" href="#three!"><img src="images/Community-Arts-Center.jpg" /></a>
							    <a className="carousel-item" href="#four!"><img src="images/envato-homepage-image.jpg" /></a>
							    <a className="carousel-item" href="#five!"><img src="images/ironPongLogoWhiteV2.png" /></a>
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