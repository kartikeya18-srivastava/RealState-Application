import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    name: 'Jacob William',
    role: 'SELLING AGENTS',
    img: '/img/1.jpg_1.jpeg',
    text: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud.'
  },
  {
    name: 'Kelian Anderson',
    role: 'SELLING AGENTS',
    img: '/img/2.jpg_1.jpeg',
    text: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud.'
  },
  {
    name: 'Adam Joseph',
    role: 'SELLING AGENTS',
    img: '/img/3.jpg_2.jpeg',
    text: 'Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud.'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials py-5">
      <div className="container text-center">
        <p className="badge  text-danger mb-2 testimonial-heading">Our Testimonial</p>
        <h2 className="fw-bold mb-5">Clients Feedback</h2>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="testimonial-card p-4 shadow-sm rounded bg-white">
                <div className="quote mb-3">❝</div>
                <p className="text-muted">{testimonial.text}</p>
                <div className="d-flex align-items-center mt-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
