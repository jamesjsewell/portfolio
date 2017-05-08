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


				<div className="grey darken-4 row container resume-page-wrapper">

					<div className='row'>

	 					<div className='col s12 m6 offset-m3'>

	 						<h2 className="transparent center-align white-text z-depth-5">JAMES SEWELL</h2>
	 						<h5 className="center-align white-text flow-text z-depth-5">Front-end Engineer &nbsp; &bull; &nbsp; Houston, TX</h5>
	 						<h5 className="center-align white-text flow-text z-depth-5">512-667-8938</h5>

	 					</div>

	 				</div>

					<div className="col s4 grey darken-3">
					
						<InfoPanel />

					</div>

					<div className="col s8 grey darken-1">
					
						<ExperiencePanel />

						<SkillsPanel />

						<EducationPanel />

						<HobbiesPanel />

					</div>
					
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

const InfoPanel = React.createClass({

	render: function(){

		return(

 			<div className='row container'>

 				<p>james sewell</p>

 				<ul className="collection">
 					<li className="collection-item"><a href="https://www.jamesjsewell.co">www.jamesjsewell.co</a></li>
 					<li className="collection-item"><a href="https://www.jamesjsewell.co/#portfolio">www.jamesjsewell.co/#portfolio</a></li>
 					<li className="collection-item"><p>512-667-8938</p></li>
 					<li className="collection-item"><a href="https://github.com/jamesjsewell">github.com/jamesjsewell</a></li>
 					<li className="collection-item"><p>james@jamesjsewell.co</p></li>
 					<li className="collection-item"><p>Houston, TX</p></li>
 				</ul>
 				
 			</div>

		)

	}

})

const ExperiencePanel = React.createClass({

	render: function(){

		return(
	
			<div className='column s12 center-align'>

				<div className='card grey darken-2 center-align'>

					<p>Freelance Graphic Designer 2013-present</p>

					<ul className="flow-text collection">

						<li className="collection-item">
							
							<p>
								produced marketing collateral for Asad Mecci, he is a performing and consulting hypnotherapist. My designs helped him secure venues for his live performances.
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								created product renderings for an Eccomerce website that sold custom banners and popup tents for a manufacturer in Australia 
							</p>

						</li>

						<li className="collection-item">
							
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
	
			<div className='column s12 center-align'>

				<p>Proficiencies</p>

				<div className='card grey darken-2 center-align'>

					<ul className="flow-text collection">

						<li class="collection-header"><h4>Graphic Design Skills</h4></li>

						<li className="collection-item">
							
							<p>
								Adobe Photoshop
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Adobe Illustrator 
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Blender 3D	
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Microsoft Office	
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Drawing/Painting
							</p>

						</li>

					</ul>

					<ul className="flow-text collection">

						<li class="collection-header"><h4>Front End Engineering Skills</h4></li>

						<li className="collection-item">
							
							<p>
								Javascript
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								React.js
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Backbone.js
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Underscore.js	
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								CSS, SCSS, HTML, MaterializeCSS
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Wordpress
							</p>

						</li>

					</ul>

					<ul className="flow-text collection">

						<li class="collection-header"><h4>Backend Engineering</h4></li>

						<li className="collection-item">
							
							<p>
								Mongoose
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								MongoDB
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Node.js, Express.js
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Python	
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Postman
							</p>

						</li>

					</ul>

					<ul className="flow-text collection">

						<li class="collection-header"><h4>Audio/Video Production</h4></li>

						<li className="collection-item">
							
							<p>
								Adobe Premiere
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Sony Vegas
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Adobe After Effects
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Ableton Live	
							</p>

						</li>

						<li className="collection-item">
							
							<p>
								Fl Studio
							</p>

						</li>

					</ul>

				</div>

			</div>

		)

	}

})

const EducationPanel = React.createClass({

	render: function(){

		return(

 	

			<div className='column s12 center-align'>

			<div className='card grey darken-2 center-align'>

				<p>Education</p>

 				<ul className="flow-text collection">

					<li className="collection-item">
						
						<p>
							Lee College 2016-16
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							The Iron Yard 2017-17: Attended and graduated from a 12 week immersive course on all things front end engineering with javascript
						</p>

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

			<div className='card grey darken-2 center-align'>

				<p>Hobbies</p>

 				<ul className="flow-text collection">

					<li className="collection-item">
						
						<p>
							Skateboarding
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Music Production
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Target Practice
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Game Design
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Listening to Music
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Programming
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Ping Pong
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Bowling
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Fishing
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Hiking
						</p>

					</li>

					<li className="collection-item">
						
						<p>
							Making Things
						</p>

					</li>

				</ul>

			</div>
			
			</div>

		)

	}

})

export default ResumePage