import React from 'react';
import '../styles/base.css';
import {Link} from 'react-router-dom';

const MyNavbar = () => {

  
  return(
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-capitalize brand-de" to={'/'}>Happn</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NSC" aria-controls="NSC" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="NSC">
            <ul className="nav navbar-nav navbar-right float-right">
              <li className="nav-item cc">
                  <Link className="nav-link abt" to={"/signup"}>Sign up</Link>
              </li>
              <li className="nav-item cc">
                  <Link className="nav-link abt" to={"/about"}>About</Link>
                </li>
                <li className="nav-item cc">
                  <Link className="nav-link abt" to={"/help"}>Help</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

    </React.Fragment>

  ) 
} 

export default MyNavbar;

  

