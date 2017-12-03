import React, { Component } from 'react';
import './App.css';
import Navigator from './components/navigator';
import Header from './components/header';
import Body from './components/body';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navigator />
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
