// Testimonials.jsx componentimport React from 'react';

const Testimonials = () => (
  <section id="testimonials" className="py-16 px-4 sm:px-6 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <p className="italic mb-2">“They built me a beautiful site in days. Super professional.”</p>
        <p className="font-semibold">— Jane D., Shopify Seller</p>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <p className="italic mb-2">“I didn’t know where to start. This made it easy!”</p>
        <p className="font-semibold">— Omar B., Fitness Coach</p>
      </div>
      <div className="bg-white p-6 rounded shadow col-span-full text-center text-gray-500 italic mt-6">
        Google reviews integration coming soon...
      </div>
    </div>
  </section>
);

export default Testimonials;
