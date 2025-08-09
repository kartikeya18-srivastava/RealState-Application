import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { HiLibrary } from "react-icons/hi";
import { IoBedSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { GiTreeSwing } from "react-icons/gi";


const OurAnimities = () => {
  return (
    <>
      <div className='row py-2'>
        <p className='text-center fs-3'>Our <b className='text-mycolor'>Animities</b></p>
        <div className='col-sm-10 mx-auto'>
          <div className='row py-3'>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg border border-0 p-4 boxbtn w-75">
                <div className='cardic' ><FaCarAlt/></div>
                <h3 className='mt-4 text-center'>Parking Space</h3>
                <div className='cardbtn'>&rarr;</div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg border border-0 p-4 boxbtn w-75">
                <div className='cardic' ><FaSwimmingPool/></div>
                <h3 className='mt-4 text-center'>Swimming Pool</h3>
                <div className='cardbtn'>&rarr;</div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg border border-0 p-4 boxbtn w-75">
                <div className='cardic' ><MdOutlineSecurity/></div>
                <h3 className='mt-4 text-center'>Private Security</h3>
                <div className='cardbtn'>&rarr;</div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg border border-0 p-4 boxbtn w-75">
                <div className='cardic' ><FaBriefcaseMedical/></div>
                <h3 className='mt-4 text-center'>Medical Center</h3>
                <div className='cardbtn'>&rarr;</div>
              </div>
            </div>

          </div>
          <div className='row py-3'>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg border border-0 p-4 boxbtn w-75">
                <div className='cardic' ><HiLibrary/></div>
                <h3 className='mt-4 text-center'>Library <br/> Area</h3>
                <div className='cardbtn'>&rarr;</div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg border border-0 p-4 boxbtn w-75">
                <div className='cardic' ><IoBedSharp/></div>
                <h3 className='mt-4 text-center'>Large <br/> Beds</h3>
                <div className='cardbtn'>&rarr;</div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg border border-0 p-4 boxbtn w-75">
                <div className='cardic' ><FaWifi/></div>
                <h3 className='mt-4 text-center'>Smart <br/> Homes</h3>
                <div className='cardbtn'>&rarr;</div>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className="card mx-auto shadow-lg border border-0 p-4 boxbtn w-75">
                <div className='cardic' ><GiTreeSwing/></div>
                <h3 className='mt-4 text-center'>Kids <br/> Slides</h3>
                <div className='cardbtn'>&rarr;</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default OurAnimities
