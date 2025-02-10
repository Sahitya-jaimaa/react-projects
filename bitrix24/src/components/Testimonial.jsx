import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Testimonial({ name, role, img, text }) {
  return (
    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg max-w-md mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl relative">
      <div className="flex items-center mb-6">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-200 object-cover"
        />
        <div className="ml-4 sm:ml-6">
          <p className="text-lg sm:text-xl font-semibold text-gray-800">
            {name}
          </p>
          <p className="text-sm sm:text-base text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
        {text}
      </p>

      {/* Blue arrow button with border color set to #00aeef */}
      <div
        style={{
          color: "#00aeef",
          borderColor: "#00aeef", // Set border color to blue
          borderWidth: "2px", // Optional: Add border width for visibility
        }}
        className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
      >
        <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
      </div>
    </div>
  );
}

export default Testimonial;
