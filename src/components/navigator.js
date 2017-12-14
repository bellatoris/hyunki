import React, { Component } from 'react';


class Navigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-navigator">
        <ul>
          <li><a href="#Profile">Profile</a></li>
          <li><a href="#Research">Research</a></li>
          <li><a href="#Preprints">Preprints</a></li>
          <li><a href="#Contacts">Contacts</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigator;