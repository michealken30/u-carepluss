import React from "react";
import "./Testimonials.css";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "../../assets/asset";

const Test = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials" data-aos="fade-up">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div>
              <img
                src={testimonial.image || "https://via.placeholder.com/150"}
                alt=""
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-content">
              <div className="testimonial-text-wrapper">
                <p className="testimonial-text">"{testimonial.testimonial}"</p>
                <h1 className="testimonial-name">{testimonial.name}</h1>
              </div>
            </div>
            <p className="testimonial-quote">&#8221;</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Test;
