import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => {
  return { playerName: state.playerName };
}

class MainGame extends Component {
  constructor(props) {
        super(props);

        this.isPlayernameSet = this.isPlayernameSet.bind(this)
  }

  isPlayernameSet() {
    if (this.props.playerName === -1) {
      return <Redirect to="/" />
    }
  }

  render() {
    return (
      <div className="game-background">
        {this.isPlayernameSet()}
        <h1 className="game-title">Trade Wars: {this.props.playerName}</h1>
        <div className="game-window-container">
          <div className="render-container">
            <p>Game goes here</p>
          </div>
          <div className="game-status-container">
            <div className="game-cargo-container">
              <p className="game-status-title">Cargo</p>
            </div>
            <div className="game-status-text-container">
              <p className="game-status-title">Messages</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainGame = connect(mapStateToProps)(MainGame)
export default MainGame
