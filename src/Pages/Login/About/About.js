import React from 'react';
import nasir from '../../../images/nasir.jpg'
const About = () => {
    return (
        <div className='container d-flex mt-5'>
          <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel blanditiis aliquid quas eum vitae iste, non minus quisquam ipsam, voluptatum ullam alias omnis odit, velit fugiat dolorum consectetur corporis.</p>
          </div>
          <div>
              <img className='img-fluid' src={nasir} alt="" />
          </div>
        </div>
    );
};

export default About;