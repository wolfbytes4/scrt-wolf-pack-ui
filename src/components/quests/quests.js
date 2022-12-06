import React, { Component } from "react";
import Quest from "./quest/quest";
import "./quests.scss"; 
class Quests extends Component {
  constructor(props) {
    super();
    this.state = {};
  } 

 
  render() {
    return (
      <div id="quests-component">
          <Quest></Quest>
      </div>
    );
  }
}

export default Quests;
