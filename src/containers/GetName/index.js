import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "./styles.css";
import { connect } from "react-redux";
import { addPlayername, addWebSocket } from "../../js/actions/index";
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

function mapDispatch(dispatch) {
  return {
    addPlayername: playerName => dispatch(addPlayername(playerName)),
    addWebSocket: webSocket => dispatch(addWebSocket(webSocket))
  };
}

class GetName extends Component {
  constructor(props) {
        super(props);
        this.state = {
          playerName: -1,
          socket: new WebSocket('ws://trade-wars-backend.herokuapp.com/gameServer')
        }

        this.setState({}, () => {
          this.props.addWebSocket(this.state.socket)
        })

        this.tempPlayerName = ""

        this.setPlayerName = this.setPlayerName.bind(this)
        this.changeTempPlayerName = this.changeTempPlayerName.bind(this)
        this.readyForRedirect = this.readyForRedirect.bind(this)
        this.findCookieCallSign = this.findCookieCallSign.bind(this)
  }

  componentDidMount() {
    this.state.socket.onopen = () => {
      setInterval(() => {
        this.state.socket.send(
          JSON.stringify({
            command: "ping"
          })
        )
      }, 30000)
    }
    this.state.socket.onmessage = (event) => {
      console.log(event)
    }
  }

  changeTempPlayerName(event) {
    this.tempPlayerName = event.target.value
  }
  setPlayerName() {
    if (this.tempPlayerName !== "") {
      this.setState({playerName: this.tempPlayerName}, () => {
        const playerName = this.tempPlayerName
        Cookies.set('callsign', playerName, { expires: 5 })
        this.props.addPlayername(playerName)
      })
    }
  }
  findCookieCallSign() {
    if (Cookies.get('callsign') !== undefined) {
      this.setState({playerName: this.tempPlayerName}, () => {
        const playerName = Cookies.get('callsign')
        this.props.addPlayername(playerName)
      })
    }
  }

  readyForRedirect() {
    if (this.state.playerName !== -1) {
      return <Redirect to="/game" />
    }
  }

  render() {
    return (
      <div className="get-name-background">
        {this.findCookieCallSign()}
        {this.readyForRedirect()}
        <div className="username-card">
          <h1>Trade Wars!</h1>
          <InputGroup>
            <Input onChange={this.changeTempPlayerName} placeholder="Username" />
            <InputGroupAddon addonType="append">
              <Button onClick={this.setPlayerName}>Play</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  }
}



export default connect(null, mapDispatch)(GetName)
