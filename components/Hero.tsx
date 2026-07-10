import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-gray-900 to-gray-800 text-white py-32 px-6 text-center min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/aa781bde0f11a4beb9086017f60e59f642f3f7ac.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/20"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className=" p-8 rounded-lg max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Find Your Coffee, Bar & Dining Escape
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            A cozy space to sip, work, and connect.
          </p>
          <button className="bg-white font-sans text-background px-8 py-3 rounded-4xl font-semibold transition transform hover:scale-105">
            CHECK OUR MENUS
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
