import { Sprite } from '@inlet/react-pixi';
import React, { Component } from "react";

class OtherPlayer extends Component {
  render() {
    return (
      <Sprite
        image="https://cdn1.iconfinder.com/data/icons/space-133/64/spaceship-planet-space-colony-city-512.png"
        x={this.props.x}
        y={this.props.y}
        scale={{ x: 0.05, y: 0.05}}
      />
    );
  }
}

export default OtherPlayer
