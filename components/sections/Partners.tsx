// components/sections/PartnershipSection.js
import React from "react";

// The list of partners/groups based on your image and desired layout
const partners = [
  "OVHH GROUP",
  "LAWS OF LIFE",
  "SAINT LUXURY GROUP",
  "HK DEFENSE SOLUTIONS",
  "TIM HALL MINDSET",
  "EXEMPLAR COMPANIES",
  "ASM SPORTS",
  "WARRIORS CHOICE FOUNDATION", // Added to make it a multiple of 4 for the 4-column grid
  // You can add more names here if needed to fill the grid:
  // "SECOND PARTNER NAME",
  // "THIRD PARTNER NAME",
  // "FOURTH PARTNER NAME",
];

const PartnershipSection = () => {
  return (
    // Section with dark background, padding, and text centering
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title/Header */}
        <h3 className="text-sm uppercase tracking-widest text-gray-500 text-center mb-12">
          IN PARTNERSHIP WITH
        </h3>

        {/* Partners Grid Container

          Key Responsive Classes:
          - grid: Enables the grid layout.
          - grid-cols-2: Sets 2 columns on mobile by default (matches your mobile image stacking).
          - md:grid-cols-3: Switches to 3 columns on medium screens (optional, but good for transition).
          - lg:grid-cols-4: Switches to 4 columns on large screens (desktop view).
          - gap-x-8 gap-y-12: Adds vertical and horizontal spacing between items.
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {partners.map((partner, index) => (
            // Each grid item
            <div
              key={index}
              className="flex items-center justify-center text-center p-2"
            >
              {/* Partner Name Style */}
              <p className="text-sm sm:text-base font-semibold uppercase tracking-wider hover:text-gray-400 transition duration-300">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
