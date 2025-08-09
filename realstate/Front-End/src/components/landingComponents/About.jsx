import React from 'react';
import NavBar from './NavBar';
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaCarAlt } from "react-icons/fa";

const About = () => {
  return (
    <>
      <NavBar />
      <section className="about-section container py-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="badge bg-danger-subtle text-danger mb-2 px-3 py-1 rounded-pill">About Us</span>
            <h2 className="fw-bold mb-3">Today Sells Properties</h2>
            <p className="text-muted">
              Houzez allows you to design unlimited panels and real estate custom forms to capture leads and keep record of all information.
            </p>
            <ul className="list-unstyled text-muted mb-4">
              <li>✔ Live Music Concerts at Luviana</li>
              <li>✔ Our SecretIsland Boat Tour is Just for You</li>
              <li>✔ Private Beach Access and Yoga Sessions</li>
              <li>✔ Modern, Secure, and Elegant Designs</li>
            </ul>

            {/* Stats */}
            <div className="row text-center fw-medium text-dark mb-4">
              <div className="col-3 about-aminities">
                <strong>3 <IoBedOutline /></strong> <br /> Bedrooms
              </div>
              <div className="col-3 about-aminities">
                <strong>2 <FaBath /></strong> <br /> Bathrooms
              </div>
              <div className="col-3 about-aminities">
                <strong>2 <FaCarAlt /></strong> <br /> Car Parking
              </div>
              <div className="col-3">
                <strong>3450 <PiMapPinAreaFill /></strong> <br /> Sq Ft
              </div>
            </div>

            {/* 3 Images below stats */}
            <div className="row g-2 mt-5 image-grid">
              <div className="col-md-4 ">
                <img src="/img/3.jpg.jpeg" alt="Amenity 1" className="img-fluid rounded" />
              </div>
              <div className="col-md-4">
                <img src="/img/13.jpg.jpeg" alt="Amenity 2" className="img-fluid rounded" />
              </div>
              <div className="col-md-4">
                <img src="/img/2.jpg.jpeg" alt="Amenity 3" className="img-fluid rounded" />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="mb-3">
              <img src="/img/9.png" className="img-fluid rounded w-100" alt="Main Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
