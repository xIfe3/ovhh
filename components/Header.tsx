import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 p-6 md:p-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-widest"
        >
          OVHH
        </Link>

        {/* Right: Navigation/Button (Place your actual navigation item here) */}
        <div className="w-24 h-6 bg-white opacity-0.8">
          {/* This is the white box placeholder from the image. Replace with a real link/button. */}
        </div>
      </div>
    </header>
  );
};

export default Header;
