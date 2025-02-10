import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import the left arrow icon
import {
  faFacebookF,
  faApple,
  faTwitter,
  faLinkedin,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { FcGoogle } from "react-icons/fc";
import "../index.css"; // Ensure the path to index.css is correct

function Registration() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left image section */}
      <div className="hidden lg:block w-1/2 bg-cover bg-center relative">
        {/* Back to Site link in the top right */}
        <a
          href="#"
          className="absolute top-4 right-4 text-white text-lg flex items-center space-x-2 hover:text-gray-200 transition duration-300 z-10"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-2xl transform transition duration-200 hover:translate-x-2"
          />
          <span>back to site</span>
        </a>

        <img
          className="w-full h-full object-cover"
          src="images/left-register.png"
          alt="Registration"
        />
      </div>

      {/* Right content section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center px-6 sm:px-8 py-6 sm:py-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#333] tracking-wide text-center sm:text-left mt-8 sm:mt-10 max-w-[510px]">
          Bitrix24 Registration
        </h2>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-4" />

        {/* Subtitle */}
        <p className="text-[#777D86] tracking-wide mt-4 text-center sm:text-left">
          Use your social account to register
        </p>

        {/* Social media buttons */}
        <div className="flex flex-wrap space-x-4 mt-6 mb-4 justify-center sm:justify-start">
          {/* Facebook */}
          <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
          </button>

          {/* Google */}
          <button className="flex items-center justify-center text-white p-4 rounded-full shadow-lg bg-white hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-gray-600 font-semibold">Google</span>
          </button>

          {/* Apple */}
          <button className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            <FontAwesomeIcon icon={faApple} className="text-2xl" />
          </button>

          {/* Twitter */}
          <button className="bg-blue-400 text-white p-4 rounded-full shadow-lg hover:bg-blue-500 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </button>

          {/* LinkedIn */}
          <button className="bg-blue-300 text-white p-4 rounded-full shadow-lg hover:bg-blue-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </button>

          {/* Microsoft */}
          <button className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 mb-2">
            <FontAwesomeIcon icon={faMicrosoft} className="text-2xl" />
          </button>
        </div>

        {/* OR separator */}
        <p className="mb-4 text-center text-gray-600">or</p>

        {/* Email input */}
        <div className="mb-4 w-full max-w-[450px]">
          <label
            htmlFor="email"
            className="block text-gray-800 text-sm font-medium mb-2"
          >
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-4 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
          />
        </div>

        {/* Terms and conditions text */}
        <p className="text-sm text-gray-600 mb-4 text-center sm:text-left">
          By registering, you confirm that you accept the{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 transition duration-300"
          >
            Terms of Service
          </a>{" "}
          and the{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 transition duration-300"
          >
            Privacy Policy
          </a>
          .
        </p>

        {/* Checkbox options */}
        <div className="flex flex-col mb-4 w-full max-w-[450px]">
          <label className="flex items-center text-sm mb-2">
            <input
              type="checkbox"
              className="mr-3 rounded-sm border-gray-300 text-green-500 focus:ring-2 focus:ring-green-400"
            />
            I want to receive product updates and special offers
          </label>
          <label className="flex items-center text-sm mb-2">
            <input
              type="checkbox"
              className="mr-3 rounded-sm border-gray-300 text-green-500 focus:ring-2 focus:ring-green-400"
            />
            I want to receive training materials
          </label>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-[600px] justify-center sm:justify-start mx-auto px-8 py-6">
          <button className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-500 transition duration-300 w-full sm:w-auto">
            REGISTER FOR FREE
          </button>
          <button className="bg-gray-300 text-black px-8 py-4 rounded-full hover:bg-gray-400 focus:ring-2 focus:ring-gray-500 transition duration-300 w-full sm:w-auto">
            I HAVE A COUPON
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
