import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can also use Heroicons or FontAwesome

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">YourBrand</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#contact" className="hover:underline">Contact</a>
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
        <div className="md:hidden px-6 pb-4 space-y-2 bg-gray-800">
          <a href="#about" className="block py-2 border-b border-gray-700 hover:underline">About</a>
          <a href="#gallery" className="block py-2 border-b border-gray-700 hover:underline">Gallery</a>
          <a href="#contact" className="block py-2 hover:underline">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
