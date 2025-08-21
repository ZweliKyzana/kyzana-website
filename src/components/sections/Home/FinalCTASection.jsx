// src/components/sections/Home/FinalCTASection.jsx
import React from "react";

export default function FinalCTASection() {
  return (
    <section className="w-full bg-blue-700 py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl font-bold font-montserrat leading-10">
          Ready to Transform Your Business?
        </h2>

        {/* Paragraph */}
        <p className="text-white text-xl font-semibold font-montserrat leading-relaxed max-w-3xl mx-auto mt-4">
          Let’s discuss how comprehensive IT solutions can accelerate your
          growth and digital transformation.
        </p>

        {/* Buttons */}
        <div className="mt-20 mb-20 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-lime-300 text-black text-sm font-semibold font-montserrat rounded-lg px-6 py-3 hover:bg-lime-400 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out w-full sm:w-auto">
            Schedule Free Consultation
          </button>

          <button className="bg-white text-black text-sm font-semibold font-montserrat rounded-lg border border-black/20 px-6 py-3 hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out w-full sm:w-auto">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
