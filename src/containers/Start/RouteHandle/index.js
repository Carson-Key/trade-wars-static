import React, { Component } from 'react';
import { Route } from 'react-router-dom'

class RouteHandle extends Component {
  render() {
    const { routes } = this.props;
    const items = Object.keys(routes);
    return items.map((item, i) => {
      if (!routes[item].disabled) {
        return (
          <Route
            key={i}
            exact
            path={routes[item].path}
            component={routes[item].component}
          />
        )
      } else {
        return null
      }
    })
  }
}

export default RouteHandle;
