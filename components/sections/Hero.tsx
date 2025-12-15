// components/sections/Hero.js or components/HeroSection.js

// Add onBookStrategyCall to the props list
const HeroSection = ({ onBookStrategyCall }: any) => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* 1. Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src="/your-private-jet-image.jpg"
          alt="Luxury private jet interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* 2. Centered Content */}
      <div className="relative z-10 text-white text-center p-4">
        {/* Small Tagline */}
        <p className="text-xs uppercase tracking-widest border border-white inline-block px-4 py-2 mb-6">
          ELITE WEALTH STRATEGY
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none mb-8">
          MONETIZE.
          <br />
          PROTECT.
          <br />
          DOMINATE.
        </h1>

        {/* Sub-headline / Description */}
        <p className="max-w-xl mx-auto text-sm md:text-base mb-10">
          Premium NIL and wealth strategy for elite athletes and high-net-worth
          individuals who refuse to settle for average.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
          {/* 👇 CHANGE: onClick handler added */}
          <button
            onClick={onBookStrategyCall}
            className="border border-white text-white px-8 py-3 text-sm font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            BOOK FREE STRATEGY CALL
          </button>

          <button className="bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-gray-200 transition duration-300">
            VIEW OUR PROCESS
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center space-x-8 md:space-x-16 pt-6 border-t border-white border-opacity-30">
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-bold">$127M+</p>
            <p className="text-xs uppercase tracking-wider mt-1">
              WEALTH PROTECTED
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-bold">340+</p>
            <p className="text-xs uppercase tracking-wider mt-1">
              ELITE CLIENTS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl md:text-4xl font-bold">98%</p>
            <p className="text-xs uppercase tracking-wider mt-1">
              SUCCESS RATE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
