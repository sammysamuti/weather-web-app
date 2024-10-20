import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="w-full md:w-[80%] lg:w-[65%] h-[30rem] md:h-[25rem] lg:h-[31rem]  glassCard p-4 m-6 md:m-0">
      <div className="flex justify-center items-center gap-4 ">
        <img
          src={icon}
          alt="weather_icon"
          className="w-22 h-22 md:w-16 md:h-16 lg:w-32 lg:h-32 "
        />
        <p className="font-bold text-3xl md:text-3xl lg:text-4xl">
          {temperature} &deg;C
        </p>
      </div>

      <div className="font-bold text-center text-xl">{place}</div>

      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>

      {/* Wind Speed and Humidity */}
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold  bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900  shadow rounded-lg">
          Wind Speed <p className="font-normal">{windspeed} km/h</p>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg  bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>

      {/* Heat Index */}
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Heat Index</p>
        <p className="text-lg">{heatIndex ? heatIndex : "N/A"}</p>
      </div>

      {/* Conditions */}
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl md:text-lg lg:text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
