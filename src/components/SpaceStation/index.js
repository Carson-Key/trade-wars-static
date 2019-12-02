import { Sprite } from '@inlet/react-pixi';
import React, { Component } from "react";

class SpaceStation extends Component {
  render() {
    return (
      <Sprite
        image="https://www.gfxmag.com/wp-content/uploads/2017/01/satellite-emoji-vector-icon-1.png"
        x={this.props.x}
        y={this.props.y}
        scale={{ x: 0.5, y: 0.5}}
      />
    );
  }
}

export default SpaceStation
