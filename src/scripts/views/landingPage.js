import React from 'react'
import STORE from '../store.js'
import ACTIONS from '../actions.js'
import User from '../models/userModel.js'
import Navbar from './components/navBar.js'
import Footer from './components/footer.js'


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
    	
	},

 	render: function(){

 		if(true){
			
			return (

				<div className="grey darken-4">
				<div className='row'>

	 				<div className='col s12 m6 offset-m3'>

	 					<h2 className="blue-grey darken-3 center-align white-text">JAMES SEWELL</h2>
	 					<h5 className="center-align white-text flow-text">Front-end Engineer - Houston, Tx</h5>

	 				</div>

	 			</div>

	 			<WebDevPanel />
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

	 				<div className='col s12 blue-grey darken-4 center-align'>

	 					<div className="card blue-grey darken-3">

	 						<h3 className="card-content flow-text white-text left-align">Graphic Design</h3>

	 						<div className="card-content container blue-grey darken-3 col s12 m5">

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

		 					<div data-indicators={true} className="carousel card-content carousel-graphics  col s12 m7">

							    <a className="carousel-item carousel-item-graphics" href="#one!"><img className="responsive-img carousel-graphic" src="images/A-Cut-Above.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics" href="#two!"><img className="responsive-img carousel-graphic" src="images/reverse-a-cut-above.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics" href="#three!"><img className="responsive-img carousel-graphic" src="images/your-lyrics.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics" href="#three!"><img className="responsive-img carousel-graphic" src="images/Community-Arts-Center.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics" href="#four!"><img className="responsive-img carousel-graphic" src="images/envato-homepage-image.jpg" /></a>
							    <a className="carousel-item carousel-item-graphics" href="#five!"><img className="responsive-img carousel-graphic" src="images/ironPongLogoWhiteV2.png" /></a>
							    <a className="carousel-item carousel-item-graphics" href="#five!"><img className="responsive-img carousel-graphic" src="images/Mockup Tent - Copy/Tent3.png" /></a>

							</div>

						</div>

					</div>

	 			</div>

	 		

		)

	}

})

const WebDevPanel = React.createClass({

	render: function(){

		return(

 			<div className='z-depth-1 row web-row blue-grey darken-4 container'>
 					
 					<div className="z-depth-2 card blue-grey darken-3">

 						<h3 className="card-content flow-text white-text left-align-align">Web Development</h3>

 					</div>

	 				<div className='container col s12 m4 blue-grey darken-4 center-align'>

	 					<div className="white-text center-align card card-title z-depth-4 blue-grey darken-3">
							<p className="flow-text">isa project</p>
						</div>

	 					<div id="theColumn" className="z-depth-4 blue-grey darken-3 material-placeholdeer">
		 					
	 						<div id="modal1" className="modal preview-modal container center-align">
	 						<button onClick={function(){$('#modal1').modal('close')}} className="btn modal-content">Close</button>
		 					<iframe className="modal-content center-align" src="https://gametally.herokuapp.com"></iframe>
							</div>

							<div id="frame" className="frame">
		 					<iframe className="theFrame center-align" src="https://gametally.herokuapp.com"></iframe>
							</div>
							<button data-target="modal1" className="btn-floating btn-large waves-effect waves-light view-button z-depth-5"><i className="material-icons">zoom_in</i></button>

							
						</div>
						<div className="white-text center-align card z-depth-4 blue-grey darken-3">
							<p className="flow-text">lololofs dsfsadf sdfsd dsfdsafdas dsfsdas dsadf dfsasdsdf sdfsadf sdfsd asddsdf sadds sdfsdsdd sdfsda sdadfdsf sdsdfadasd safsafdsfdsa asdfds sdsfasdf</p>
						</div>

					</div>

					<div className='col s12 m4 blue-grey darken-4 center-align'>

						<div className="white-text center-align card z-depth-4 blue-grey darken-3">
							<p className="flow-text">isa project</p>
						</div>

	 					<div id="theColumn" className="z-depth-4 blue-grey darken-3 material-placeholdeer">
	 						
		 					
	 						
	 						<div id="modal2" className="modal preview-modal container center-align">
	 						<button onClick={function(){$('#modal2').modal('close')}} class="btn modal-content">Close</button>
		 					<iframe className="modal-content center-align" src="https://jamesjsewell.github.io/weather_app"></iframe>
							</div>

							<div id="frame" className="frame z-depth-4">
		 					<iframe className="theFrame center-align" src="https://jamesjsewell.github.io/weather_app"></iframe>

							</div>
							<button data-target="modal2" className="btn-floating btn-large waves-effect waves-light view-button z-depth-5"><i className="material-icons">zoom_in</i></button>


							
						</div>
						<div className="white-text center-align card z-depth-4 blue-grey darken-3">
							<p className="flow-text">lololofs dsfsadf sdfsd dsfdsafdas dsfsdas dsadf dfsasdsdf sdfsadf sdfsd asddsdf sadds sdfsdsdd sdfsda sdadfdsf sdsdfadasd safsafdsfdsa asdfds sdsfasdf</p>
						</div>

					</div>

					<div className='col s12 m4 blue-grey darken-4 center-align'>

						<div className="white-text center-align card z-depth-4 blue-grey darken-3">
							<p className="flow-text">isa project</p>
						</div>

	 					<div id="theColumn" className="z-depth-4 blue-grey darken-3 material-placeholdeer">
	 						
		 					
	 						
	 						<div id="modal3" className="modal preview-modal container center-align">
	 						<button onClick={function(){$('#modal3').modal('close')}} class="btn modal-content">Close</button>
		 					<iframe className="modal-content center-align" src="https://dothething.herokuapp.com/"></iframe>
							</div>

							<div id="frame" className="frame">
		 					<iframe className="theFrame center-align" src="https://dothething.herokuapp.com/"></iframe>
							</div>
							<button data-target="modal3" className="btn-floating btn-large waves-effect waves-light view-button z-depth-5"><i className="material-icons">zoom_in</i></button>
							
						</div>

						<div className="white-text center-align card z-depth-4 blue-grey darken-3">
							<p className="flow-text">lololofs dsfsadf sdfsd dsfdsafdas dsfsdas dsadf dfsasdsdf sdfsadf sdfsd asddsdf sadds sdfsdsdd sdfsda sdadfdsf sdsdfadasd safsafdsfdsa asdfds sdsfasdf</p>
						</div>

					</div>

				

 			</div>

		)

	}

})

export default LandingPage