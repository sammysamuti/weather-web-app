import React from 'react'

function About() {
  return (
    <>
      <div className="w-full text-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white font-mono p-10">
        <h1 className="font-extrabold text-5xl  text-white mb-8 tracking-wider">
          About Us
        </h1>
        <p>
          Welcome to WeatherApp, a well trusted source for reliable weather
          updates. WeatherApp isn't just another weather tool, it's a go-to
          solution for accurate, real-time weather updates whenever you need
          them. We combine advanced data analytics with a user-friendly
          interface, delivering forecasts that help you stay prepared, whether
          you're planning your day, traveling, or looking ahead for the week.
          With a focus on precision, simplicity, and accessibility, WeatherApp
          ensures that you're always informed of changing conditions. We take
          pride in offering a service that puts reliability first, helping you
          navigate your world with confidence.
        </p>
      </div>
    </>
  );
}

export default About