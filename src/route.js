import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';

class BaseRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />{" "}
      </React.Fragment>
    )
  }
}

export default BaseRouter;