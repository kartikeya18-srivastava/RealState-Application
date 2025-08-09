// ContactForm.jsx
import React from 'react';
import NavBar from './NavBar';
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2).max(200),
  email: yup.string().required('Email is required').email('Invalid email'),
  phone: yup.string().required('Phone is required').min(10, 'At least 10 digits'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:9000/api/contact', data);
      if (response?.data?.code === 200) {
        Swal.fire("Success", response.data.message, "success");
        reset();
        navigate('/');
      } else {
        Swal.fire("Error", response.data.message, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h2 className="text-center text-danger mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input type="text" className="form-control" {...register('name')} placeholder='Enter your name' />
                    </div>
                    <p className="text-danger">{errors?.name?.message}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input type="email" className="form-control" {...register('email')} placeholder='Enter your email' />
                    </div>
                    <p className="text-danger">{errors?.email?.message}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdCall /></span>
                      <input type="text" className="form-control" {...register('phone')} placeholder='Enter your number' />
                    </div>
                    <p className="text-danger">{errors?.phone?.message}</p>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" {...register('subject')} placeholder='Enter subject' />
                    <p className="text-danger">{errors?.subject?.message}</p>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea rows="4" className="form-control" {...register('message')} placeholder='Message'></textarea>
                    <p className="text-danger">{errors?.message?.message}</p>
                  </div>
                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-danger px-5 rounded-pill">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
