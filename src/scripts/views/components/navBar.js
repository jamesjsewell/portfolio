import React from 'react'
import STORE from '../../store.js'
import ACTIONS from '../../actions.js'
import User from '../../models/userModel.js'

const Navbar = React.createClass({

	componentWillMount: function(){

		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})

	},

	componentWillUnmount: function() {

		STORE.off('dataUpdated')
		

	},

	componentDidMount: function(){
	
		$(".button-collapse").sideNav({'closeOnClick': true});
		
		if(User.getCurrentUser()){
			var el = document.querySelector("#navBar")
			var style = window.getComputedStyle(el, null)

			var  mn = $(".the-nav"),
		    mns = "nav-scrolled",
		    hdr = mn.offset().top
		    console.log(hdr)

			$(window).scroll(function() {
			  if( $(this).scrollTop() > hdr ) {
			    mn.addClass(mns);
			  } else {
			    mn.removeClass(mns);
			  }
			});

		}

	},

	getInitialState: function() {

		return STORE.data

	},

	_handleLogout: function(evt){

		evt.preventDefault()

		if(User.getCurrentUser() != null){

			if(User.getCurrentUser().attributes.hasOwnProperty('_id') === false){

				

			}
			else{

				ACTIONS.logout()

			}

		}
	},

 	render: function(){
 	
 		var profileStatus = ''
 		var editArenasStatus = ''
 		var arenaStatus = ''
 		var joinArenaStatus = ''

 		if(location.hash === '#login' || location.hash === '#logout' || location.hash === '#home'){
 			var loginStatus = 'active'
 		}
 		if(location.hash === '#profile'){
 			var profileStatus = 'active'
 		}
 		if(location.hash === '#edit_arenas'){
 			var editArenasStatus = 'active'
 		}
 		if(location.hash === '#arena'){
 			var arenaStatus = 'active'
 		}
 		if(location.hash === '#join_arenas'){
 			var joinArenaStatus = 'active'
 		}
 		return (
 			<div>
				<h1 id='app-title' className='flow-text'>GameTally</h1>
	 			<div className="container center-align col s12 offset-m3 green accent-3">
		 			<nav id="navBar" className="the-nav green accent-3">
			 			<div className="nav-wrapper green accent-3">
			 			  <a data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
					 	  <ul className='green accent-3 left hide-on-med-and-down'>

				 			<li className={loginStatus}><a className="breadcrumb flow-text" onClick={this._handleLogout} href="#home">{User.getCurrentUser() === null || User.getCurrentUser().attributes._id === false ? 'login' : 'logout'}</a></li>	
				 			<li className={profileStatus}><a className="breadcrumb flow-text" href="#profile">my arenas</a></li>
							<li className={editArenasStatus}><a className="breadcrumb flow-text" href="#edit_arenas">create arenas</a></li>
							<li className={arenaStatus}><a className="breadcrumb flow-text" href="#arena">play</a></li>
							<li className={joinArenaStatus}><a className="breadcrumb flow-text" href="#join_arenas">find arenas</a></li>
						  </ul>

						  <ul className='green accent-3 side-nav' id='mobile-demo'>
				 			<li className={loginStatus}><a className="breadcrumb flow-text" onClick={this._handleLogout} href="#home">{User.getCurrentUser() === null || User.getCurrentUser().attributes._id === false ? 'login' : 'logout'}</a></li>	
				 			<li className={profileStatus}><a className="breadcrumb flow-text" href="#profile">my arenas</a></li>
							<li className={editArenasStatus}><a className="breadcrumb flow-text" href="#edit_arenas">create arenas</a></li>
							<li className={arenaStatus}><a className="breadcrumb flow-text" href="#arena">play</a></li>
							<li className={joinArenaStatus}><a className="breadcrumb flow-text" href="#join_arenas">find arenas</a></li>
						   </ul>
					 	</div>
			 		</nav>		
			 	</div>
			 	

			    <div id="loading" className={this.state.dataLoaded ? 'hide' : 'progress container z-depth-6'} >
        			<div className="indeterminate"></div>
  				</div>



				</div>
 		)

 	}

})


export default Navbar