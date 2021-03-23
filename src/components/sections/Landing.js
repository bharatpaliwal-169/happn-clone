import React from 'react';
import MyNavbar from './Navbar';
import '../styles/base.css';
const Landing = () => {
  return(
    <>
        <header>        
            <MyNavbar />
          <div className="banner-center text-center">
            <h1  data-aos='zoom-in' data-aos-duration='3000'>
              <strong>Seize your opportunities and find the people you cross paths with!</strong>
            </h1>
          </div>
        </header>

        <div className="col-12 col-sm-6 offset-sm-3  text-center text-mid" data-aos='fade-up' data-aos-duration='3000' >
          Why use a dating website when we cross paths with hundreds, and sometimes thousands of people in our everyday lives? We believe fate is what brings two people to the same place at the same time, but we know that it can be difficult to actually connect with that person when you cross paths. That’s why we created a tool to make the process easier.
          <br />
          
        </div>
        <div className="col-12 col-sm-6 offset-sm-3 text-center" data-aos='fade-up' data-aos-duration='2000'>
          And this is how happn was born, in January 2014. To give you the power to seize opportunities that arise every day when you randomly cross paths with someone you like. Thanks to happn, you can find the people you’ve crossed paths with and make great connections.
        </div>

    </>
  );
}

export default Landing;