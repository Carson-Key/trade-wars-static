import { Sprite } from '@inlet/react-pixi';
import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <Sprite image="./ship.png" x={this.props.x} y={this.props.y} />
    );
  }
}

export default Player
