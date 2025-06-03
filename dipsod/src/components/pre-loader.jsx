import React, {useEffect} from "react";
import "../style/pre-loader.css";

const Preloader = () => {
  useEffect(() => {
    const prevColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#222";

    return () => {
      document.body.style.backgroundColor = prevColor;
    };
  }, []);

  return (
    <div className="pre">
      <div className="loader">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <div className="covers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
