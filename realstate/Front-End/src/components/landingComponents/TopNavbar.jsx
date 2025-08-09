import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopNavbar = () => {
  return (
    <>
      
    <div className="top-navbar bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-3">
        <span><FaEnvelope className="me-1" /> info@webmail.com</span>
        <span><FaMapMarkerAlt className="me-1" /> 15/A, Nest Tower, NYC</span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <a href="/" className="text-white"><FaFacebookF /></a>
        <a href="/" className="text-white"><FaTwitter /></a>
        <a href="/" className="text-white"><FaInstagram /></a>
      </div>
    </div>

    </>
  )
}

export default TopNavbar
