import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RouteHandle from './RouteHandle'
import GetName from './GetName'

class Start extends Component {
  render() {
    return (
      <Router>
        <GetName/>
        <RouteHandle/>
      </Router>
    )
  }
}

export default Start;
