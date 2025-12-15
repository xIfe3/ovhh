// components/sections/ForAthletes.js

import { titleClass, subtitleClass } from "@/utils/stylesContent";

// Add onBookStrategyCall to the props list
const ForAthletes = ({ onBookStrategyCall }: any) => {
  const benefits = [
    {
      title: "NIL Deal Negotiation",
      description:
        "Secure premium partnerships that align with your brand and maximize your value.",
    },
    {
      title: "Financial Education",
      description:
        "Understand your money, protect your future, and avoid the pitfalls that derail careers.",
    },
    {
      title: "Post-Career Planning",
      description:
        "Build businesses and investments that generate income long after you hang up your cleats.",
    },
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Image (Order reversed for this section) */}
        <div className="relative aspect-square md:aspect-auto h-[500px] order-2 md:order-1">
          <img
            src="/forathletes.png"
            alt="Football player running"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="order-1 md:order-2">
          <p className={subtitleClass}>FOR ATHLETES</p>
          <h2 className={titleClass}>
            YOUR GAME. <br />
            OUR STRATEGY.
          </h2>
          <p className="mb-8">
            Whether you’re a high school recruit, college star, or NFL veteran,
            your earning window is limited. We help you maximize every
            opportunity.
          </p>

          {/* Benefits List */}
          {benefits.map((benefit, index) => (
            <div key={index} className="flex mb-6">
              <span className="text-xl mr-3 text-black">✓</span>{" "}
              {/* Checkbox */}
              <div>
                <h3 className="font-bold text-lg">{benefit.title}</h3>
                <p className="text-sm text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}

          {/* CTA Button */}
          {/* 👇 CHANGE: onClick handler added */}
          <button
            onClick={onBookStrategyCall}
            className="mt-8 bg-black text-white px-10 py-4 text-sm font-semibold hover:bg-gray-800 transition duration-300 open-modal-btn"
          >
            BOOK YOUR STRATEGY CALL
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForAthletes;
