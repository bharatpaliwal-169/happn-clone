import React from 'react';
import './styles/base.css';
const Footer = () => {
  return(

    <React.Fragment>
      <div className="col-12 bg-dark text-info mt-5">
        <div className="row  footer">

        <div className='col-4 mt-5'>
            <h3> Happn </h3>
            <ul className='nav'>
            <li> <i className='fa fa-facebook'></i> </li>
            <li> <i className='fa fa-twitter'></i> </li>
            <li> <i className='fa fa-instagram'></i> </li>
            <li> <i className='fa fa-youtube'></i> </li>
          </ul>
        </div>
        <div className='col-4 mt-5'>
          <h3> Comapny </h3>
          <ul className='my-list'>
            <li> About </li>
            <li> Job </li>
            <li> Press </li>
            <li> Contact </li>
          </ul>
        </div>
        <div className='col-4 mt-5'>
          <h3>Users </h3>
          
          <ul className='my-list'>
            <li> Help </li>
            <li> Privacy Policy </li>
            <li> Trust Charter </li>
            <li> Rights over Personal Data use </li>
          </ul>
        </div>
        </div>
      </div>
    </React.Fragment>

  ) 
} 

export default Footer;