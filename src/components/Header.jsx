import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm px-7 py-3.5 flex justify-between items-center">
      {/* Logo */}
      <img className="w-11 h-11" src="https://placehold.co/43x43" alt="Logo" />

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-12 text-sm font-semibold text-black">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

      {/* CTA Button */}
      <button className="hidden md:block px-5 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-semibold">
        Get Started
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg border"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <button className="px-5 py-2.5 bg-stone-900 text-white rounded-lg text-sm font-semibold">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
