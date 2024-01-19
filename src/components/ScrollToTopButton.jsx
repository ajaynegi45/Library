import React, { useState, useEffect } from "react";
import '../assets/styles/ScrollToTopButton.css'
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    setIsVisible(false); // Hide the button when navigating to a new route
  }, [location]);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <i class="fa-solid fa-angle-up"></i>
    </button>
  );
};

export default ScrollToTop;
