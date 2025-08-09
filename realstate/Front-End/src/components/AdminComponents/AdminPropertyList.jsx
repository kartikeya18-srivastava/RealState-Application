import React, { useEffect, useState } from 'react';
import { IoBedOutline } from 'react-icons/io5';
import { FaBath } from 'react-icons/fa';
import { PiMapPinAreaFill } from 'react-icons/pi';
import NavBar from '../landingComponents/NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminPropertyList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/property-list');
      if (response?.data?.code === 200) {
        setListData(response?.data?.data);
      }
    } catch (error) {
      console.error('Failed to fetch properties:', error);
    }
  };

  const handleDeleteProperty = async (_id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This property will be permanently deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.post('http://localhost:9000/api/delete-property', { _id });

        if (response?.data?.code === 200) {
          Swal.fire('Deleted!', 'Property has been deleted.', 'success');
          fetchData(); // Refresh property list
        } else {
          Swal.fire('Failed!', response?.data?.message || 'Delete failed', 'error');
        }
      } catch (error) {
        console.error('Delete failed:', error);
        Swal.fire('Error!', 'Something went wrong while deleting.', 'error');
      }
    }
  };


  return (
    <>
      <NavBar />
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
                <div className="card mx-auto shadow-lg border border-0 h-100">
                  <img
                    src={`http://localhost:9000/img/${item?.pic}`}
                    onError={(e) => { e.target.src = '/img/default.jpg'; }}
                    className="card-img-top img-fluid featuredimg"
                    alt={item?.title || 'Property Image'}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className='text-mycolor'>Rs. {item?.price} / Month</p>
                    <h5 className="card-title">{item?.title}</h5>
                    <p className="card-text featuredp">{item?.description}</p>
                    <div className='row py-2 mt-auto'>
                      <div className='col-4 featureddiv'>
                        <p className='m-0 ps-2'>{item?.bedrooms || 'N/A'} <IoBedOutline /></p>
                        <span className='ps-2'>Bedrooms</span>
                      </div>
                      <div className='col-4 featureddiv'>
                        <p className='m-0 ps-2'>{item?.bathrooms || 'N/A'} <FaBath /></p>
                        <span className='ps-2'>Washroom</span>
                      </div>
                      <div className='col-4 featureddivsp'>
                        <p className='m-0 ps-2'>{item?.area || '3000'} <PiMapPinAreaFill /></p>
                        <span className='ps-2'>sq/ft</span>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteProperty(item?._id)} className='btn btn-outline-danger p-1'>Delete</button>
                  </div>
                </div>
              </div>
            ))}
            {listData?.length === 0 && (
              <h1 className='text-center'>No Record Found</h1>
            )}
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </>
  );
};

export default AdminPropertyList;
