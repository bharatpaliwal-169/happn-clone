import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './route';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
      <Router>
        <BaseRouter />
      </Router>
    
  );
}

export default App;
