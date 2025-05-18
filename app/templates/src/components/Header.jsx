// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-slate-400 backdrop-blur-md shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
//         <h1 className="text-2xl font-bold">YourBrand</h1>

//         {/* Desktop nav */}
//         <nav className="hidden md:flex space-x-6">
//           <a href="#about" className="hover:underline">About</a>
//           <a href="#gallery" className="hover:underline">Gallery</a>
//           <a href="#contact" className="hover:underline">Contact</a>
//         </nav>

//         {/* Mobile toggle button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile nav links */}
//       {isOpen && (
//         <div className="md:hidden px-6 pb-4 space-y-2 bg-gray-900 bg-opacity-90">
//           <a href="#about" className="block py-2 border-b border-gray-700 hover:underline">About</a>
//           <a href="#gallery" className="block py-2 border-b border-gray-700 hover:underline">Gallery</a>
//           <a href="#contact" className="block py-2 hover:underline">Contact</a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-slate-400 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <a
          href="#"
          className="text-2xl font-bold hover:bg-white hover:text-indigo-600 hover:shadow-[0_0_10px_#c084fc] transition duration-300 rounded-md"
        >
          YourBrand
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#landing"
            className="hover:bg-white hover:text-indigo-600 hover:shadow-[0_0_10px_#c084fc] rounded-md px-3 py-1 transition duration-300"
          >
            About
          </a>
          <a
            href="#gallery"
            className="hover:bg-white hover:text-indigo-600 hover:shadow-[0_0_10px_#c084fc] rounded-md px-3 py-1 transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:bg-white hover:text-indigo-600 hover:shadow-[0_0_10px_#c084fc] rounded-md px-3 py-1 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav links */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-indigo-600 bg-opacity-90">
          <a
            href="#"
            className="block py-2 hover:bg-white hover:text-indigo-600 hover:shadow-[0_0_10px_#c084fc] rounded-md px-3 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:bg-white hover:text-indigo-600 hover:shadow-[0_0_10px_#c084fc] rounded-md px-3 transition duration-300"
          >
            About
          </a>
          <a
            href="#gallery"
            className="block py-2  hover:bg-white hover:text-indigo-600 hover:shadow-[0_0_10px_#c084fc] rounded-md px-3 transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="block py-2 hover:bg-white hover:text-indigo-600 hover:shadow-[0_0_10px_#c084fc] rounded-md px-3 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
