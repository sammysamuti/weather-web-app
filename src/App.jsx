import { useState, useEffect } from "react";
import axios from "axios";
import search from "./assets/icons/search.svg";
import MiniCard from "./Components/MiniCard";
import WeatherCard from "./Components/WeatherCard";
import BackgroundLayout from "./Components/BackgroundLayout";
import Header from "./components/Header";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Addis Ababa");
  const [thisLocation, setLocation] = useState("");
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const isZipCode = /^\d{5}$/.test(place);
    let params;

    if (isZipCode) {
      params = {
        aggregateHours: "24",
        postalCode: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
      };
    } else {
      params = {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
      };
    }

    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params,
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (error) {
      console.error(error);
      setError("This place does not exist or check your network connection.");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  const submitCity = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setPlace(input);
      setInput("");
    }
  };

  return (
    <>
      <div className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white font-mono pt-24 md:pt-0">
        {/* Header */}
        <Header />

        {/* Search Section */}
        <div
          className="flex justify-center items-center flex-col md:flex-row"
          id="home"
        >
          {/* Welcome and Search Form */}
          <div className="flex justify-center items-center w-full md:w-[50%] md:pl-7 lg:pl-5">
            <div className="text-center">
              <h1 className="font-extrabold text-xl md:text-2xl lg:text-5xl text-white mb-8 tracking-wider">
                Welcome to Weather App
              </h1>
              <form
                onSubmit={submitCity}
                className="bg-white w-[90%] md:w-full p-2 sm:p-3 ml-4 mr-4 sm:ml-6 sm:mr-6 md:ml-0 md:mr-0 flex items-center rounded-full shadow-xl border-2 border-gray-300 focus-within:border-blue-500 transition-all duration-500 ease-in-out transform hover:scale-10"
              >
                <img
                  src={search}
                  alt="search"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Search by city or zip code"
                  className="focus:outline-none w-full text-sm sm:text-lg text-gray-800 placeholder-gray-400 bg-transparent ml-2"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="ml-2 sm:ml-3 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full transition duration-300 ease-in-out"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Weather Data */}
          <div className="flex justify-center items-center w-full md:w-[50%] mb-12 mt-20">
            <WeatherCard
              place={thisLocation}
              windspeed={weather.wspd}
              humidity={weather.humidity}
              temperature={weather.temp}
              heatIndex={weather.heatindex}
              iconString={weather.conditions}
              conditions={weather.conditions}
            />
          </div>
        </div>
      </div>

      {/* Pop-Out Alert Box */}
      {error && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative bg-red-600 text-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center transform scale-105 transition duration-500 ease-in-out">
            {/* Close Icon */}
            <span
              className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-gray-200 transition duration-300"
              onClick={() => setError(null)}
            >
              &times;
            </span>
            <h2 className="font-bold text-2xl mb-4">Error</h2>
            <p className="mb-6 text-lg">{error}</p>
          </div>
        </div>
      )}

      {/* Weather Forecast Cards */}
      <BackgroundLayout weather={weather} />
      <div className="flex justify-center gap-8 flex-wrap w-full mt-12 mb-12">
        {values?.slice(1, 6).map((curr) => (
          <MiniCard
            key={curr.datetime}
            time={curr.datetime}
            temp={curr.temp}
            minTemp={curr.mint}
            maxTemp={curr.maxt}
            iconString={curr.conditions}
          />
        ))}
      </div>

      {/* Additional Sections */}
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <Footer />
    </>
  );
}

export default App;
