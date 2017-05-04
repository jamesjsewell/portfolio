import React from 'react'
import STORE from '../store.js'
import ACTIONS from '../actions.js'
import User from '../models/userModel.js'
import Navbar from './components/navBar.js'
import Footer from './components/footer.js'

var toDoDescription = false

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

    	$('.materialboxed').materialbox({
		dismissible: false
		})

    	$('.modal').modal()

    	$('.collapsible-toDo').collapsible({
    	
    	onOpen:  function(el) { STORE._set({toDoDescription: true  }) },
    	onClose: function(el) { STORE._set({toDoDescription: false }) } 
    	
		})

		$('.collapsible-score').collapsible({
    	
    	onOpen:  function(el) { STORE._set({scoreDescription: true  }) },
    	onClose: function(el) { STORE._set({scoreDescription: false }) } 
    	
		})

		$('.collapsible-weather').collapsible({
    	
    	onOpen:  function(el) { STORE._set({weatherDescription: true  }) },
    	onClose: function(el) { STORE._set({weatherDescription: false }) } 
    	
		})

	},

 	render: function(){

 		if(true){
			
			return (

				<div className="grey darken-4">
				<div className='row'>

	 				<div className='col s12 m6 offset-m3'>

	 					<h2 className="transparent center-align white-text z-depth-5">JAMES SEWELL</h2>
	 					<h5 className="center-align white-text flow-text z-depth-5">Front-end Engineer - Houston, Tx</h5>

	 				</div>

	 			</div>

	 			<WebDevPanel toDoDescription={this.state.toDoDescription} scoreDescription={this.state.scoreDescription} weatherDescription={this.state.weatherDescription}  />
				<GraphicDesignPanel />
				<Footer />
				
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

const GraphicDesignPanel = React.createClass({

	render: function(){

		return(

	 			<div className='row graphics-row container'>

	 				<div className='col s12 grey darken-3 center-align z-depth-1'>

	 					<div className="card grey darken-2">

	 						<h3 className="card-content flow-text white-text left-align">Graphic Design</h3>

	 						<div className="card-content container grey darken-2 col s12 m5 z-depth-4">

		 						<div className="logos container col s12 center-align">

		 							<h4 className="white-text flow-text center-align"> Tools </h4>
		 							<div className="logo1 col s4 left-align">
		 								<img className="img-tools responsive-img" src="images/software_icons/ps_icon.png" />
		 							</div>
		 							<div className="logo1 col s4 center-align">
		 								<img className="img-tools responsive-img" src="images/software_icons/ai_icon.png" />
		 							</div>
		 							<div className="logo1 col s4 right-align">
		 								<img className="img-tools responsive-img" src="images/software_icons/blender_icon.png" />
		 							</div>
									
								</div>

		 						<p className="row white-text flow-text">I produce digital assets using Adobe Photoshop CC, Adobe Illustrator CC, and Blender3D</p>

		 					</div>

		 					<div data-indicators={true} className="carousel card-content carousel-graphics col s12 m7">

							    <a className="carousel-item carousel-item-graphics z-depth-5" href="#one!"><img className="responsive-img carousel-graphic" src="images/A-Cut-Above.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics z-depth-5" href="#two!"><img className="responsive-img carousel-graphic" src="images/reverse-a-cut-above.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics z-depth-5" href="#three!"><img className="responsive-img carousel-graphic" src="images/your-lyrics.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics z-depth-5" href="#three!"><img className="responsive-img carousel-graphic" src="images/Community-Arts-Center.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics z-depth-5" href="#four!"><img className="responsive-img carousel-graphic" src="images/envato-homepage-image.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics z-depth-5" href="#five!"><img className="responsive-img carousel-graphic" src="images/ironPongLogoWhiteV2.png" /></a>
							    <a className="carousel-item carousel-item-graphics z-depth-5" href="#five!"><img className="responsive-img carousel-graphic" src="images/Mockup Tent - Copy/Tent3.png" /></a>

							</div>

						</div>

					</div>

	 			</div>

	 		

		)

	}

})

const WebDevPanel = React.createClass({

	render: function(){

		//<div className="white-text center-align card z-depth-4 grey darken-2">
		//	<p className="flow-text">score tracking app</p>
		//</div>

		//<div className="white-text center-align card z-depth-4 grey darken-2">
		//	<p className="flow-text">weather app</p>
		//</div>

		//<div className="white-text center-align card z-depth-4 grey darken-2">
		//	<p className="flow-text">full-stack to-do list app</p>
		//</div>

		return(

 			<div className='row web-row grey darken-3 container'>
 					
 					<div className="z-depth-2 card grey darken-2">

 						<h3 className="card-content flow-text white-text left-align-align">Web Development - Personal Projects</h3>

 					</div>

	 				<div className='container col s12 m4 center-align'>

	 					<div id="theColumn" className="z-depth-4 transparent material-placeholdeer">
		 					
	 						<div id="modal1" className="modal preview-modal container center-align">
	 						<button onClick={function(){$('#modal1').modal('close')}} className="btn-floating btn-large waves-effect waves-light z-depth-5 modal-content"><i className="material-icons center-align">zoom_out</i></button>
		 					<iframe className="modal-content center-align" src="https://gametally.herokuapp.com"></iframe>
							</div>

							<div id="frame" className="frame">
		 					<iframe className="theFrame center-align" src="https://gametally.herokuapp.com"></iframe>
							</div>
							<button data-target="modal1" className="btn-floating btn-large waves-effect waves-light view-button z-depth-5"><i className="material-icons">zoom_in</i></button>
							
						</div>

						<ul className="white-text center-align card z-depth-4 grey darken-3 collapsible-score" >

							<li>
      							<div className="collapsible-header grey darken-2 left-align"><i className="material-icons">{this.props.scoreDescription ? 'remove' : 'add'}</i>description</div>
      							<div className="collapsible-body"><span className="flow-text">This is a communal score tracking app that I built for my final project as a student at The Iron Yard. The UI was designed using React, Materialize-CSS, and some custom SCSS. Although my focus is front end engineering, I did learn how to deploy my own database using mongodb and write an api for it in node.</span></div>
    						</li>
							
						</ul>

					</div>

					<div className='col s12 m4 center-align'>


	 					<div id="theColumn" className="z-depth-4 transparent material-placeholdeer">
	 						
	 						<div id="modal2" className="modal preview-modal container center-align">
	 						<button onClick={function(){$('#modal2').modal('close')}} className="btn-floating btn-large waves-effect waves-light z-depth-5 modal-content"><i className="material-icons">zoom_out</i></button>
		 					<iframe className="modal-content center-align" src="https://jamesjsewell.github.io/weather_app"></iframe>
							</div>

							<div id="frame" className="frame">
		 					<iframe className="theFrame center-align" src="https://jamesjsewell.github.io/weather_app"></iframe>

							</div>
							<button data-target="modal2" className="btn-floating btn-large waves-effect waves-light view-button z-depth-5"><i className="material-icons">zoom_in</i></button>
							
						</div>
				
						<ul className="white-text center-align card z-depth-4 grey darken-3 collapsible-weather" >

							<li>
      							<div className="collapsible-header grey darken-2 left-align"><i className="material-icons">{this.props.weatherDescription ? 'remove' : 'add'}</i>description</div>
      							<div className="collapsible-body"><span className="flow-text">My assignment here was to write an application that consumes the DarkSky API. The UI was designed using javascript and vanilla css.</span></div>
    						</li>
							
						</ul>

					</div>

					<div className='col s12 m4 center-align' >

	 					<div id="theColumn" className="z-depth-4 material-placeholdeer">
	 						
	 						<div id="modal3" className="modal preview-modal container center-align">
	 						<button onClick={function(){$('#modal3').modal('close')}} className="btn-floating btn-large waves-effect waves-light z-depth-5 modal-content"><i className="material-icons">zoom_out</i></button>
		 					<iframe className="modal-content center-align" src="https://dothething.herokuapp.com/"></iframe>
							</div>

							<div id="frame" className="frame">
		 					<iframe className="theFrame center-align" src="https://dothething.herokuapp.com/"></iframe>
							</div>
							<button data-target="modal3" className="btn-floating btn-large waves-effect waves-light view-button z-depth-5"><i className="material-icons">zoom_in</i></button>
							
						</div>

						<ul className="white-text center-align card z-depth-4 grey darken-3 collapsible-toDo" >

							<li>
      							<div className="collapsible-header grey darken-2 left-align"><i className="material-icons">{this.props.toDoDescription ? 'remove' : 'add'}</i>description</div>
      							<div className="collapsible-body"><span className="flow-text">This is my first attempt at creating a full stack app. The todo's are persistent and live in a mongo database that I wrote an API for using express for node. The UI was built using React and styled with scss</span></div>
    						</li>
							
						</ul>

					</div>

 			</div>

		)

	}

})

export default LandingPage