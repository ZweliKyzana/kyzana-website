import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import finalcta from "../../../assets/images/final-cta.png"; // ✅ same background as What We Offer

export default function FinalCTASection() {
  return (
    <section
      className="w-full h-[440px] flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${finalcta})` }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center px-6 sm:px-12 py-16 gap-10">
        {/* Heading + Text */}
        <div className="w-full max-w-[859px] flex flex-col items-center gap-6">
          <h2 className="text-white text-4xl md:text-5xl font-bold font-montserrat leading-tight text-center md:whitespace-nowrap">
            Ready to Transform Your Business?
          </h2>

          <p className="text-white text-xl md:text-2xl font-semibold font-montserrat leading-relaxed text-center">
            Let’s discuss how comprehensive IT solutions can accelerate your
            growth and digital transformation.
          </p>
        </div>

        {/* Button (matches Hero.jsx style) */}
        <Link
          to="/contact"
          className="w-60 h-12 bg-lime-300 shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center 
                     hover:bg-white hover:outline hover:outline-2 hover:outline-blue-800 hover:shadow-none"
        >
          <span className="text-blue-800 text-sm font-semibold font-montserrat">
            Get In Touch
          </span>
        </Link>
      </div>
    </section>
  );
}
