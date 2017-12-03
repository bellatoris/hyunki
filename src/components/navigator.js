import React, { Component } from 'react';


class Navigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-navigator">
        <ul>
          <li> <a href="#Education"> Education </a> </li>
          <li> <a href="#Interests"> Interests </a> </li>
          <li> <a href="#Work_Experience"> Work Experience </a> </li>
          <li> <a href="#Pet_Projects"> Pet Projects </a> </li>
          <li> <a href="#Awards"> Awards </a> </li>
        </ul>
      </div>
    );
  }
}

export default Navigator;