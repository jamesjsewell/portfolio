import React from 'react'
import STORE from '../store.js'
import ACTIONS from '../actions.js'
import User from '../models/userModel.js'
import Navbar from './components/navBar.js'
import Footer from './components/footer.js'
import SocialIcons from './components/socialIcons.js'

const ResumePage = React.createClass({

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

		// $('.carousel-graphics').carousel({dist: -100, padding: 20, fullWidth: false})
		// autoplay()   
		// function autoplay() {
		//     $('.carousel-graphics').carousel('next');
		//     setTimeout(autoplay, 2200);
		// }

  //   	$('.materialboxed').materialbox({
		// dismissible: false
		// })

  //   	$('.modal').modal()

  //   	$('.collapsible-toDo').collapsible({
    	
  //   	onOpen:  function(el) { STORE._set({toDoDescription: true  }) },
  //   	onClose: function(el) { STORE._set({toDoDescription: false }) } 
    	
		// })

		// $('.collapsible-score').collapsible({
    	
  //   	onOpen:  function(el) { STORE._set({scoreDescription: true  }) },
  //   	onClose: function(el) { STORE._set({scoreDescription: false }) } 
    	
		// })

		// $('.collapsible-weather').collapsible({
    	
  //   	onOpen:  function(el) { STORE._set({weatherDescription: true  }) },
  //   	onClose: function(el) { STORE._set({weatherDescription: false }) } 
    	
		// })

	},

 	render: function(){

 		if(true){
			
			return (

				<div className="row container resume-page-wrapper center-align">

					<div className="center-align col s12 container">
						<SocialIcons className="center-align container" />
					</div>

					<embed className="resumePDF" src="images/resume.pdf" />
				
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

const InfoPanel = React.createClass({

	render: function(){

		return(
 				
			<div className='card center-align transparent z-depth-5'>	

				<div className="divider"></div>

					<div className="section">
						
						<h5>Website</h5>

						<a className="white-text" href="https://www.jamesjsewell.co">www.jamesjsewell.co</a>

					</div>

				<div className="divider"></div>

					<div className="section">

						<h5>Portfolio</h5>

						<a className="white-text" href="https://www.jamesjsewell.co/#portfolio">www.jamesjsewell.co/#portfolio</a>

					</div>

				<div className="divider"></div>

					<div className="section">

						<h5>Github</h5>

						<a className="white-text" href="https://github.com/jamesjsewell">github.com/jamesjsewell</a>

					</div>

				<div className="divider"></div>

				<div className="section">

						<h5>Phone Number</h5>

						<p>512-667-8938</p>

					</div>

				<div className="divider"></div>

				<div className="section">

					<h5>Email</h5>

					<p>james@jamesjsewell.co</p>

				</div>

				<div className="divider"></div>
				<div className="divider"></div>

				<div className="section">

					<h5>Location</h5>

					<p>Houston, TX</p>

				</div>

				<div className="divider"></div>
			
			</div>
 		
		)

	}

})

const ExperiencePanel = React.createClass({

	render: function(){

		return(
	
			<div className='column s12 center-align card transparent'>

				<div className='transparent center-align card-content z-depth-5'>

					<h4 className='white-text'>Experience</h4>

					<ul className="flow-text collection transparent">

						<li class="collection-header"><h5 className="white-text">Freelance Graphic Designer 2013-present</h5></li>

						<li className="collection-item transparent">
							
							<p>
								produced marketing collateral for Asad Mecci, he is a performing and consulting hypnotherapist. My designs helped him secure venues for his live performances.
							</p>

						</li>

						<li className="collection-item transparent">
							
							<p>
								created product renderings for an Eccomerce website that sold custom banners and popup tents for a manufacturer in Australia 
							</p>

						</li>

						<li className="collection-item transparent">
							
							<p>
								currently exploring the Envato marketplace and producing content for creators on the platform. Envato is a collection of marketplaces that provide digital assets to creators	
							</p>

						</li>

					</ul>

				</div>

			</div>

		)

	}

})

const SkillsPanel = React.createClass({

	render: function(){

		return(

				<div className='center-align card-content grey z-depth-5'>

					<div className="z-depth-5 card-content col s12">
					<div className='center-align col s12'>

						<h4 className="white-text card-content">Skills</h4>
						
						<div className="col s4 m4">

							<ul className="flow-text white-text transparent collection">

								<li className="collection-header"><h5 className="flow-text card-title">Graphic Design</h5></li>

								<div className="chip">
    								Adobe Photoshop
  								</div>

  								<div className="chip">
    								Adobe Illustrator
  								</div>

  								<div className="chip">
    								Blender 3D
  								</div>

  								<div className="chip">
    								Microsoft Office
  								</div>

  								<div className="chip">
    								Drawing/Painting
  								</div>

							</ul>

						</div>

						<div className="col s4 m4">

							<ul className="flow-text collection">

								<li className="collection-header"><h5 className="flow-text card-title">Frontend Engineering</h5></li>

								<div className="chip">
    								Javascript
  								</div>

  								<div className="chip">
    								React.js
  								</div>

  								<div className="chip">
    								Backbone.js
  								</div>

  								<div className="chip">
    								Underscore.js
  								</div>

  								<div className="chip">
    								css
  								</div>

  								<div className="chip">
    								scss
  								</div>

  								<div className="chip">
    								HTML
  								</div>

  								<div className="chip">
    								MaterializeCSS
  								</div>

  								<div className="chip">
    								Wordpress
  								</div>

							</ul>

						</div>

						<div className="col s4 m4">

							<ul className="flow-text collection transparent">

								<li className="collection-header"><h5 className="flow-text card-title">Backend Engineering</h5></li>

								<div className="chip">
    								Mongoose
  								</div>

  								<div className="chip">
    								MongoDB
  								</div>

  								<div className="chip">
    								Node.js
  								</div>

  								<div className="chip">
    								Express.js
  								</div>

  								<div className="chip">
    								Python
  								</div>

  								<div className="chip">
    								Postman
  								</div>

							</ul>

						</div>
					</div>

					<div className='container center-align col s12 card-content'>
						
						<div className="col s12">

							<ul className="flow-text collection">

								<li className="collection-header"><h5 className="flow-text card-title">Audio/Video Production</h5></li>

								<div className="chip">
    								Adobe Premiere
  								</div>

  								<div className="chip">
    								Sony Vegas
  								</div>

  								<div className="chip">
    								Blender 3D
  								</div>

  								<div className="chip">
    								Adobe After Effects
  								</div>

								<div className="chip">
    								Ableton	Live
  								</div>

  								<div className="chip">
    								Fl Studio
  								</div>

							</ul>

						</div>
					</div>
					</div>

				</div>

		)

	}

})

const EducationPanel = React.createClass({

	render: function(){

		return(

			<div className='column s12 center-align'>

			<div className='card transparent center-align'>

				<h4>Education</h4>

 				<ul className="flow-text collection transparent">

					<li className="collection-item transparent">
						
						<h5 className="flow-text">
							Lee College
						</h5>
						<h4 className="flow-text">
							2016
						</h4>

					</li>

					<li className="collection-item transparent">
						
						<h5 className="flow-text">
							The Iron Yard
						</h5>
						<h4 className="flow-text">
							2017
						</h4>

						<p>Attended and graduated from a 12 week immersive course on all things front end engineering with javascript</p>

					</li>

				</ul>

			</div>
			
			</div>

		)

	}

})

const HobbiesPanel = React.createClass({

	render: function(){

		return(

			<div className='column s12 center-align'>

			<div className='card transparent center-align'>

				<h4 className='card-content transparent darken-1'>Hobbies</h4>

				<ul>
				
				<div className="chip">
    				Skateboarding
  				</div>

  				<div className="chip">
    				Music Production
  				</div>

  				<div className="chip">
    				Target Practice
  				</div>

  				<div className="chip">
    				Game Design
  				</div>

  				<div className="chip">
    				Listening to Music
  				</div>

  				<div className="chip">
    				Programming
  				</div>

  				<div className="chip">
    				Ping Pong
  				</div>

  				<div className="chip">
    				Bowling
  				</div>

  				<div className="chip">
    				Fishing
  				</div>

  				<div className="chip">
    				Hiking
  				</div>

  				<div className="chip">
    				Making Things
  				</div>
  				</ul>

			</div>
			
			</div>

		)

	}

})

export default ResumePage