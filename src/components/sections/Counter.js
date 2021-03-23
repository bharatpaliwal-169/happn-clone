import React from 'react';
import CountUp from 'react-countup';
const Counter = () => {
  return (
    <div className="col-12 col-sm-6 offset-sm-3 text-center mt-5" data-aos='fade-up' data-aos-duration='3000'>
            <h4 className='display-5'>happn: the numbers</h4>
            <div className='row mt-5'>
              <section className='col-4'> 
                <CountUp end={100}delay={3} duration={4} suffix="M" className='num' />  <br/>
                  <span className='text-muted num-caption'> Number of user </span>
                
              </section>
              <section className='col-4 '> 
                <CountUp end={4.9} delay={3} duration={3} decimals={2} decimal="." suffix="M" className='num' />  <br/>
                  <span className='text-muted num-caption'> Number of messages sent and received per day </span> 
              </section>
              <section className='col-4 '> 
                <CountUp end={1.5}delay={3}  duration={2} decimal="." decimals={2} suffix="M" className='num'/><br/>
                  <span className='text-muted num-caption'> Number of new users per month </span>
              </section>
            </div>
        </div>
  )
}

export default Counter;