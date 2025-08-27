import { useState } from "react";
import websiteLogo from "../assets/icons/nav-logo.png"; // ✅ Actual logo path
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm px-7 py-2 flex items-center relative z-50">
      {/* Logo (Clickable) - Left */}
      <a href="/" className="flex items-center z-20">
        <img
          className="h-16 w-auto object-contain"
          src={websiteLogo}
          alt="Website Logo"
        />
      </a>

     {/* Desktop Menu - Centered */}
<nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-12">
  <Link
    to="/"
    className="text-blue-800 text-xl font-semibold font-montserrat leading-relaxed"
  >
    Home
  </Link>
  <Link
    to="/about"
    className="text-blue-800 text-xl font-semibold font-montserrat leading-relaxed"
  >
    About Us
  </Link>
  <Link
    to="/contact"
    className="text-blue-800 text-xl font-semibold font-montserrat leading-relaxed"
  >
    Contact Us
  </Link>
</nav>


      {/* Mobile Menu Button - Right */}
      <button
        className="md:hidden p-2 rounded-lg border ml-auto z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu Dropdown - with animation */}
      <div
  className={`absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md md:hidden transform transition-all duration-300 ease-in-out ${
    menuOpen
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
  }`}
>
  <Link
    to="/"
    className="text-blue-800 text-xl font-semibold font-montserrat leading-relaxed"
    onClick={() => setMenuOpen(false)}
  >
    Home
  </Link>
  <Link
    to="/about"
    className="text-blue-800 text-xl font-semibold font-montserrat leading-relaxed"
    onClick={() => setMenuOpen(false)}
  >
    About Us
  </Link>
  <Link
    to="/contact"
    className="text-blue-800 text-xl font-semibold font-montserrat leading-relaxed"
    onClick={() => setMenuOpen(false)}
  >
    Contact Us
  </Link>
</div>

    </header>
  );
}
