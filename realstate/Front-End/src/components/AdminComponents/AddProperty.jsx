import React from 'react';
import NavBar from '../landingComponents/NavBar';
import { FaUser, FaEnvelope, FaKey, FaBath } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const schemaproperty = yup.object().shape({
  title: yup.string().required("Title is required").min(2).max(20),
  price: yup.number().typeError("Enter valid price").required("Price is required"),
  bedrooms: yup.number().typeError("Enter valid number").required("Bedrooms are required"),
  bathrooms: yup.number().typeError("Enter valid number").required("Bathrooms are required"),
  area: yup.number().typeError("Enter valid area").required("Area is required"),
  location: yup.string().required("Location is required").min(2).max(100),
  description: yup.string().required("Description is required").min(2).max(200),
  pic: yup.mixed().required("Image is required")
});

const AddProperty = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schemaproperty),
  });

  const addProperty = async (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    formData.append('price', Number(data?.price));
    formData.append('bedrooms', Number(data?.bedrooms));
    formData.append('bathrooms', Number(data?.bathrooms));
    formData.append('area', Number(data?.area));
    formData.append('location', data?.location);
    formData.append('description', data?.description);
    formData.append('pic', data?.pic[0]);

    const response = await axios.post('http://localhost:9000/api/add-property', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response?.data?.code === 200) {
      Swal.fire({
        title: "Add Property",
        text: response?.data?.message,
        icon: "success"
      });
      reset();
    } else {
      Swal.fire({
        title: "Add Property",
        text: response?.data?.message,
        icon: "error"
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h2 className="text-center">Add Property</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form onSubmit={handleSubmit(addProperty)}>
                <div className="row g-3">

                  {/* Title */}
                  <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input {...register('title')} type="text" className="form-control" placeholder="Enter title." />
                    </div>
                    {errors?.title && <p className='text-danger'>{errors.title.message}</p>}
                  </div>

                  {/* Price */}
                  <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input {...register('price')} type="number" className="form-control" placeholder="Enter Price" />
                    </div>
                    {errors?.price && <p className='text-danger'>{errors.price.message}</p>}
                  </div>

                  {/* Bedrooms */}
                  <div className="col-md-6">
                    <label className="form-label">Bedrooms</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoBedOutline /></span>
                      <input {...register('bedrooms')} type="number" className="form-control" placeholder="No. of Bedrooms" />
                    </div>
                    {errors?.bedrooms && <p className='text-danger'>{errors.bedrooms.message}</p>}
                  </div>

                  {/* Bathrooms */}
                  <div className="col-md-6">
                    <label className="form-label">Bathrooms</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaBath /></span>
                      <input {...register('bathrooms')} type="number" className="form-control" placeholder="No. of Bathrooms" />
                    </div>
                    {errors?.bathrooms && <p className='text-danger'>{errors.bathrooms.message}</p>}
                  </div>

                  {/* Area */}
                  <div className="col-md-6">
                    <label className="form-label">Area (in sq.ft.)</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdCall /></span>
                      <input {...register('area')} type="number" className="form-control" placeholder="Enter area" />
                    </div>
                    {errors?.area && <p className='text-danger'>{errors.area.message}</p>}
                  </div>

                  {/* Location */}
                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input {...register('location')} type="text" className="form-control" placeholder="Location" />
                    </div>
                    {errors?.location && <p className='text-danger'>{errors.location.message}</p>}
                  </div>

                  {/* Description */}
                  <div className="col-md-6">
                    <label className="form-label">Description</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input {...register('description')} type="text" className="form-control" placeholder="Description" />
                    </div>
                    {errors?.description && <p className='text-danger'>{errors.description.message}</p>}
                  </div>

                  {/* Image Upload */}
                  <div className="col-md-6">
                    <label className="form-label">Image</label>
                    <div className="input-group">
                      <input {...register('pic')} type="file" className="form-control" />
                    </div>
                    {errors?.pic && <p className='text-danger'>{errors.pic.message}</p>}
                  </div>

                  {/* Submit */}
                  <div className="text-center mt-4">
                    <input type="submit" className="btn px-5 btn-login" value="Add Property" />
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

export default AddProperty;
