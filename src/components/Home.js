import React, { Component } from 'react';
import Counter from './sections/Counter';
import MapImg from './sections/MapImg';
import Footer from './Footer';
import List from './List';
import Landing from './sections/Landing';
import './styles/base.css';
import Team from './sections/Team';
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <Counter />
        <MapImg />
        <Team />
        <List />
        <Footer />

      </React.Fragment>


    );
  }
}

export default Home;
