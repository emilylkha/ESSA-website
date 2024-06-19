'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface RotatingImagesProps {
  images: string[];
  height: number;
  title: string;
}

const RotatingImagesHeader: React.FC<RotatingImagesProps> = ({ images, height, title}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  return (
  <div className={`flex h-[${height}vh] w-full relative overflow-hidden`}>
    <Image className="object-cover"src={images[currentImageIndex]} alt="Rotating Image" fill={true} priority/>;
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-emerald-950"></div>
    <div className="absolute bottom-0 left-0 w-full p-10">
      <h1 className="text-white text-6xl">{title}</h1>
    </div>
  </div> )
};

export default RotatingImagesHeader;
