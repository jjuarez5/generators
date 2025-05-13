import React from 'react';

const images = [
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
];

const Gallery = () => (
  <section id="gallery" className="py-16 px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery ${index}`} className="rounded shadow" />
      ))}
    </div>
  </section>
);

export default Gallery;
