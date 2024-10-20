import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // IntersectionObserver to close the menu when sections come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            closeMenu(); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    // to get the sections
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const servicesSection = document.getElementById("services");

    // to observe the sections if they exist
    if (homeSection) observer.observe(homeSection);
    if (aboutSection) observer.observe(aboutSection);
    if (servicesSection) observer.observe(servicesSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
      if (aboutSection) observer.unobserve(aboutSection);
      if (servicesSection) observer.unobserve(servicesSection);
    };
  }, []);

  return (
    <>
      {/* Main Header */}
      <div
        className="fixed top-0 left-0 w-full bg-transparent z-40 h-16 font-mono"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="flex justify-between items-center h-full px-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <span className="text-3xl font-extrabold text-white cursor-pointer">
              WeatherApp
            </span>
          </div>

          {/* Centered Nav for Desktop */}
          <div className="hidden lg:flex justify-center items-center flex-grow">
            <nav className="flex space-x-8">
              <span
                className="text-lg text-white hover:text-blue-400 cursor-pointer transition duration-300"
                onClick={() =>
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </span>
              <span
                className="text-lg text-white hover:text-blue-400 cursor-pointer transition duration-300"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </span>
              <span
                className="text-lg text-white hover:text-blue-400 cursor-pointer transition duration-300"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Services
              </span>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white p-3 rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-gray-700 bg-opacity-50 backdrop-blur ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity lg:hidden z-30`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full bg-neutral-900 bg-opacity-90 w-[75%] transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden z-40`}
        >
          <div className="flex flex-col p-6 space-y-6 h-full">
            <button onClick={toggleMenu} className="self-end text-white">
              <FaTimes className="text-2xl" />
            </button>
            <nav className="flex flex-col space-y-4 font-mono">
              <span
                className="text-lg text-white cursor-pointer hover:text-blue-400 transition duration-300"
                onClick={() =>
                  document
                    .getElementById("home")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </span>
              <span
                className="text-lg text-white cursor-pointer hover:text-blue-400 transition duration-300"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </span>
              <span
                className="text-lg text-white cursor-pointer hover:text-blue-400 transition duration-300"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Services
              </span>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
