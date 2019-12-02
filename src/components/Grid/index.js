import { Graphics, Stage } from '@inlet/react-pixi';
import React, { Component } from "react";
import Player from '../Player'
import Planet from '../Planet'

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameWidth: this.props.gameWidth,
      gameHeight: this.props.gameHeight,
      playerLocation: {
        x: 0,
        y: 0
      }
    }

    this.updatePlayerLocation = this.updatePlayerLocation.bind(this)
  }

  componentDidMount() {
    this.setState({
      gameWidth: this.state.gameWidth - (this.state.gameWidth * 0.012),
      gameHeight: this.state.gameHeight - (this.state.gameHeight * 0.015)
    })
  }

  updatePlayerLocation(event) {
    var clickCords = event.data.global
    this.setState({playerLocation: clickCords})
    console.log(clickCords)
  }

  render() {
    return (
      <Stage width={this.state.gameWidth} height={this.state.gameHeight} options={{ backgroundColor: 0x1d2230 }}>
        <Graphics
          x={0}
          y={0}
          interactive={true}
          pointerdown={(event) => {this.updatePlayerLocation(event)}}
          draw={g => {
            g.beginFill(0x1d2230);
            g.drawRect(0, 0, this.state.gameWidth, this.state.gameHeight);
            g.endFill();
          }}
        />
        <Planet x={10} y={10} radius={5} fill={0xff0000} />
        <Player x={this.state.playerLocation.x} y={this.state.playerLocation.y} radius={5} fill={0xff0000} />
      </Stage>
    );
  }
}

export default Grid
