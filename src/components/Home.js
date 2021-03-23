import React, { Component } from 'react';
import Counter from './sections/Counter';
import MapImg from './sections/MapImg';
import Footer from './sections/Footer';
import List from './List';
import Landing from './sections/Landing';
import './styles/base.css';
import Team from './sections/Team';

import MidSection from './sections/MidSection.js'; 
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <Counter />
        <MapImg />
        <Team />
        <List />
        <MidSection />
        <Footer />
      </React.Fragment>


    );
  }
}

export default Home;
