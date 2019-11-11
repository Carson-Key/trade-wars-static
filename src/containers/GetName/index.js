import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "./styles.css";
class GetName extends Component {
  render() {
    return (
      <div class="get-name-background">
        <div class="username-card">
          <h1>Trade Wars!</h1>
          <InputGroup>
            <Input placeholder="Username" />
            <InputGroupAddon addonType="append">
              <Button>Play</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default GetName;
