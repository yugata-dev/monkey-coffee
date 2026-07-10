import React from "react";

type ImageCardProps = {
  src: string;
  alt: string;
  className?: string;
};

function ImageCard({ src, alt, className = "" }: ImageCardProps) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

const LARGE_IMAGE: ImageCardProps = {
  src: "/96b3014aa240dd52955f70e27d7daf31f1f7b7d1.jpg",
  alt: "Bright cafe interior with bookshelf and bar",
};

const SMALL_IMAGES: ImageCardProps[] = [
  {
    src: "/8178b48ac3e2b25da4be8a8bfab3a628e4999494.jpg",
    alt: "Three people toasting with latte art",
  },
  {
    src: "/b2b35478e19abb85636ba401c120b39b59a54816.jpg",
    alt: "Outdoor cafe patio seating",
  },
  {
    src: "/aa781bde0f11a4beb9086017f60e59f642f3f7ac.jpg",
    alt: "Coffee Roasters storefront black and white",
  },
  {
    src: "/9abbf9322c8e9aca3d07a2de61f9827cf39f649d.jpg",
    alt: "Green cafe",
  },
  {
    src: "/268fbf7f4ff2e134ab4ee72072eb7a7395b462ae.jpg",
    alt: "Volks coffee bar interior",
  },
];

function Ambiance() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Border dashed sesuai mockup */}
        <div className="p-8 md:p-10 mb-12">
          <p className="text-xs font-sans font-semibold text-orange-500 tracking-[0.2em] mb-3">
            AMBIANCE
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-5 leading-tight">
            Where Moments Happen
          </h2>
          <p className="font-sans text-gray-600 max-w-3xl leading-relaxed">
            A space designed for those who appreciate the finer details. From
            the natural light that fills our space to the carefully curated
            seating arrangements, every element is crafted to create an
            atmosphere of comfort and inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Left Image - spans 2 rows */}
          <div className="md:col-span-2 md:row-span-2">
            <ImageCard
              {...LARGE_IMAGE}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {SMALL_IMAGES.map((card, index) => (
            <div key={`ambiance-${index}`}>
              <ImageCard
                {...card}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ambiance;
