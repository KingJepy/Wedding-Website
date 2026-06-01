import React, { useState, useEffect } from "react";
import "./Carousel.css";
import graduationpic from '../assets/graduationpic.jpg';
import oldpic from '../assets/oldpic.jpg';
import proposal from '../assets/proposal.jpg';
import prompic from '../assets/prompic.jpg';

function Carousel() {
  const images = [
    graduationpic,
    oldpic,
    proposal,
    prompic
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 5000); // change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;