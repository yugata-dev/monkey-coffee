import "../public/image 11.png";

function Navbar() {
  return (
    <header className="bg-white font-sans text-text-hover sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#hero">
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
        <ul className="hidden md:flex gap-8">
          <a href="#menu">
            <li className="bg-bg-button hover:scale-110 transition-transform py-3 px-5 rounded-md ">
              <p>MENUS</p>
            </li>
          </a>
          <a href="#about">
            <li className="bg-bg-button hover:scale-110 transition-transform py-3 px-5 rounded-md ">
              <p>ABOUT</p>
            </li>
          </a>
          <a href="#contact">
            <li className="bg-bg-button hover:scale-110 transition-transform py-3 px-5 rounded-md ">
              <p>VISIT US</p>
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
