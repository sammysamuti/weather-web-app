import React from "react";
import Slider from "react-slick";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";

function Services() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    arrows:false,
  };

  return (
    <>
      <div className="w-full text-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white font-mono p-10">
        <h1 className="font-extrabold text-5xl text-white mb-8 tracking-wider">
          Our Services
        </h1>
        <p className="mb-8">
          Get to view all weather details of your choice with real-time updates.
        </p>

        {/* Image Carousel */}
        <Slider {...settings} className="w-full">
          <div className="p-5">
            <img src={sun} alt="sunny" className="w-24 h-24 mx-auto" />
          </div>
          <div className="p-5">
            <img src={cloud} alt="cloudy" className="w-24 h-24 mx-auto" />
          </div>
          <div className="p-5">
            <img src={fog} alt="foggy" className="w-24 h-24 mx-auto" />
          </div>
          <div className="p-5">
            <img src={rain} alt="rainy" className="w-24 h-24 mx-auto" />
          </div>
          <div className="p-5">
            <img src={snow} alt="snowy" className="w-24 h-24 mx-auto" />
          </div>
          <div className="p-5">
            <img src={storm} alt="stormy" className="w-24 h-24 mx-auto" />
          </div>
          <div className="p-5">
            <img src={wind} alt="windy" className="w-24 h-24 mx-auto" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Services;
