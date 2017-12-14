import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-home">
        <section id="home">
          <div className="overlay"></div>
          <div className="home-content">
            <h3>
              Hello There
          </h3>
            <h1>
              I am Hyunki Min.
              I am a PhD Student, School of Mathematics in
              Georgia Institute of Technology
          </h1>
            <div className="home-content_buttons btn">
              <a href="#works" className="smoothscoll">
                Preprints
            </a>
              <a href="#about" className="smoothscoll">
                More About Me
            </a>
            </div>
            <div className="home-content-scroll">
              <a href="#about" class="scroll-link smoothscroll">
                <span>Scroll Down</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;