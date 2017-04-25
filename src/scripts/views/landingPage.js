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

		 		<div className=''>

		 			<div className='card green accent-4'>
		 				<h3 className='card-content white-text'>james</h3>
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