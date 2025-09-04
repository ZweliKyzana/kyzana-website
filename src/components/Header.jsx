import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import websiteLogo from "../assets/icons/nav-logo-tt.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-[100vw] bg-white shadow-sm px-4 sm:px-7 py-2 flex items-center justify-between fixed top-0 left-0 z-50 min-h-[72px]">

      {/* Logo (Left) */}
      <Link to="/" className="flex items-center z-20">
        <img
          className="h-16 w-auto object-contain"
          src={websiteLogo}
          alt="Website Logo"
        />
      </Link>

      {/* Desktop Menu - PERFECTLY CENTERED */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About Us" },
          { path: "/contact", label: "Contact Us" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative text-blue-800 text-xl font-semibold font-montserrat leading-relaxed group"
          >
            {item.label}
            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-blue-800 transition-all duration-300 ${
                isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button (Right) */}
      <button
        className="md:hidden p-2 rounded-lg border z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-md md:hidden transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
        }`}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About Us" },
          { path: "/contact", label: "Contact Us" },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className="relative text-blue-800 text-xl font-semibold font-montserrat leading-relaxed group"
          >
            {item.label}
            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-blue-800 transition-all duration-300 ${
                isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ))}
      </div>
    </header>
  );
}
