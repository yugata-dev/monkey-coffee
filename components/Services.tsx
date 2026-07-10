import React from "react";

function Services() {
  return (
    <section className="py-20 px-6 bg-sub-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs font-bold text-sub-text mb-4 text-center font-sans">
          WHAT WE SERVE
        </h2>
        <h3 className="text-background text-4xl font-semibold mb-12 text-center">
          More Than Coffee
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="text-center p-6">
            <div className="text-5xl flex justify-center mb-4">
              <img
                src="/Icon (1).png"
                alt="icon1"
                className="bg-bg-icon py-4 px-4 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Crafted Beverages
            </h4>
            <p className="text-gray-600 font-sans">
              Every drink is meticulously crafted by our expert baristas using
              premium beans
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center p-6">
            <div className="text-5xl flex justify-center mb-4">
              <img
                src="/icon (2).png"
                alt="icon1"
                className="bg-bg-icon py-4 px-4 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Cozy Workspace
            </h4>
            <p className="text-gray-600 font-sans">
              Fast WiFi, comfortable seating, and the perfect ambiance for
              productivity
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center p-6">
            <div className="text-5xl flex justify-center mb-4">
              <img
                src="/icon (3).png"
                alt="icon1"
                className="bg-bg-icon py-4 px-4 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              All Day Dining
            </h4>
            <p className="text-gray-600 font-sans">
              From breakfast pastries to evening treats, we've got you covered
            </p>
          </div>

          {/* Service 4 */}
          <div className="text-center p-6">
            <div className="text-5xl flex justify-center mb-4">
              <img
                src="/icon (4).png"
                alt="icon1"
                className="bg-bg-icon py-4 px-4 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Open Late</h4>
            <p className="text-gray-600 font-sans">
              Extended hours to accommodate your schedule and lifestyle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
