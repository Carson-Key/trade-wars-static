import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import GameStage from '../GameStage'

const mapStateToProps = state => {
  return { playerName: state.playerName };
}

class MainGame extends Component {
  constructor(props) {
        super(props);

        this.state = {
          gameWidth: -1,
          gameHeight: -1
        }

        this.isPlayernameSet = this.isPlayernameSet.bind(this)
        this.renderGameStage = this.renderGameStage.bind(this)
        this.GameDiv = React.createRef()
  }

  isPlayernameSet() {
    if (this.props.playerName === -1) {
      return <Redirect to="/" />
    }
  }

  componentDidMount () {
    this.setState({
      gameWidth: this.GameDiv.current.offsetWidth,
      gameHeight: this.GameDiv.current.offsetHeight
    })
  }

  renderGameStage() {
    if (this.state.gameWidth !== -1 && this.state.gameHeight !== -1) {
      return <GameStage parentDivDimensions={this.state} />
    }
  }

  render() {
    return (
      <div className="game-background">
        {this.isPlayernameSet()}
        <h1 className="game-title">Welcome <u><b>{this.props.playerName}</b></u> to Trade Wars</h1>
        <div className="game-window-container">
          <div ref={this.GameDiv} className="render-container">
            {this.renderGameStage()}
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
