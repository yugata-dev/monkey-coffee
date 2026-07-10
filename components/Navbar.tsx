"use client";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white font-sans text-text-hover sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#hero" onClick={closeMenu}>
            <img
              src="image 11.png"
              alt="Logo"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "60px",
              }}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <a href="#menu">
            <li className="bg-bg-button hover:scale-110 transition-transform py-3 px-5 rounded-md">
              <p>MENUS</p>
            </li>
          </a>
          <a href="#about">
            <li className="bg-bg-button hover:scale-110 transition-transform py-3 px-5 rounded-md">
              <p>ABOUT</p>
            </li>
          </a>
          <a href="#contact">
            <li className="bg-bg-button hover:scale-110 transition-transform py-3 px-5 rounded-md">
              <p>VISIT US</p>
            </li>
          </a>
        </ul>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-bg-button transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-bg-button transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-bg-button transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu - Dropdown */}
      {isOpen && (
        <div className="md:hidden flex justify-center bg-white border-t border-gray-200">
          <ul className="flex flex-col  gap-4 px-6 py-6">
            <a href="#menu" onClick={closeMenu}>
              <li className="bg-bg-button hover:bg-bg-hover w-40 transition-colors py-3 rounded-md">
                <p className="font-semibold flex justify-center">MENUS</p>
              </li>
            </a>
            <a href="#about" onClick={closeMenu}>
              <li className="bg-bg-button hover:bg-bg-hover w-40 transition-colors py-3 rounded-md">
                <p className="font-semibold flex justify-center">ABOUT US</p>
              </li>
            </a>
            <a href="#contact" onClick={closeMenu}>
              <li className="bg-bg-button hover:bg-bg-hover w-40 transition-colors py-3 rounded-md">
                <p className="font-semibold flex justify-center">VISIT US</p>
              </li>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
