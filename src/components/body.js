import React, { Component } from 'react';


class Body extends Component {
  render() {
    return (
      <div className="App-intro">
        <section id="about">
          <h2>Profile</h2>
          <p>I am a third year graduate student at Georgia Institute of Technology</p>
          <p>My advisor is <a href="http://people.math.gatech.edu/~etnyre/">John Etnyre</a></p>
        </section>
        <section id="Research">
          <h2>Research</h2>
          <p>My research interest is low dimensional topology and contact geometry</p>
        </section>
        <section id="Preprints">
          <h2>Preprints</h2>
          <ul>
            <li>Classification of tight contact structures</li>
            <li>A note on uniformly thickness property</li>
          </ul>
        </section>
        <section id="Contacts">
          <h2>Contacts</h2>
          <p>Email: hmin38 at gatech dot edu</p>
        </section>
      </div>
    );
  }
}

export default Body;