import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import React, { useRef, useState } from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
  return (
    <div id="Testimonial">
      <h2 className="testimonial">Testimonials</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card-contanier">
            <img
              id="review-jamie-pic"
              src="../Images/jamie1.jpg"
              alt="jamie-review-pic"
            />
            <h2 id="person-name">Jamie Ahmed</h2>
            <h4 id="person-postion">"Software engeener"</h4>
            <p id="person-description">
              <sup>
                <FaQuoteLeft className="quote" />
              </sup>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <sub>
                <FaQuoteRight className="quote" />
              </sub>
            </p>
            <div className="stars">
              <span className="star-one ">
                <BsStarFill />
              </span>
              <span className="star-two ">
                {" "}
                <BsStarFill />
              </span>
              <span className="star-three ">
                {" "}
                <BsStarFill />
              </span>
              <span className="star-four">
                {" "}
                <BsStarHalf />
              </span>
              <span className="star-five">
                <BsStarFill />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-contanier">
            <img
              id="review-jamie-pic"
              src="../Images/jamie1.jpg"
              alt="jamie-review-pic"
            />
            <h2 id="person-name">Jamie Ahmed</h2>
            <h4 id="person-postion">"Software engeener"</h4>
            <p id="person-description">
              <sup>
                <FaQuoteLeft className="quote" />
              </sup>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <sub>
                <FaQuoteRight className="quote" />
              </sub>
            </p>
            <div className="stars">
              <span className="star-one ">
                <BsStarFill />
              </span>
              <span className="star-two ">
                {" "}
                <BsStarFill />
              </span>
              <span className="star-three ">
                {" "}
                <BsStarFill />
              </span>
              <span className="star-four">
                {" "}
                <BsStarHalf />
              </span>
              <span className="star-five">
                <BsStarFill />
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
