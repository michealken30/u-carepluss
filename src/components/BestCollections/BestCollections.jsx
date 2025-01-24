import React, { useEffect } from "react";
import "./BestCollections.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

const BestCollections = ({ title, data, refetch, best, isLoading }) => {
  useEffect(() => {
    refetch();
  }, [data]);

  const bestCollections = (data || [])
    .filter((item) => item.best === `${best}`)
    .slice(0, 4);

  return (
    <section className="app">
      <div className="">
        <div className="r-head flexEndStart">
          <span className="text-bold bold2">{title}</span>
          <Link to="/products">
            <span className="primaryText media-view">View All</span>
          </Link>
        </div>

        {isLoading ? (
          <div className="flexCenter">
            <div className="spin"></div>
            <p>Loading Furnitures...</p>
          </div>
        ) : (
          <div className="flexCenter media-flex">
            {bestCollections.map((card) => (
              <Link
                to={`/details/${card._id}`}
                className="border2 "
                data-aos="fade-up"
                data-aos-delay={card.aosDelay}
              >
                <div key={card.id} className="flexColStart2 r-card2">
                  <div>
                    <img
                      src={`${API_BASE_URI}/images/` + card.image}
                      alt="home"
                      className="img-1"
                    />
                  </div>

                  <div className="wishlist2">
                    <span className="name-span">{card.name}</span>
                    <CiHeart className="mt-left" />
                  </div>
                  <span className="">{card.short}</span>
                  <span className="r-price">
                    <div className="old-price">
                      <span>$</span>
                      <span>
                        <del>{card.oldPrice}</del>
                      </span>
                    </div>

                    <div>
                      <span>$</span>

                      <span>{card.newPrice}</span>
                    </div>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
        <Link to="/products">
          <span className="primaryText view-all">View All</span>
        </Link>
      </div>
    </section>
  );
};

export default BestCollections;
