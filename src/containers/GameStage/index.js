import React, { Component } from "react";
import { connect } from "react-redux";
import { PixiComponent, Stage } from '@inlet/react-pixi';
import { Graphics } from 'pixi.js';


const mapStateToProps = state => {
  return { playerName: state.playerName };
}

const Rectangle = PixiComponent('Rectangle', {
  create: props => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, width, height, fill } = props;

    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
});

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
        <Rectangle x={100} y={100} width={500} height={300} fill={0xff0000} />
      </Stage>
    );
  }
}

GameStage = connect(mapStateToProps)(GameStage)
export default GameStage
