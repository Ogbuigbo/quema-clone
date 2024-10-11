"use client";
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITEMS } from '../utils/data';

function ImageScroll() {
  // Custom Next Arrow
  const SampleNextArrow = (props: { onClick: any; }) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white cursor-pointer transition-transform transform hover:scale-110 hover:opacity-90"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        onClick={onClick}
        aria-label="Next Slide"
      >
        &#62;
      </div>
    );
  };

  // Custom Previous Arrow
  const SamplePrevArrow = (props: { onClick: any; }) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white cursor-pointer transition-transform transform hover:scale-110 hover:opacity-90"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        &#60;
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,  // Smoother transition
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",  // For smoother animations
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow onClick={undefined} />,
    prevArrow: <SamplePrevArrow onClick={undefined} />,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings} className="flex items-center justify-center mt-8">
        {ITEMS.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-2">
            <div className="shadow-md transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden">
              <Image 
                src={item.icons} 
                width={400} 
                height={400} 
                alt='splash' 
                className="object-cover md:h-auto h-[200px]"  
              />
              <div className="text-center mt-2 p-4">
                <h1 className="text-xl font-semibold text-gray-900 transition-colors ">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageScroll;
