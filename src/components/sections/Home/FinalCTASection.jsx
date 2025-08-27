import React from "react";
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
          <h2 className="text-white text-4xl md:text-5xl font-bold font-montserrat leading-tight text-center whitespace-nowrap">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white text-xl md:text-2xl font-semibold font-montserrat leading-relaxed text-center">
            Let’s discuss how comprehensive IT solutions can accelerate your growth and digital transformation.
          </p>
        </div>

        {/* Button */}
        <button className="px-8 py-3 bg-lime-300 text-blue-800 text-sm font-semibold font-montserrat rounded-md hover:bg-lime-400 transition">
          Schedule Free Consultation
        </button>
      </div>
    </section>
  );
}
