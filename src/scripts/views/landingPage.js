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

 	render: function(){

 		if(true){
			
			return (

		 		<div className='blue-grey lighten-3'>

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