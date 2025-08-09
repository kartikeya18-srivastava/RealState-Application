import React from 'react';
import { FaHome } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
const Slider = () => {
  return (
    <>
      <div className='row slider bg-secondary py-5'>
        {/* Text Section */}
        <div className='col-sm-6 sliderdiv d-flex flex-column justify-content-center ps-5'>
          <p className="text-light fs-5">
            <FaHome className="me-2" />
            Real-Estate Agency
          </p>
          <div className='text-white'>
            <h1>
              <Typewriter
                options={{
                  strings: ['Find Your Dream', 'House by Us'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <p className='sliderp text-light mt-3'>
            Discover elegant homes designed for comfort and luxury.<br/>
            Let us help you find the perfect place to call home.
          </p>
          <Link className='btn btn-danger slider-enquiry' to='/contact'> Make an Enquiry</Link>
        </div>

        {/* Image Section */}
        <div className='col-sm-6 text-center'>
          <img
            src='/img/slider.png'
            className='sliderimg w-100'
            alt='Modern house with garden'
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
