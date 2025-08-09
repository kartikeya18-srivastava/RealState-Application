import React, { useEffect, useState } from 'react';
import NavBar from '../landingComponents/NavBar';
import axios from 'axios';

const UserBoughtList = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const UserData = JSON.parse(localStorage.getItem('userInfo'));
      console.log("UserData from localStorage:", UserData);

      if (!UserData?._id) {
        setError('User not logged in. Please login first.');
        return;
      }

      const response = await axios.post('http://localhost:9000/api/user-bought-list', {
        userId: UserData._id
      });

      console.log("API Response:", response?.data);

      if (response?.data?.code === 200) {
        setList(response.data.data);
      } else {
        setError('Failed to fetch property data.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred while fetching data.');
    }
  };

  return (
    <>
      <NavBar />

      <div className="container mt-4">
        <h1 className="text-danger text-center mb-4">User Bought List</h1>

        {error && <p className="text-center text-danger">{error}</p>}

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Area</th>
                <th>Description</th>
                <th>Location</th>
                <th>Media</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((item, index) => (
                  <tr key={item._id || index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.area}</td>
                    <td>{item.description}</td>
                    <td>{item.location}</td>
                    <td>
                      <img
                        height="60"
                        width="100"
                        src={`http://localhost:9000/img/${item.pic}`}
                        alt="property"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                !error && <tr><td colSpan="7" className="text-center">No Record Found!</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserBoughtList;
