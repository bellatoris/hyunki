import React, { Component } from 'react';


class Navigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <h1>Hyunki</h1>
          </a>
        </div>
        <nav className="header-nav-wrap">
          <ul className="header-nav">
            <li className="current">
              <a className="smoothscroll" href="#home" title="home">Home</a>
            </li>
            <li className="">
              <a className="smoothscroll" href="#about" title="about">About</a>
            </li>
            <li className="">
              <a className="smoothscroll" href="#preprints" title="preprints">Preprints</a>
            </li>
            <li className="">
              <a className="smoothscroll" href="#contact" titls="contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="header-menu-toggle" href="#0">
        </a>
      </header>
    );
  }
}

export default Navigator;