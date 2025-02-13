import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CatOne from "../../assets/cat_one.jpg";
import CatTwo from "../../assets/cat-two.jpg";
import CatThree from "../../assets/cat_three.jpg";
import FoxOne from "../../assets/fox_one.jpg";
import FoxTwo from "../../assets/fox_two.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [CatThree, CatTwo, CatOne, FoxOne, FoxTwo];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      {/* Image Display */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-b ml-16 mr-16 from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-500 ease-in-out">
        <div className="relative w-full h-80 md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide}`}
            className="max-w-[100%] w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* BUTTONS */}
      <button
        onClick={() =>
          setCurrentSlide((currentSlide - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-lg bg-white/20 p-2 h-full  hover:bg-white/40 transition"
      >
        <FaChevronLeft className="text-white text-2xl" />
      </button>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-lg bg-white/20 p-2 h-full hover:bg-white/40 transition"
      >
        <FaChevronRight className="text-white text-2xl" />
      </button>
    </div>
  );
};

export default Carousel;
