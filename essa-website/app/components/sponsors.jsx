import React from 'react';
import fs from 'fs';
import path from 'path';

const Sponsors = () => {
  const sponsorsDirectory = path.join(process.cwd(), 'public', 'sponsors');
  const images = fs.readdirSync(sponsorsDirectory)
    .filter((file) => file.endsWith('.png'))
    .map((file) => `/sponsors/${file}`);

  return (
    <div className="grid grid-cols-4 gap-2">
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Sponsor ${index + 1}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;