import React, { Component } from "react";
import "./styles.css";

class GetName extends Component {
  render() {
    return (
      <div class="game-background">
        <h1 class="game-title">Trade Wars</h1>
        <div class="game-window-container">
          <div class="render-container">
            <p>Game goes here</p>
          </div>
          <div class="game-status-container">
            <div class="game-cargo-container">
              <p class="game-status-title">Cargo</p>
            </div>
            <div class="game-status-text-container">
              <p class="game-status-title">Messages</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetName;
