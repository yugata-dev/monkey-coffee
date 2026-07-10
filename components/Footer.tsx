import React from "react";

function Footer() {
  return (
    <footer className="bg-[#2C1E1A] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand */}
          <div>
            <h4 className="text-3xl font-serif mb-3">Monkey Coffee</h4>
            <p className="text-gray-300 text-sm font-sans">
              Crafting moments, one cup at a time.
            </p>
          </div>

          {/* Middle: Menu */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Menu
            </h5>
            <ul className="text-gray-300 text-sm font-sans space-y-2">
              <li>
                <a href="#signatures" className="hover:text-white transition">
                  Our Signatures
                </a>
              </li>
              <li>
                <a href="#non-coffee" className="hover:text-white transition">
                  Non Coffee
                </a>
              </li>
              <li>
                <a href="#food" className="hover:text-white transition">
                  Food
                </a>
              </li>
              <li>
                <a href="#pastry" className="hover:text-white transition">
                  Pastry
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Connect */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Connect
            </h5>
            <ul className="text-gray-300 text-sm font-sans space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm font-sans">
          © 2026 Monkey Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
