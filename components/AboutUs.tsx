import React from "react";

function AboutUs() {
  return (
    <section id="contact" className="py-20 px-6 bg-sub-background">
      <div className="max-w-6xl mx-auto">
        {/* ABOUT US - Dashed Box */}
        <div className=" p-10 mb-12 text-center">
          <p className="text-xs font-sans font-semibold text-orange-500 tracking-[0.2em] mb-3">
            ABOUT US
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
            A place to connect, relax, <br /> and create moments.
          </h2>
          <p className="font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Monkey Coffee, we believe every cup is an invitation to slow down
            and savor life's simple pleasures. Whether you're meeting a friend,
            working on your next big idea, or simply enjoying a quiet moment
            alone, our doors are open to those who appreciate the art of a
            well-crafted brew and the warmth of genuine community.
          </p>
        </div>

        {/* Blue Divider */}
        <div className="h-0.5 mb-16"></div>

        {/* VISIT US - Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Details */}
          <div>
            <p className="text-xs font-sans font-semibold text-orange-500 tracking-[0.2em] mb-2">
              VISIT US
            </p>
            <h3 className="text-4xl font-serif text-gray-900 mb-10">
              Come say hello!
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase mb-2">
                  Address
                </h4>
                <p className="text-gray-600 font-sans">
                  Jl. Kh. A. Dahlan No.3, RW.5, Darat Sekip, <br />
                  Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat 78117
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase mb-2">
                  Hours
                </h4>
                <p className="text-gray-600 font-sans">
                  Everyday: 06:00 AM - 02:00 AM
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-800 uppercase mb-2">
                  Contact
                </h4>
                <p className="text-gray-600 font-sans">+628 1234 5678 90</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full h-full">
            <img
              src="/c5418b51c77964c07df33bec3e97e75ce5c6aa42.jpg"
              alt="Monkey Grounds Coffee storefront sign"
              className="w-full h-auto md:h- object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
