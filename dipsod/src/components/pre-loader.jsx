import React from "react";
import "../style/pre-loader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="shield-container">
        <svg
          className="shield"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 2C20 8 8 10 8 10v18c0 20 24 34 24 34s24-14 24-34V10s-12-2-24-8z"
            fill="#d1ad84"
            stroke="#97754f"
            strokeWidth="2"
          >
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <div className="text">СОДЕЙСТВИЕ</div>
      </div>
    </div>
  );
};

export default Preloader;
