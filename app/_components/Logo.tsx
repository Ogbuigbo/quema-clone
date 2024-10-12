'use client'

import React from 'react';
import Image from 'next/image'; // If you're using Next.js

const Logo = () => {
  const logos = [
    {
      src: 'https://tinypic.host/images/2024/10/12/cropped-DEslog-ENERGY-LOGO-300x160.png',
      alt: 'DEslog Energy Logo',
    },
    {
      src: 'https://tinypic.host/images/2024/10/12/Mikano_Logo_transparent.png',
      alt: 'Mikano Logo',
    },
    {
      src: 'https://tinypic.host/images/2024/10/12/Screen-Shot-2020-05-13-at-11_36_11-AM_pn.png',
      alt: 'Client 3 Logo',
    },
    {
        src: 'https://tinypic.host/images/2024/10/12/logo-1.png',
        alt: 'Geolind',
      },
  ];

  return (
    <div className="text-center my-12 ">
      <h2 className='text-4xl font-bold mb-6'>Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-20 items-center">
        {logos.map((logo, index) => (
          <div className="logo-item flex flex-wrap gap-8 items-center" key={index}>
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={150} // Adjust based on the size you need
              height={80} 
              className='h-16 w-16  md:h-20 md:w-20 xl:w-full xl:h-full object-contain transition-transform duration-300 hover:scale-11'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
