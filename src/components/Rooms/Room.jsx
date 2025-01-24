import React from "react";
import "./Room.css";
import image_1 from "../../assets/Image.png";
import image_2 from "../../assets/Image2nd.png";
import image_3 from "/Image3rd.png";

const Room = () => {
  return (
    <div className="app">
      <div className="title">
        <h2>Shop By Room</h2>
        <p data-aos="fade-up">
          Craft a space that beckons your return. Explore our meticulously
          curated collections, tailored with your preferences in mind.
        </p>
      </div>
      <div className="programs">
        <div
          className="program"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={image_1} alt="" />
          <div className="caption">
            <p>LIVING ROOM</p>
          </div>
          <p className="desc">
            Portrait of Home Shop<span> The Entry way</span>
          </p>
        </div>
        <div className="program " data-aos="fade-up" data-aos-duration="1000">
          <img src={image_2} alt="" />
          <div className="caption">
            <p>BED ROOM</p>
          </div>
          <p className="desc">
            The Pride Room of a Home Shop<span> The Living Room</span>
          </p>
        </div>
        <div
          className="program"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={image_3} alt="" />
          <div className="caption">
            <p>DINNING ROOM</p>
          </div>
          <p className="desc">
            Gather Together and Build Memories Shop<span>The Dining</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Room;
