import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './route';
import './App.css';
function App() {
  return (
      <Router>
        <BaseRouter />
      </Router>
    
  );
}

export default App;
