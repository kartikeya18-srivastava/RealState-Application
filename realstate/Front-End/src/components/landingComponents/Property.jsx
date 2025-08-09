import React, { useEffect, useState } from 'react';
import { IoBedOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import NavBar from './NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';

const Property = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:9000/api/property-list');
    if (response?.data?.code === 200) {
      setListData(response?.data?.data);
    }
  };

  const location = useLocation();

  const handleBuy = async (propertyId) => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    const response = await axios.post('http://localhost:9000/api/buy', { userId: userData?._id, propertyId });
    if (response?.data?.code === 200) {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'success'
      });
    } else {
      Swal.fire({
        title: "Buy Property",
        text: response?.data?.message,
        icon: 'error'
      });
    }
  };

  return (
    <>
      {location?.pathname !== "/" && <NavBar />}
      <div className='row property py-5'>
        <div className="text-center">
          <div className="tagline">Properties</div>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-10'>
          <div className='row py-3 px-3'>
            {listData?.map((item, index) => (
              <div key={index} className='col-sm-3 px-3 mb-4'>
                <div className="card mx-auto shadow-lg border border-0">
                  <img
                    src={`http://localhost:9000/img/${item?.pic}`}
                    onError={(e) => { e.target.src = '/img/default.jpg'; }}
                    className="card-img-top img-fluid featuredimg"
                    alt={item?.title || 'Property Image'}
                  />
                  <div className="card-body">
                    <p className='mycolor1'><b>₹{item?.price}</b> / Month</p>
                    <h5 className="card-title">
                      <b className='mycolor2'>{item?.title}</b>
                    </h5>
                    <p className="card-text featuredp">{item?.description}</p>
                    <div className='row'>
                      <div className='col-4 featureddiv featuredp'>
                        <p className='m-0 ps-2'>{item?.bedrooms} <IoBedOutline /></p>
                        <span className='ps-2'>Bedrooms</span>
                      </div>
                      <div className='col-4 featureddiv featuredp'>
                        <p className='m-0 ps-2'>{item?.bathrooms} <IoBedOutline /></p>
                        <span className='ps-2'>Bathrooms</span>
                      </div>
                      <div className='col-4 featureddivsp featuredp '>
                        <p className='m-0 ps-2'>{item?.area} sqft</p>
                        <span className='ps-2'>Area</span>
                      </div>
                    </div>
                    <div className='text-center mt-3'>
                      <button onClick={() => handleBuy(item?._id)} className='btn btn-outline-danger w-100'>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {listData?.length === 0 && <h1 className='text-center'>No Record Found</h1>}
          </div>
        </div>


        <div className='col-sm-1'></div>
      </div>
    </>
  );
};

export default Property;
