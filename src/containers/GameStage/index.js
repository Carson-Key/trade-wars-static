import React, { Component } from "react";
import Grid from '../../components/Grid'

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
      <Grid gameWidth={this.state.gameWidth} gameHeight={this.state.gameHeight} />
    );
  }
}

export default GameStage
