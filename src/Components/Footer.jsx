import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-neutral-800 text-white p-6 font-mono">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Title and Info */}
            <div className="w-full mb-4 md:w-1/2">
              <p className="text-2xl font-bold mb-4">WeatherApp</p>
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <p className="text-neutral-500 text-sm md:text-base">
                  Our WeatherApp website is now also available in mobile app
                  where you can easily access it.
                </p>
              </div>
            </div>

            {/* Contents Section */}
            <div className="w-full md:w-1/4 mb-4">
              <div className="text-lg font-semibold mb-2">Contents</div>
              <ul className="space-y-2 text-neutral-500 text-sm md:text-base">
                <li>About Us</li>
                <li>Services</li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="w-full md:w-1/4 mb-4">
              <div className="text-lg font-semibold mb-2">Support</div>
              <ul className="space-y-2 text-neutral-500 text-sm md:text-base">
                <li>Help Center</li>
                <li>Feedback</li>
                <li>Report Bug</li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="w-full md:w-1/4 mb-4">
              <div className="text-lg font-semibold mb-2">Social Media</div>
              <div className="flex space-x-2">
                <a href="#" className="text-neutral-500">
                  Instagram
                </a>
                <a href="#" className="text-neutral-500">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <hr className="my-4 border-neutral-500" />

          <div className="flex flex-wrap justify-between text-sm md:text-base text-neutral-500">
            <div className="w-full sm:w-auto mb-2">
              © All Rights Reserved 2024
            </div>
            <div className="w-full sm:w-auto mb-2">Refund Policy</div>
            <div className="w-full sm:w-auto mb-2">Community Guidelines</div>
            <div className="w-full sm:w-auto mb-2">Terms & Conditions</div>
            <div className="w-full sm:w-auto mb-2">Privacy Policy</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
