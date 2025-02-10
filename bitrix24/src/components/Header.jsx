import React from "react";

function Header() {
  return (
    <div className="mx-8 py-12 text-center bg-purple-50">
      <a href="https://your-link-here.com">
        <img
          src="images/ai.png"
          alt="Clickable Image"
          className="mx-auto w-full max-w-[90%] rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        />
      </a>
    </div>
  );
}

export default Header;
