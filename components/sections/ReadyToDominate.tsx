// components/sections/ReadyToDominate.js

// Add onBookStrategyCall to the props list
const ReadyToDominate = ({ onBookStrategyCall }: any) => {
  return (
    <footer className="bg-black text-white">
      {/* CTA Banner */}
      <div className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image & Overlay */}
        <img
          src="/ready.JPG"
          alt="Luxury office view"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 p-6 max-w-xl">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            READY TO <br />
            DOMINATE?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Book your free strategy call and discover how OVHH can transform
            your financial future.
          </p>

          {/* 👇 CHANGE: onClick handler added */}
          <button
            onClick={onBookStrategyCall}
            className="bg-white text-black px-10 py-4 text-sm font-semibold hover:bg-gray-200 transition duration-300 open-modal-btn"
          >
            BOOK FREE STRATEGY CALL
          </button>

          <p className="text-xs mt-3 text-gray-400">
            No pressure. No obligation. Just elite strategy.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Logo/Mission */}
          <div>
            <h4 className="text-2xl font-bold tracking-widest mb-4">OVHH</h4>
            <p className="text-sm text-gray-400">
              Premium NIL and wealth strategy for elite athletes and
              high-net-worth individuals.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">SERVICES</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  NIL Monetization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wealth Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Growth Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tax Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact/Legal (Add as needed) */}
          <div className="hidden md:block">
            {/* Placeholder for legal/social */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ReadyToDominate;
