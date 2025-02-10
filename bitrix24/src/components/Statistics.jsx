import React from "react";

function Statistics() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Bitrix24 is the driving force behind 15 million businesses worldwide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* First Stat */}
          <div className="text-center">
            <p
              style={{ color: "#00AEEF" }}
              className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-semibold"
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold inline-block mr-2">
                +43%
              </span>
              <span className="text-lg sm:text-xl font-bold text-black inline-block">
                lead conversion rate
              </span>
            </p>
          </div>

          {/* Second Stat */}
          <div className="text-center">
            <p
              style={{ color: "#00AEEF" }}
              className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-semibold"
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold inline-block mr-2">
                +26%
              </span>
              <span className="text-lg sm:text-xl font-bold text-black inline-block">
                task completion rate
              </span>
            </p>
          </div>

          {/* Third Stat */}
          <div className="text-center">
            <p
              style={{ color: "#00AEEF" }}
              className="text-4xl sm:text-5xl lg:text-6xl text-blue-600 font-semibold"
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl font-bold inline-block mr-2">
                +32%
              </span>
              <span className="text-lg sm:text-xl font-bold text-black inline-block">
                employee engagement rate
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
