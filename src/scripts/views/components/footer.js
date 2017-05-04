import React from 'react'
import STORE from '../../store.js'
import ACTIONS from '../../actions.js'
import User from '../../models/userModel.js'

const Footer = React.createClass({

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
      <footer className="page-footer grey darken-2 container z-depth-1">
          <div className="container">
            <div className="row">

              <div className="col l6 s12">
                <h5 className="white-text">About this website</h5>
                <p className="grey-text text-lighten-4">I created this website using React, and MaterializeCSS. I started with my instructor's custom boilerplate generator called maestro: <a href="https://github.com/magentanova/maestro">maestro repo</a></p>
              </div>
              
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Social Media</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/sewelljames">facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://twitter.com/jamesjsewell">twitter</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://instagram.com/jamesjsewell/">instagram</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/jamesjsewell">linkedin</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright grey darken-3 z-depth-2">
            <div className="container">
            2017 Created by James Sewell
            <a className="grey-text text-lighten-4 right" href="https://github.com/jamesjsewell/portfolio">Github repo for this webiste</a>
            </div>
          </div>
        </footer>
    )

  }

})


export default Footer