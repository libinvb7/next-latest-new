"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom"; 
import "swiper/css/effect-fade";
import "./style.css";

import { Pagination, Navigation, Autoplay, Zoom, EffectFade } from "swiper/modules";

export default function Slider() {
  const slides = [
    {
      id: 1,
      image: "/assets/banner/banner-three.jpg",
      sub: "KPI - Driven data insights",
      title: "Align strategy and operations with Balanced Scorecard software",
      desc: "Boost efficiency with Data Point real-time KPI insights and tailored frameworks.",
    },
    {
      id: 2,
      image: "/assets/banner/banner-two.jpg",
      sub: "KPI - Driven data insights",
      title: "Align strategy and operations with Balanced Scorecard software",
      desc: "Boost efficiency with Data Point real-time KPI insights and tailored frameworks.",
    },
    {
      id: 3,
      image: "/assets/banner/banner-four.jpg",
      sub: "KPI - Driven data insights",
      title: "Align strategy and operations with Balanced Scorecard software",
      desc: "Boost efficiency with Data Point real-time KPI insights and tailored frameworks.",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      effect="fade"
      autoplay={{
        delay: 10000,
        disableOnInteraction: false, 
      }}
      modules={[Autoplay, Pagination, Navigation,  EffectFade]} 
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh", 
            position: "relative", 
          }}
        >
          {/* Dark Overlay */}
          <div className="slider-overlay" ></div>

          <div className="slider-text" >
            <p
              className="text-center lg:text-left z-10 px-9 py-2 mb-3 inline-block w-fit rounded-[40px] border border-dashed border-white bg-white/20 text-white font-bold text-sm lg:text-lg swiper-animation"
              data-swiper-animation="fadeInDown"
              data-swiper-duration="1000"
            >
              {slide.sub}
            </p>
            <h2
              className="text-3xl  md:text-4xl  lg:text-7xl font-bold py-5 swiper-animation leading-tight"
              data-swiper-animation="fadeInUp"
              data-swiper-duration="1000"
            >
              {slide.title}
            </h2>
            <p
              className="py-3 swiper-animation"
              data-swiper-animation="fadeInUp"
              data-swiper-duration="1000"
              data-swiper-delay="500"
            >
              {slide.desc}
            </p>
            <div className="flex items-center justify-center gap-3 pt-5 flex-col md:flex-row">
              <button className="btn">Get Started</button>
              <button className="btn btn-orange">Book a Demo</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
