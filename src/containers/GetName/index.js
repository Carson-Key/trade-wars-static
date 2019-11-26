import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "./styles.css";
import { connect } from "react-redux";
import { addPlayername } from "../../js/actions/index";

function mapDispatch(dispatch) {
  return {
    addPlayername: playerName => dispatch(addPlayername(playerName))
  };
}

class GetName extends Component {
  constructor(props) {
        super(props);
        this.state = {
          playerName: -1
        }

        this.tempPlayerName = ""

        this.setPlayerName = this.setPlayerName.bind(this)
        this.changeTempPlayerName = this.changeTempPlayerName.bind(this)
  }

  changeTempPlayerName(event) {
    this.tempPlayerName = event.target.value
  }
  setPlayerName() {
    if (this.tempPlayerName !== "") {
      this.setState({playerName: this.tempPlayerName}, () => {
        const playerName = this.tempPlayerName
        this.props.addPlayername(playerName)
      })
    }
  }

  render() {
    return (
      <div className="get-name-background">
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
