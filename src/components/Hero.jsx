import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero-bgg.jpg";

export default function Hero() {
  return (
    <section
      className="w-full h-[700px] md:h-[750px] flex justify-center items-center bg-cover bg-center relative pt-16 z-0"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-[1440px] text-center">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-6 mb-10">
          <h1 className="w-full max-w-[747px] text-white text-4xl md:text-6xl font-extrabold font-montserrat leading-[1.1] md:leading-[65px]">
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
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/contact"
            className="w-60 h-12 bg-lime-300 shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center 
              hover:bg-white hover:outline hover:outline-2 hover:outline-blue-800 hover:shadow-none"
          >
            <span className="text-blue-800 text-sm font-semibold font-montserrat">
              Schedule Free Consultation
            </span>
          </Link>
          <Link
            to="/about"
            className="w-60 h-12 outline outline-2 outline-offset-[-2px] outline-white flex items-center justify-center cursor-pointer 
              transition-all duration-200 hover:bg-blue-800 hover:outline-white"
          >
            <span className="text-white text-sm font-semibold font-montserrat">
              Learn More About Us
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}