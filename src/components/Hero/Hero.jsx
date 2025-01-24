import React from "react";
import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slider1 } from "../../assets/asset";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {Slider1.map((data, i) => (
          <div className="header" key={i}>
            <img className="hero-img" src={data.image} alt="" />
            <div className="header-content">
              <h2
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
              >
                {data.name1}
              </h2>
              <div>
                <span>{data.name2}</span>
                <span className="media-service">{data.name3}</span>
                <span className="media-service">{data.name4}</span>
                <span>{data.name5}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
