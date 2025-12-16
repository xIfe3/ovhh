// components/sections/ForBusinessOwners.js

import { titleClass, subtitleClass } from "@/utils/stylesContent";

// Add onScheduleConsultation to the props list
const ForBusinessOwners = ({ onScheduleConsultation }: any) => {
  const benefits = [
    {
      title: "Tax Optimization",
      description:
        "Legally minimize your tax burden and keep more of what you earn.",
    },
    {
      title: "Asset Protection",
      description:
        "Shield your wealth from lawsuits, creditors, and market volatility.",
    },
    {
      title: "Legacy Building",
      description:
        "Create generational wealth that outlives you and empowers your family.",
    },
  ];

  return (
    <section className="py-24 bg-black text-white">
      {/* Container ensures proper spacing and grid layout */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {" "}
        {/* Changed items-start to items-center for better vertical alignment */}
        {/* Left Content */}
        <div>
          <p className={subtitleClass}>FOR BUSINESS OWNERS</p>
          <h2 className={titleClass}>
            SCALE SMART. <br />
            PROTECT MORE.
          </h2>
          <p className="mb-8 max-w-md">
            High-net-worth entrepreneurs and business owners need more than a
            financial advisor. You need a strategic partner who understands
            scale, risk, and legacy.
          </p>

          {/* Benefits List */}
          {benefits.map((benefit, index) => (
            <div key={index} className="flex mb-6">
              <span className="text-xl mr-3 text-white">✓</span>{" "}
              {/* Checkbox */}
              <div>
                <h3 className="font-bold text-lg">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <button
            onClick={onScheduleConsultation}
            className="mt-8 bg-white text-black px-10 py-4 text-sm font-semibold hover:bg-gray-200 transition duration-300 open-modal-btn"
          >
            SCHEDULE CONSULTATION
          </button>
        </div>
        {/* Right Image */}
        {/* 👇 FIX: Image container height for responsiveness */}
        <div className="relative h-96 sm:h-[500px] md:h-auto md:min-h-[500px]">
          <img
            src="/forbusinessowners.png"
            alt="Showroom of luxury sports cars"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ForBusinessOwners;
