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


				<div className="row container resume-page-wrapper">

					<div className="white-text grey">
						
						<div className='row'>

		 					<div className='col s12 m6 offset-m3'>

		 						<h2 className="transparent center-align white-text z-depth-5">JAMES SEWELL</h2>
		 						<h5 className="center-align white-text flow-text z-depth-5">Front-end Engineer &nbsp; &bull; &nbsp; Houston, TX</h5>
		 						<h5 className="center-align white-text flow-text z-depth-5">512-667-8938</h5>

		 					</div>

		 				</div>

						<div className="col s4 center-align z-depth-5">
						
							<InfoPanel />

							<EducationPanel />

							<HobbiesPanel />

						</div>

						<div className="col s8 transparent z-depth-5">
						
							<ExperiencePanel />

							<div className="card-content">
								<SkillsPanel />
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

const InfoPanel = React.createClass({

	render: function(){

		return(

 				
 				<div className='card center-align grey'>
	 				<ul className="collection flow-text">
	 					<li className="collection-item grey"><a className="white-text" href="https://www.jamesjsewell.co">www.jamesjsewell.co</a></li>
	 					<li className="collection-item grey"><a className="white-text" href="https://www.jamesjsewell.co/#portfolio">www.jamesjsewell.co/#portfolio</a></li>
	 					<li className="collection-item grey"><p>512-667-8938</p></li>
	 					<li className="collection-item grey"><a className="white-text" href="https://github.com/jamesjsewell">github.com/jamesjsewell</a></li>
	 					<li className="collection-item grey"><p>james@jamesjsewell.co</p></li>
	 					<li className="collection-item grey"><p>Houston, TX</p></li>
	 				</ul>
 				
 				</div>
 		

		)

	}

})

const ExperiencePanel = React.createClass({

	render: function(){

		return(
	
			<div className='column s12 center-align card'>

				<div className='grey center-align card-content'>

					<h4 className='white-text'>Experience</h4>

					<ul className="flow-text collection">

						<li class="collection-header"><h5 className="white-text">Freelance Graphic Designer 2013-present</h5></li>

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

				<div className='center-align card-content grey'>

					<div className='grey center-align col s12'>

						<h4 className="white-text card-content">Skills</h4>
						
						<div className="col s4 m4">

							<ul className="flow-text white-text grey darken-1 collection">

								<li class="collection-header"><h5>Graphic Design</h5></li>

								<li className="collection-item grey darken-4">
									
									<p>
										Adobe Photoshop
									</p>

								</li>

								<li className="collection-item grey darken-4">
									
									<p>
										Adobe Illustrator 
									</p>

								</li>

								<li className="collection-item grey darken-4">
									
									<p>
										Blender 3D	
									</p>

								</li>

								<li className="collection-item grey darken-4">
									
									<p>
										Microsoft Office	
									</p>

								</li>

								<li className="collection-item grey darken-4">
									
									<p>
										Drawing/Painting
									</p>

								</li>

							</ul>

						</div>

						<div className="col s4 m4">

							<ul className="flow-text collection">

								<li class="collection-header"><h5>Frontend Engineering</h5></li>

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

						</div>

						<div className="col s4 m4">

							<ul className="flow-text collection">

								<li class="collection-header"><h5>Backend Engineering</h5></li>

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

						</div>
					</div>

					<div className='grey container center-align col s12'>
						
						<div className="col s12">

							<ul className="flow-text collection">

								<li class="collection-header"><h5>Audio/Video Production</h5></li>

								<li className="collection-item">
									
									<p className="flow-text">
										Adobe Premiere
									</p>

								</li>

								<li className="collection-item">
									
									<p className="flow-text">
										Sony Vegas
									</p>

								</li>

								<li className="collection-item">
									
									<p className="flow-text">
										Blender 3D
									</p>

								</li>

								<li className="collection-item">
									
									<p className="flow-text">
										Adobe After Effects
									</p>

								</li>

								<li className="collection-item">
									
									<p className="flow-text">
										Ableton Live	
									</p>

								</li>

								<li className="collection-item">
									
									<p className="flow-text">
										Fl Studio
									</p>

								</li>

							</ul>

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

			<div className='card grey center-align'>

				<h5 className='grey darken-2 card-content'>Education</h5>

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

			<div className='card grey center-align'>

				<h5 className='card-content grey darken-1'>Hobbies</h5>

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

			</div>
			
			</div>

		)

	}

})

export default ResumePage