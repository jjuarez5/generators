import React from 'react';
import { motion } from 'framer-motion';

const LandingScreen = () => (
  // <motion.section
  //   initial={{ opacity: 0, y: 100 }}
  //   whileInView={{ opacity: 1, y: 0 }}
  //   transition={{ duration: 0.8 }}
  //   viewport={{ once: false }}
  //   className="bg-blue-600 text-white text-center py-20 px-4 sm:px-6 overflow-hidden"
  // >
  <div id="landing" className="bg-indigo-600 text-white text-center py-20 px-4 sm:px-6 overflow-hidden">
    <div className="overflow-hidden mb-5">
      <div className="text-4xl sm:text-5xl font-bold whitespace-nowrap inline-block">
        We Build Websites That Convert
      </div>
    </div>

    <div className="overflow-hidden mb-10">
      <div className="animate-scroll-left text-lg sm:text-xl whitespace-nowrap inline-block">
        Launch your online presence in days, not weeks.
      </div>
    </div>

<a
  href="#contact"
  className="bg-white text-indigo-600 px-6 py-3 rounded font-semibold 
             hover:bg-white 
             hover:shadow-[0_0_10px_#c084fc,0_0_20px_#c084fc,0_0_30px_#c084fc] 
             transition duration-300 ease-in-out 
             animate-pulse-glow inline-block"
>
  Get Started
</a>


  {/* </motion.section> */}
  </div>
);

export default LandingScreen;
