import React from 'react'
import { LiaNewspaperSolid } from "react-icons/lia";
import CountUp from 'react-countup';
const Counter = () => {
  return (
    <>
      <div className='row divcounter bg-light'>
        <div className='col-sm-10-mx-auto'>
          <div className='row'>

            {/* Total Area Sq */}
            <div className='col-sm-3'>
              <div className='countericon'><i className='fas fa-vector-square text-danger'></i></div>
              <h2 className='text-center pt-3'><CountUp start={0} duration={2} end={560} />+</h2>
              <p className='text-center'>Total Area Sq</p>
            </div>

            {/* Apartments Sold */}
            <div className='col-sm-3'>
              <div className='countericon'><i className='fas fa-building text-danger'></i></div>
              <h2 className='text-center pt-3'><CountUp start={0} duration={2} end={197} />K+</h2>
              <p className='text-center'>Apartments Sold</p>
            </div>

            {/* Total Constructions */}
            <div className='col-sm-3'>
              <div className='countericon'><i className='fas fa-truck-monster text-danger'></i></div>
              <h2 className='text-center pt-3'><CountUp start={0} duration={2} end={268} />+</h2>
              <p className='text-center'>Total Constructions</p>
            </div>

            {/* Apartio Rooms */}
            <div className='col-sm-3'>
              <div className='countericon'><i className='fas fa-couch text-danger'></i></div>
              <h2 className='text-center pt-3'><CountUp start={0} duration={2} end={340} />+</h2>
              <p className='text-center'>Apartio Rooms</p>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Counter
