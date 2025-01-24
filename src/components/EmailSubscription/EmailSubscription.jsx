import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./EmailSubscription.css";

const EmailSubscription = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="email-subscription-container" data-aos="zoom-in">
      <div className="email-container">
        <div className="email-content">
          <h1 className="email-title">Get Notified About New Products</h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
            data-aos="fade-up"
          />
          <button className="email-submit-btn" data-aos="fade-up">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
