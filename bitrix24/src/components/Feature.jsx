import React from "react";

function Feature({ src, alt, text }) {
  return (
    <div className="text-center flex flex-col items-center justify-center p-6">
      <img
        src={src}
        alt={alt}
        className="mx-auto max-w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      />
      <p className="text-gray-700 mt-4 text-lg sm:text-xl font-medium">
        {text}
      </p>
    </div>
  );
}

export default Feature;
