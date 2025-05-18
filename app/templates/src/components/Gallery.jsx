import React from 'react';
import barber from '../images/barber.webp';
import catering from '../images/catering.webp';
import gavel from '../images/gavel.webp';
import handyman from '../images/handyman.jpeg';

const images = [barber, catering, gavel, handyman];

const Gallery = () => (
  <section id="gallery" className="py-16 px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {images.map((src, index) => (
        <div key={index} className="w-full h-48 overflow-hidden rounded shadow">
          <img
            src={src}
            alt={`Gallery ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
