import React, { Component } from 'react';
import MyNavbar from './sections/Navbar';
import MidSection from './sections/MidSection';
import Footer from './sections/Footer';
import './styles/about.css';
import google from './styles/assets/bt-dl-googleplay.svg';
import apple from './styles/assets/bt-dl-appstore.svg';
import AboutBody from './sections/AboutBody';
class About extends Component {
  render() {
    return (
    <React.Fragment>  
      <MyNavbar />
      <div className='col-12 banner'>
        <div className='row'>
          <div className='col-12 text-center text-white ban-cen ' 
            data-aos='zoom-in' data-aos-duration='3000'>
            <h2 className='display-3'> Find the people you’ve crossed paths with </h2>
            <p className='display-6'> When walking down the street, sitting at a bar, at work, or during a night out… We’ve all had that experience of making eye contact with someone who leaves a lasting impression. Now with happn, you can find the people you cross paths with, and seize the opportunity! </p>
            <div className='col-4'>
              < img src={google} width='200' height='200'  alt='logo' className='img-fluid mb-4 mt-4' />
              < img src={apple} width='200' height='200' alt='logo' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
      <AboutBody />
      <MidSection />
      <Footer />
      
    </React.Fragment>
    );
  }
}

export default About;