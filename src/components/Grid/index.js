import { Graphics, Stage } from '@inlet/react-pixi';
import React, { Component } from "react";
import Player from '../Player'
import SpaceStation from '../SpaceStation'
import { Modal, ModalBody, ModalFooter, Button, ModalHeader } from 'reactstrap'

class Grid extends Component {
  constructor(props) {
    super(props);

    this.xMove = 0
    this.yMove = 0

    this.state = {
      gameWidth: this.props.gameWidth,
      gameHeight: this.props.gameHeight,
      playerLocation: {
        x: 0,
        y: 0
      },
      modalOpen: true
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.moveX = this.moveX.bind(this)
    this.moveY = this.moveY.bind(this)
  }

  componentDidMount() {
    this.setState({
      gameWidth: this.state.gameWidth - (this.state.gameWidth * 0.012),
      gameHeight: this.state.gameHeight - (this.state.gameHeight * 0.015)
    }, () => {
      this.xMove = this.state.gameWidth/20
      this.yMove = this.state.gameHeight/20
      this.setState({
        playerLocation: {
          x: this.xMove,
          y: this.yMove - (this.yMove/2)
        }
      })
    })
    window.addEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(event) {
    switch (event.code) {
      case "ArrowUp":
        this.moveY(-1 * this.yMove)
        break
      case "ArrowDown":
        this.moveY(this.yMove)
        break
      case "ArrowLeft":
        this.moveX(-1 * this.xMove)
        break
      case "ArrowRight":
        this.moveX(this.xMove)
        break
      default:
        break
    }
  }
  moveY(direction) {
    var newLocation = {
      y: this.state.playerLocation.y + direction,
      x: this.state.playerLocation.x
    }
    if (newLocation.y >= 0 && newLocation.y <= this.state.gameHeight) {
      this.setState({
        playerLocation: {
          x: newLocation.x,
          y: newLocation.y
        }
      })
    }
  }
  moveX(direction) {
    var newLocation = {
      y: this.state.playerLocation.y,
      x: this.state.playerLocation.x + direction
    }
    if (newLocation.x + direction >= 0 && newLocation.x <= this.state.gameWidth) {
      this.setState({
        playerLocation: {
          x: newLocation.x,
          y: newLocation.y
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Stage width={this.state.gameWidth} height={this.state.gameHeight} options={{ backgroundColor: 0x1d2230 }}>
          <Graphics
            x={0}
            y={0}
          />
          <Player x={this.state.playerLocation.x} y={this.state.playerLocation.y} />
        </Stage>
      </div>
    );
  }
}

export default Grid


// Put this in a Grapics Component to have interaction
// interactive={true}
// pointerdown={(event) => {this.updatePlayerLocation(event)}}
// draw={g => {
//   g.beginFill(0x1d2230);
//   g.drawRect(0, 0, this.state.gameWidth, this.state.gameHeight);
//   g.endFill();
// }}
