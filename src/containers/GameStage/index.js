import React, { Component } from "react";
import { connect } from "react-redux";
import { Stage } from '@inlet/react-pixi';
import Planet from '../../components/Planet'


const mapStateToProps = state => {
  return { playerName: state.playerName };
}

class GameStage extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.parentDivDimensions
  }

  componentDidMount() {
    this.setState({
      gameWidth: this.state.gameWidth - (this.state.gameWidth * 0.012),
      gameHeight: this.state.gameHeight - (this.state.gameHeight * 0.015)
    })
  }

  render() {
    return (
      <Stage width={this.state.gameWidth} height={this.state.gameHeight} options={{ backgroundColor: 0x1d2230 }}>
        <Planet x={10} y={10} radius={5} fill={0xff0000} />
      </Stage>
    );
  }
}

GameStage = connect(mapStateToProps)(GameStage)
export default GameStage
