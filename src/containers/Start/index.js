import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RouteHandle from './RouteHandle'
import ROUTES from '../routes.js'

class Start extends Component {
  render() {
    return (
      <Router>
        <RouteHandle routes={ROUTES}/>
      </Router>
    )
  }
}

export default Start;
