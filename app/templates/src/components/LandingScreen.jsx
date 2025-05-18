import React from 'react';
import { motion } from 'framer-motion';

const LandingScreen = () => (
  <div id="landing" className="bg-white text-black text-center py-24 px-4 sm:px-6 overflow-hidden shadow-sm">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-5xl mb-3 font-bold"
    >
      We Build Websites That Convert.
    </motion.div>

    <p className="text-gray-500 animate-scroll-left text-base sm:text-lg mb-6">
      Clean code. Smart design. Built to convert.
    </p>

    <div className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto space-y-5 mb-10">
      <p>
        Whether you're a small business, startup, or creative professional, we craft clean, modern websites that reflect your brand and drive results.
      </p>
    </div>

    <a
      href="#contact"
      className="bg-blue-700 text-white px-6 py-3 rounded font-semibold 
                 hover:shadow-[0_0_10px_#c084fc,0_0_20px_#c084fc,0_0_30px_#c084fc] 
             transition duration-300 ease-in-out 
             animate-pulse-glow inline-block"
    >
      Get in Touch
    </a>
  </div>
);

export default LandingScreen;
