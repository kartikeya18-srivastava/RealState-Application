import React, { useEffect, useState } from 'react';
import NavBar from '../landingComponents/NavBar';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminContactUsList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/contact-list');
      if (response?.data?.code === 200) {
        setList(response.data.data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const show = (message) => {
    Swal.fire({
      title: "Full Message",
      text: message,
      icon: "info"
    });
  };

  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <h2 className="text-center text-danger mb-4">Contact Messages</h2>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.subject}</td>
                    <td>
                      <button className="btn btn-sm btn-link text-primary p-0" onClick={() => show(item?.message)}>
                        {item?.message?.length > 30 ? item?.message?.slice(0, 30) + "..." : item?.message}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminContactUsList;
