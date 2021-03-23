import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import About from './components/About';
import Help from './components/Help';
class BaseRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/signup" component={SignUp} />{" "}
        <Route path="/about" component={About} />{" "}
        <Route path="/help" component={Help} />{" "}
      </React.Fragment>
    )
  }
}

export default BaseRouter;