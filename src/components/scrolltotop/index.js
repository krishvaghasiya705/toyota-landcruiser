import React, { useState, useEffect } from 'react';
import "./scrolltotop.scss";
import tireimage from "../../assets/icons/tireimage.png";
import { Tooltip } from 'react-tooltip';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      <div id="scroll-to-top" className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}>
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <div className="Tireimage">
            <img src={tireimage} alt="tireimage" />
          </div>
        </button>
      </div>
      <Tooltip
        anchorSelect="#scroll-to-top"
        content="Go Back To Top!"
      />
    </div>
  );
};

export default ScrollToTopButton;