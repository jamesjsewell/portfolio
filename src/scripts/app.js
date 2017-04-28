import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import LandingPage from './views/landingPage.js'


const app = function() {
 
	const PortfolioRouter = Backbone.Router.extend({

		routes: {

			'home': 'renderLandingPage',
			'*splat': '_redirect'

		},

		_redirect: function(){
			this.renderLandingPage()
		},

		renderLandingPage: function(){

			ReactDOM.render(<LandingPage />, document.querySelector('.page-container-for-app'))

		},

		initialize: function() {
		
		}

	})

	new PortfolioRouter
	Backbone.history.start()

}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..