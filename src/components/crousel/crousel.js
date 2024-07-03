'use client'
import { GoArrowRight } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const images = [
    '/images/iphone-slide-1.png',
    '/images/iphone-slide-2.png',
    '/images/iphone-slide-3.png',
    '/images/iphone-slide-4.png',
    '/images/iphone-slide-5.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden bg-black">
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative flex justify-center items-center"
          >
            <div className="w-3/4 h-3/4 relative">
              <Image
                src={image}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="absolute top-0 left-10 w-1/3 h-full flex items-center justify-start p-4">
              <div className="text-white text-left">
                <p className="flex items-center mb-5"><FaApple className="text-3xl md:text-5xl mr-2" /> iPhone 14 Series </p>
                <p className="text-lg md:text-5xl font-medium mb-2">Up to 10%</p>
                <p className="text-lg md:text-5xl font-medium mt-2">off Voucher</p>
                <div className="mt-4 flex items-center space-x-1">
                  <button className="px-4 py-2 underline text-white rounded">Shop Now</button>
                  <GoArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center p-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
