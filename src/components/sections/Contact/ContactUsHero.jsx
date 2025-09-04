import React from "react";
import heroBg from "../../../assets/images/final-cta.png";

export default function ContactUsHero() {
  return (
    <section
      className="w-full h-[700px] md:h-[750px] flex items-center justify-center text-center bg-cover bg-center relative pt-16 z-0"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-8 max-w-[1440px]">
        <h1 className="text-white text-5xl md:text-6xl font-semibold font-montserrat leading-tight">
          Contact Us
        </h1>
        <p className="max-w-3xl text-white text-lg md:text-xl font-semibold font-montserrat leading-relaxed text-center">
          Ready to transform your business? Let’s discuss how Yield Plug
          Technologies can help you achieve your digital transformation goals.
        </p>
      </div>
    </section>
  );
}