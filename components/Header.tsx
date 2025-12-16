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
      </div>
    </header>
  );
};

export default Header;
