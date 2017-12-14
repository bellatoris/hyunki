import React, { Component } from 'react';


class Body extends Component {
  render() {
    return (
      <div className="App-body">
        <section id="about">
          <div className="section-intro">
            <div>
              <h3>About</h3>
              <h1>More About Me</h1>
              <p>
                I am a third year graduate student at
                Georgia Institute of Technology.
                My research interest is low dimensional
                topology and contact geometry.
                My advisor is  
                <a href="http://people.math.gatech.edu/~etnyre/">
                  John Etnyre
                </a>
              </p>
              <p>
                I received B.S. in Computer Science
                and Engineering and B.S. in Mathematics
                at Seoul National University.
                My undergraduate research was advised by
                Prof. Myungsoo Kim and
                Prof. Otto Van Koert.
              </p>
            </div>
          </div>
          <div className="about-content">
            <div className="left">
              <h3>Education</h3>
              <h5>Georgia Institute of Technology</h5>
              <p>
                Ph.D in Mathematics,
                <span>•</span>
                <em>Aug. 2015 - Present</em>
                <br />
                M.S. in Mathematics,
                <span>•</span>
                <em>Dec. 2017</em>
              </p>
              <h5>Seoul National University</h5>
              <p>
                B.S in Computer Science and Engineering,
                <span>•</span>
                <em>Aug. 2015</em>
                <br />
                B.S. in Mathematics (double major),
                <span>•</span>
                <em>Aug. 2015</em>
              </p>
            </div>
            <div className="right">
              <h3>My Research Interests</h3>
              <ul>
                <li>Dimensional Topology</li>
                <li>Contact Geometry</li>
              </ul>
            </div>
          </div>
          <div className="about-content--buttons">
            <div className="left">
              <a>Download My CV</a>
            </div>
            <div className="right">
              <a>Hire Me Now</a>
            </div>
          </div>
        </section>
        <section id="preprints">
          <div className="section-intro">
            <div>
              <h3>Preprints</h3>
              <h1>My Preprints</h1>
              <p>
                Lorem ipsum Dolor adipisicing nostrud et aute Excepteur 
                amet commodo ea dolore irure esse Duis nulla sint fugiat 
                cillum ullamco proident aliquip quis qui voluptate dolore 
                veniam Ut laborum non est in officia.
              </p>
            </div>
          </div>
          <div className="preprints-content">
            <div className="left">
              <div className="timeline">
                <div className="timeline_block">
                  <div className="timeline_bullet">
                  </div>
                  <div className="timeline_header">
                    <p className="timeline_timeframe">November 2017</p>
                    <h3>Classification of tight contact structures</h3>
                    <h5>Hyunki Min</h5>
                  </div>
                  <div className="timeline_desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi
                      ex in magna consectetur nisi cupidatat laboris esse
                      eiusmod deserunt aute do quis velit esse sed Ut
                      proident cupidatat nulla esse cillum laborum occaecat
                      nostrud sit dolor incididunt amet est occaecat nisi.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            {/*end left*/}
            <div className="right">
              <div className="timeline">
                <div className="timeline_block">
                  <div className="timeline_bullet">
                  </div>
                  <div className="timeline_header">
                    <p className="timeline_timeframe">November 2017</p>
                    <h3>A note on uniformly thickness property</h3>
                    <h5>Hyunki Min</h5>
                  </div>
                  <div className="timeline_desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi
                      ex in magna consectetur nisi cupidatat laboris esse
                      eiusmod deserunt aute do quis velit esse sed Ut
                      proident cupidatat nulla esse cillum laborum occaecat
                      nostrud sit dolor incididunt amet est occaecat nisi.
                  </p>
                  </div>
                </div>
              </div>
            </div>
            {/*end right*/}
          </div>
        </section>
        <section id="contact">
          <div className="overlay">
          </div>
          <div className="section-intro">
            <div>
              <h3>Contact</h3>
              <h1>Say Hello.</h1>
              <p>
                Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet
                commodo ea dolore irure esse Duis nulla sint fugiat cillum
                ullamco proident aliquip quis qui voluptate dolore veniam
                Ut laborum non est in officia.
              </p>
            </div>
          </div>
          <div className="contact__main">
            <div className="contact__infos">
              <h4>Phone</h4>
              <p>
                Phone: (+63) 555 1212
                <br />
                Mobile: (+63) 555 1212
                <br />
                Fax: (+63) 555 1212
              </p>
              <h4>Email</h4>
              <p>
                hello@snu.ac.kr
                <br />
                doogie@gmail.com
              </p>
              <h4>Address</h4>
              <p>
                Skiles 144
                <br />
                Gerogia
                <br />
                Atlanta
              </p>
            </div>
          </div>
        </section>
        <footer>
          <div>
            <div>
              <div className="footer-logo">
              </div>
              <ul className="footer-social">
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
          </div>
          <div className="footer-bottem">
            <div>
              <div className="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                  <i className="im im-arrow-up">
                  </i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Body;