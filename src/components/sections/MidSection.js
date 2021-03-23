import React from 'react';
import '../styles/base.css';
import logo from '../styles/assets/happn-logo-icon.png';
import google from '../styles/assets/bt-dl-googleplay.svg';
import apple from '../styles/assets/bt-dl-appstore.svg';

const MidSection = () => {
  return (
    <>
      <div className='col-12 mt-5'>
        
          <div className='row  text-white bg-primary'>
            <div className='col-8 offset-sm-2  mt-5 mb-5'>
              <h3>Let’s keep the debate interesting!</h3>
                <p>Dear journalists, we know you have questions,
                  and we have some answers. Dating can be fun but 
                  also complex. So don’t hesitate to ask us for numbers, 
                  studies, graphics, trends, etc.
                </p>
              <button className='btn btn-lg btn-info custom-btn'>Reach out to us</button>
            </div>
        </div>
      </div>
      <div className='col-12 mt-5'>
        
          <div className='row '>
            <div className='col-2'> 
              < img src={logo} alt='logo' className='img-fluid' />
            </div>
            <div className='col-6   mt-5 mb-5'>
              <h3 className='display-5'>Find the people you’ve crossed paths with</h3>
              <p className='text-muted'> Available for free on the App Store and Google Play </p>
            </div>
            <div className='col-2'> 
              < img src={google} alt='logo' className='img-fluid mt-2 mb-4' />
              < img src={apple} alt='logo' className='img-fluid' />
            </div>
        </div>
      </div>


    </>
  ); 
}
export default MidSection;
