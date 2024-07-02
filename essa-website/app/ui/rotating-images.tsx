'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface RotatingImagesProps {
  images: string[];
  interval: number;
}

const RotatingImages: React.FC<RotatingImagesProps> = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return <Image className="object-cover"src={images[currentImageIndex]} alt="Rotating Image" fill={true} priority/>;
};

export default RotatingImages;
