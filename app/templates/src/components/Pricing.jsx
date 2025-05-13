import React from 'react';

const Pricing = () => (
  <section id="pricing" className="py-16 px-6 bg-white text-center">
    <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
    <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6">
  <div className="border rounded p-6 w-full sm:w-[80%] md:w-[45%] max-w-sm mx-auto">
        <h3 className="text-xl font-semibold mb-4">Starter</h3>
        <p className="text-3xl font-bold mb-4">$299</p>
        <ul className="text-left mb-6">
          <li>✔ 1-page site</li>
          <li>✔ Contact form</li>
          <li>✔ Responsive design</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Choose Plan</button>
      </div>
      <div className="border rounded p-6 w-full max-w-sm mx-auto">
        <h3 className="text-xl font-semibold mb-4">Pro</h3>
        <p className="text-3xl font-bold mb-4">$599</p>
        <ul className="text-left mb-6">
          <li>✔ Multi-page site</li>
          <li>✔ SEO meta tags</li>
          <li>✔ Google Analytics integration</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Choose Plan</button>
      </div>
    </div>
  </section>
);

export default Pricing;
