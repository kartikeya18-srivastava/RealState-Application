import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          {/* Logo and Info */}
          <div className="col-md-3">
            <h4 className="footer-logo text-orange">
              <FaMapMarkerAlt className="me-2" /> Quirex
            </h4>
            <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
            <ul className="list-unstyled small">
              <li><FaMapMarkerAlt className="me-2" /> Brooklyn, New York, United States</li>
              <li><FaPhoneAlt className="me-2" /> +0123-456789</li>
              <li><FaEnvelope className="me-2" /> example@example.com</li>
            </ul>
            <div className="social-icons mt-2">
              <FaFacebookF className="me-3 icon" />
              <FaTwitter className="me-3 icon" />
              <FaLinkedinIn className="me-3 icon" />
              <FaYoutube className="icon" />
            </div>
          </div>

          {/* Company Links */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              <Link to='/about'><li>About</li></Link>
              <li>Blog</li>
              <li>All Products</li>
              <li>Locations Map</li>
              <li>FAQ</li>
              <Link to='/contact'><li>Contact us</li></Link>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li>Order tracking</li>
              <li>Wish List</li>
              <Link to='/login'><li>Login</li></Link>
              <li>My account</li>
              <li>Terms & Conditions</li>
              <li>Promotional Offers</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-md-2">
            <h5 className="fw-bold mb-3">Customer Care</h5>
            <ul className="list-unstyled">
              <Link to='/login'><li>Login</li></Link>
              <li>My account</li>
              <li>Wish List</li>
              <li>Order tracking</li>
              <li>FAQ</li>
              <Link to='/contact'><li>Contact us</li></Link>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email*" />
              <button className="btn btn-orange" type="button">
                <FaPaperPlane />
              </button>
            </div>
            <p className="mb-1">We Accept</p>
            <img src="/img/payment-4.png" alt="Payments" className="img-fluid" />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row mt-4 pt-4 border-top border-secondary text-center text-md-start">
          <div className="col-md-6 small">
            © Company 2024. All Rights Reserved.
          </div>
          <div className="col-md-6 text-md-end small">
            <a href="#" className="text-white me-3">Terms & Conditions</a>
            <a href="#" className="text-white me-3">Claim</a>
            <a href="#" className="text-white">Privacy & Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
