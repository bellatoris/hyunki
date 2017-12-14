import React, { Component } from 'react';
import './App.css';
import Navigator from './components/navigator';
import Home from './components/home';
import Body from './components/body';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navigator />
        <Home />
        <Body />
      </div>
    );
  }
}

export default App;
