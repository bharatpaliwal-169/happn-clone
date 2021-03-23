import React from 'react';
import '../styles/base.css';
import {Link} from 'react-router-dom';

const MyNavbar = () => {

  
  return(
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-capitalize brand-de" href="#">Happn</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NSC" aria-controls="NSC" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="NSC">
            <ul className="nav navbar-nav navbar-right float-right">
              <li className="nav-item cc">
                  <Link className="nav-link abt" to="#">Sign up</Link>
              </li>
              <li className="nav-item cc">
                  <Link className="nav-link abt" to="#">About</Link>
                </li>
                <li className="nav-item cc">
                  <Link className="nav-link abt" to="#">Contact</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

    </React.Fragment>

  ) 
} 

export default MyNavbar;

  

