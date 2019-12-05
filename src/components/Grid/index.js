import { Graphics, Stage } from '@inlet/react-pixi';
import React, { Component } from "react";
import Player from '../Player'
import SpaceStation from '../SpaceStation'
import { Modal, ModalBody, ModalFooter, Button, ModalHeader } from 'reactstrap'
import { connect } from "react-redux";
import Cookies from 'js-cookie'
import { addPlayername, addWebSocket } from "../../js/actions/index";

function mapDispatch(dispatch) {
  return {
    addPlayername: playerName => dispatch(addPlayername(playerName)),
    addWebSocket: webSocket => dispatch(addWebSocket(webSocket))
  };
}

const mapStateToProps = state => {
  return { webSocket: state.webSocket };
}

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
      players: {}
    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.moveX = this.moveX.bind(this)
    this.moveY = this.moveY.bind(this)
    this.convertCordsToGrid = this.convertCordsToGrid.bind(this)
    this.drawPlayers = this.drawPlayers.bind(this)
  }

  componentDidMount() {
    this.findCookieCallSign()
    this.props.webSocket.onopen = () => {
      setInterval(() => {
        this.props.webSocket.send(
          JSON.stringify({
            command: "ping"
          })
        )
      }, 10000)
    }
    this.props.webSocket.onmessage = (event) => {
      var data = JSON.parse(event.data)
      if (data.EventType === "positionUpdate" && data.Target !== Cookies.get('callsign')) {
        this.setState({players: {
          [data.Target]: data.EventParams
        }})
      }
    }
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
        },
        playerCords: {
          x: 0,
          y: 0
        }
      })
    })
    window.addEventListener("keydown", this.handleKeyPress)
  }

  handleKeyPress(event) {
    switch (event.code) {
      case "ArrowUp":
        this.moveY(-1 * this.yMove, 1)
        break
      case "ArrowDown":
        this.moveY(this.yMove, -1)
        break
      case "ArrowLeft":
        this.moveX(-1 * this.xMove, 1)
        break
      case "ArrowRight":
        this.moveX(this.xMove, -1)
        break
      default:
        break
    }
  }
  moveY(direction, cordChange) {
    var newLocation = {
      y: this.state.playerLocation.y + direction,
      x: this.state.playerLocation.x
    }
    var newCords = {
      y: this.state.playerCords.y + cordChange,
      x: this.state.playerCords.x
    }
    if (newLocation.y >= 0 && newLocation.y <= this.state.gameHeight) {
      this.setState({
        playerLocation: {
          x: newLocation.x,
          y: newLocation.y
        },
        playerCords: {
          x: newCords.x,
          y: newCords.y
        }
      }, () => {
          this.props.webSocket.send(
            JSON.stringify({
              command: "setOwnPosition",
              x: this.state.playerCords.x,
              y: this.state.playerCords.y
            })
          )
      })
    }
  }
  moveX(direction, cordChange) {
    var newLocation = {
      y: this.state.playerLocation.y,
      x: this.state.playerLocation.x + direction
    }
    var newCords = {
      y: this.state.playerCords.y,
      x: this.state.playerCords.x + cordChange
    }
    if (newLocation.x + direction >= 0 && newLocation.x <= this.state.gameWidth) {
      this.setState({
        playerLocation: {
          x: newLocation.x,
          y: newLocation.y
        },
        playerCords: {
          x: newCords.x,
          y: newCords.y
        }
      }, () => {
          this.props.webSocket.send(
            JSON.stringify({
              command: "setOwnPosition",
              x: this.state.playerCords.x,
              y: this.state.playerCords.y
            })
          )
      })
    }
  }

  findCookieCallSign() {
    if (Cookies.get('callsign') !== undefined) {
      this.setState({playerName: this.tempPlayerName}, () => {
        const playerName = Cookies.get('callsign')
        this.props.addPlayername(playerName)
        this.props.webSocket.onopen = () => {
          this.props.webSocket.send(
            JSON.stringify({
              command: "setCallsign",
              callsign: playerName
            })
          )
          setInterval(() => {
            this.props.webSocket.send(
              JSON.stringify({
                command: "ping"
              })
            )
          }, 10000)
          this.props.webSocket.send(
            JSON.stringify({
              command: "getAllPosition",
            })
          )
        }
      })
    }
  }

  convertCordsToGrid(x, y) {
    return {
      x: -1 * (this.xMove * x),
      y: -1 * (this.yMove * y)
    }
  }

  drawPlayers() {
    const players = Object.keys(this.state.players);
    return players.map((player, i) => {
      try {
        var gridCords = this.convertCordsToGrid(this.state.players[player].x, this.state.players[player].y)
        return <Player key={player} x={gridCords.x} y={gridCords.y} />
      } catch(error) {
        //... nothing
      }
    })
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
          {this.drawPlayers()}
        </Stage>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatch)(Grid)


// Put this in a Grapics Component to have interaction
// interactive={true}
// pointerdown={(event) => {this.updatePlayerLocation(event)}}
// draw={g => {
//   g.beginFill(0x1d2230);
//   g.drawRect(0, 0, this.state.gameWidth, this.state.gameHeight);
//   g.endFill();
// }}
