import React from 'react'
import STORE from '../../store.js'
import ACTIONS from '../../actions.js'
import User from '../../models/userModel.js'

const SocialIcons = React.createClass({

  	componentWillMount: function(){

		STORE.on('dataUpdated', () => {
		  this.setState(STORE.data)
		})

  	},

  	componentWillUnmount: function() {

		STORE.off('dataUpdated')
	

  	},

  	componentDidMount: function(){
  

  	},

  	getInitialState: function() {

		return STORE.data

  	},

  	render: function(){

		return (

			<div className="social_icons transparent z-depth-5 row container center-align" >

				<div className="social_icons_wrapper center-align">
				
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://github.com/jamesjsewell"><img className="social_img responsive-img" src="images/social_icons/svg/github2.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://www.facebook.com/sewelljames"><img className="social_img responsive-img" src="images/social_icons/svg/facebook.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://www.linkedin.com/in/jamesjsewell"><img className="social_img responsive-img" src="images/social_icons/svg/linkedin.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://twitter.com/jamesjsewell"><img className="social_img responsive-img" src="images/social_icons/svg/twitter.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://instagram.com/jamesjsewell/"><img className="social_img responsive-img" src="images/social_icons/svg/instagram.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://soundcloud.com/james-sewell-13/sets/produced-by-james-sewell"><img className="social_img responsive-img" src="images/social_icons/svg/soundcloud.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://www.youtube.com/channel/UCzx0HsqacRA3soz3TbC-KGA/videos"><img className="social_img responsive-img" src="images/social_icons/svg/youtube.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://plus.google.com/+JamesSewellDotCom"><img className="social_img responsive-img" src="images/social_icons/svg/googleplus.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="https://graphicriver.net/user/jamesjsewell"><img className="social_img responsive-img" src="images/social_icons/svg/envato.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn-floating transparent" href="mailto:jamesjosephsewell@gmail.com"><img className="social_img responsive-img" src="images/social_icons/svg/mail.svg" /></a>
					<a className="responsive-img social_btn waves-effect waves-light z-depth-5 btn transparent" href= {location.hash === "#resume" ? "#home" : "#resume"} >{location.hash === "#resume" ? "home" : "resume"}</a>
			
				</div>
				
			</div>

		)

	}

})


export default SocialIcons