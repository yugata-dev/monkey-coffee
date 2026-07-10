import React from "react";

function Menus() {
  return (
    <section id="menu" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Star Rating */}
        <div className="text-center mb-12">
          <div className="text-5xl flex justify-center mb-4 gap-1 ">
            {[1, 2, 3, 4, 5].map((index) => (
              <img
                key={index}
                src="/Icon.png"
                alt="Mark Star"
                className="h-8 w-8"
              />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-amber-900 mb-2">
            Loved by Coffee Lovers & Creatives
          </h2>
          <p className="text-gray-600 font-sans">
            Top-rated hangout spot in the city
          </p>
        </div>

        {/* Section Title */}
        <h3 className="text-center text-4xl font-bold text-amber-900 mb-4">
          Our Craft
        </h3>
        <h4 className="text-center text-2xl font-semibold text-amber-700 mb-12">
          Highlighted Signature
        </h4>

        {/* Coffee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Coffee Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="/654c510dceb18291fca01cd50cd9eef0106b2fa7.jpg"
              alt="Classic espresso coffee"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-amber-700 font-semibold mb-2 font-sans">
                COFFEE
              </div>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                Classic Espresso
              </h5>
              <p className="text-gray-600 font-sans">
                Rich, bold, and perfectly balanced single-origin espresso.
              </p>
            </div>
          </div>

          {/* Coffee Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="/7a436dbcc98877f3437b0f31a40655ab48931cbc.jpg"
              alt="Signature latte with latte art"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-amber-700 font-semibold mb-2 font-sans">
                COFFEE
              </div>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                Signature Latte
              </h5>
              <p className="text-gray-600 font-sans">
                Smooth espresso with velvety steamed milk and latte art.
              </p>
            </div>
          </div>

          {/* Coffee Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="/c40a43460804995f53c402303d38f10f63297108.jpg"
              alt="Artisan cappuccino"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-amber-700 font-semibold mb-2 font-sans">
                COFFEE
              </div>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                Artisan Cappuccino
              </h5>
              <p className="text-gray-600 font-sans">
                Perfect harmony of espresso, steamed milk, and foam.
              </p>
            </div>
          </div>

          {/* Signature Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="/3c26489f4163108b0b60d9f5202911217ade6ec4.jpg"
              alt="Cold brew coffee"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-amber-700 font-semibold mb-2 font-sans">
                SIGNATURE
              </div>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                Cold Brew Delight
              </h5>
              <p className="text-gray-600 font-sans">
                Smooth, naturally sweet cold-brewed for 24 hours.
              </p>
            </div>
          </div>

          {/* Signature Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="4e03232bed48f34260347c171b420d964c1a6fc9.jpg"
              alt="Vanilla bean latte"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-amber-700 font-semibold mb-2 font-sans">
                SIGNATURE
              </div>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                Vanilla Bean Latte
              </h5>
              <p className="text-gray-600 font-sans">
                House-made vanilla bean syrup with premium espresso.
              </p>
            </div>
          </div>

          {/* Non Coffee */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="/654c510dceb18291fca01cd50cd9eef0106b2fa7.jpg"
              alt="Mocha indulgence"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-amber-700 font-semibold mb-2 font-sans">
                NON COFFEE
              </div>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                Mocha Indulgence
              </h5>
              <p className="text-gray-600 font-sans">
                Rich chocolate with steamed milk and whipped cream.
              </p>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="text-center">
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-4xl font-sans transition">
            Explore Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menus;
