import React, { Component } from 'react';

import { H1, H2 } from './styles';

class Home extends Component {
  render() {
    return (
      <div>
        <H1>ReactJS PWA</H1>
        <H2>using Ionic`s Capacitor</H2>
        <a href='/about'>About Page</a>
      </div>
    );
  }
}

export default Home;
