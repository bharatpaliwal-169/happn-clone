import React, { Component } from 'react';
import Example from './Example';

class AboutBody extends Component {
  render() {
    return (
      <>
      <div className='col-12'>
        <div className='col-6 col-sm-4 offset-sm-1 mt-5'> 
          <span className='text-uppercase text-primary'> IT ALL STARTS WHEN YOU CROSS PATHS... </span>
          <h3 className=''>
            We often meet that special person when we’re least expecting it. happn is the app that connects you to the people you cross paths with every day, the ones who are already a part of your routine without you realizing it!
          </h3>
          <p className='text-muted mt-4'> Whenever you cross paths with another happn user in the street, their profile appears in your Timeline! Don’t miss your chance to connect! </p>
        </div>
        
      </div>
      <div className='col-12'>
        <div className='row mt-5'>
            <div className='col-6'></div>
        <div className='col-6 col-sm-4 offset-sm-1 mt-5 order-last'> 
          <span className='text-uppercase text-primary'> BECAUSE FATE KNOWS WHAT IT’S DOING... </span>
          <h3 className=''>
          They say it’s fate when two people end up in the same place at the same time. You don’t want to miss out on an opportunity like that, do you?
          </h3>
          <p className='text-muted mt-4'> Now it’s even easier to find the people who are going out and living it up in the same places you love to go: the happn MAP! </p>
        </div>
        
        </div>
      </div>
      <div className='col-12'>
        <div className='row mt-5'>
            <div className='col-6'></div>
        <div className='col-6 col-sm-4 offset-sm-1 mt-5 order-first'> 
          <span className='text-uppercase text-primary'> BUT SOMETIMES EVEN FATE NEEDS A LITTLE PUSH! </span>
          <h3 className=''>
          Your Timeline is unique. It only shows the people YOU have crossed paths with. But don’t expect a Crush to fall from the sky. Take action!
          </h3>
          <p className='text-muted mt-4'> Like the profiles that catch your eye. If the feeling is mutual, it’s a Crush! The rest is up to you. Write to impress, get to know each other and meet up!</p>
        </div>
        </div>
      </div>
      
      <div className='col-12'>
        <div className='row mt-5 offset-sm-2'>
            <div className='col-6'> lorem ipsum dolor sit amet, consectet</div>
            <div className='col-6'> lorem ipsum dolor sit amet, consectet</div>
            <div className='col-6'> lorem ipsum dolor sit amet, consectet</div>
            <div className='col-6'> lorem ipsum dolor sit amet, consectet</div>
        </div>
      </div>

      <div className='col-12'>
        <div className='row mt-5 '>
            <Example />
        </div>
      </div>
      </>
    );
  }
}

export default AboutBody;