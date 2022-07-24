import "./Men.css";
import { useState, useEffect } from "react";
import imagesData from "../shared/menImagesData";

const Men = ({ click }) => {
  return (
    <div className="men">
      <div className="custom-shape-divider-top-men">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <linearGradient id="grad1">
            <stop offset="0%" stopColor="#434343" />
            <stop offset="100%" stopColor="#434343" />
          </linearGradient>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="men" id="men" onClick={click}>
        <div className="men-container">
          <div className="text-container">
            <div className="men-title">
              <h1>Men</h1>
            </div>
            <div className="men-cards">
              {imagesData.map((card, i) => (
                <div className="single-card" key={i}>
                  <img src={card} alt="about-img" className="img" />
                  <p className="header">Lorem, ipsum dolor.</p>
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <p className="price">100$</p>
                </div>
              ))}
            </div>
            <div className="men-button">
              <a href="/">men Collection</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
