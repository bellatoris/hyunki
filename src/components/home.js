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
            <div className="home-content__main">
              <h3>
                Hello There
              </h3>
              <h1>
                I am Hyunki Min.
                I am a PhD Student, School of Mathematics in
                Georgia Institute of Technology
              </h1>
              <div className="home-content__buttons">
                <a href="#preprints" className="smoothscoll btn btn--stroke">
                  Preprints
                </a>
                <a href="#about" className="smoothscoll btn btn--stroke">
                  More About Me
                </a>
              </div>
              <div className="home-content__scroll">
                <a href="#about" class="scroll-link smoothscroll">
                  <span>Scroll Down</span>
                </a>
              </div>
            </div>
            <ul className="home-social">
              <li>
                <a href="#0">
                  <i className="im im-facebook"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="im im-twitter"></i>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;