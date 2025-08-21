import React from "react";
import heroBg from "../assets/images/hero-bgg.jpg";

export default function Hero() {
  return (
    <section
      className="w-full flex justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Gradient Overlay - Horizontal + Lighter */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20"></div>

      {/* Content */}
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center py-20 px-4 text-center relative z-10">
        {/* Heading + Paragraph */}
        <div className="w-full max-w-[800px] flex flex-col items-center gap-6 mb-16">
          <h1 className="w-full max-w-[747px] text-white text-4xl md:text-6xl font-extrabold font-montserrat leading-[1.1] md:leading-[65.79px]">
            <span className="whitespace-normal xl:whitespace-nowrap">
              Complete IT Solutions for
            </span>
            <br className="hidden xl:block" />
            <span className="block">Your Digital Success</span>
          </h1>

          <p className="w-full text-white text-lg md:text-xl font-semibold font-montserrat leading-relaxed">
            From software development to IT consulting, we provide comprehensive
            technology solutions and managed resources to accelerate your
            business growth
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          {/* Button 1 - Schedule */}
          <div className="w-60 h-9 relative bg-lime-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center">
            <span className="text-blue-800 text-sm font-semibold font-montserrat">
              Schedule Free Consultation
            </span>
          </div>

          {/* Button 2 - Learn More */}
          <div className="w-60 p-2.5 outline outline-2 outline-offset-[-2px] outline-white inline-flex justify-center items-center cursor-pointer hover:bg-white/10 transition-all duration-200">
            <span className="text-white text-sm font-semibold font-montserrat">
              Learn More About Us
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
