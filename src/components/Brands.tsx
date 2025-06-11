'use client';
import React from 'react';

const Brands = () => {
  const partners = [
    { src: "/opet.jpg", alt: "Opet" },
    { src: "/merco.png", alt: "Merco" },
    { src: "/isuzu.png", alt: "Isuzu" },
    { src: "/castrol.webp", alt: "Castrol" },
    { src: "/ford.png", alt: "Ford" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">İşbirliklerimiz</h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex animate-infinite-scroll">
            {/* First set of logos */}
            {partners.map((partner, i) => (
              <div key={`first-${i}`} className="flex-shrink-0 w-32 sm:w-48 h-16 sm:h-24 flex items-center justify-center mx-4 sm:mx-8">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Second set of logos for seamless loop */}
            {partners.map((partner, i) => (
              <div key={`second-${i}`} className="flex-shrink-0 w-32 sm:w-48 h-16 sm:h-24 flex items-center justify-center mx-4 sm:mx-8">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Third set for extra smooth scrolling */}
            {partners.map((partner, i) => (
              <div key={`third-${i}`} className="flex-shrink-0 w-32 sm:w-48 h-16 sm:h-24 flex items-center justify-center mx-4 sm:mx-8">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 8s linear infinite;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;