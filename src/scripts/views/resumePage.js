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

					<div className="col s4 grey darken-3">
					
						<InfoPanel />

					</div>

					<div className="col s8 grey darken-1">
					
						<ExperiencePanel />

						<SkillsPanel />

						<EducationPanel />

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
							
							<span>
								produced marketing collateral for Asad Mecci, he is a performing and consulting hypnotherapist. My designs helped him secure venues for his live performances.
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								created product renderings for an Eccomerce website that sold custom banners and popup tents for a manufacturer in Australia 
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								currently exploring the Envato marketplace and producing content for creators on the platform. Envato is a collection of marketplaces that provide digital assets to creators	
							</span>

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
							
							<span>
								Adobe Photoshop
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Adobe Illustrator 
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Blender 3D	
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Microsoft Office	
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Drawing/Painting
							</span>

						</li>

					</ul>

					<ul className="flow-text collection">

						<li class="collection-header"><h4>Front End Engineering Skills</h4></li>

						<li className="collection-item">
							
							<span>
								Javascript
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								React.js
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Backbone.js
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Underscore.js	
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								CSS, SCSS, HTML, MaterializeCSS
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Wordpress
							</span>

						</li>

					</ul>

					<ul className="flow-text collection">

						<li class="collection-header"><h4>Backend Engineering</h4></li>

						<li className="collection-item">
							
							<span>
								Mongoose
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								MongoDB
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Node.js, Express.js
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Python	
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Postman
							</span>

						</li>

					</ul>

					<ul className="flow-text collection">

						<li class="collection-header"><h4>Audio/Video Production</h4></li>

						<li className="collection-item">
							
							<span>
								Adobe Premiere
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Sony Vegas
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Adobe After Effects
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Ableton Live	
							</span>

						</li>

						<li className="collection-item">
							
							<span>
								Fl Studio
							</span>

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
						
						<span>
							Lee College 2016-16
						</span>

					</li>

					<li className="collection-item">
						
						<span>
							The Iron Yard 2017-17: Attended and graduated from a 12 week immersive course on all things front end engineering with javascript
						</span>

					</li>

				</ul>

			</div>
			
			</div>

		)

	}

})

export default ResumePage