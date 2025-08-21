import React from "react";
import whatWeOfferBg from "../../../assets/images/what-we-offer-bg-copy.jpg"; // Correct relative path

export default function WhatWeOffer() {
  return (
    <section
      className="w-full h-64 flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0)), url(${whatWeOfferBg})`,
      }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center px-6 sm:px-12 py-16">
        <div className="w-full max-w-[718px] flex flex-col items-center gap-7">
          <h2 className="text-white text-4xl md:text-5xl font-bold font-montserrat leading-10 text-center">
            What We Offer
          </h2>
          <p className="text-white text-xl md:text-2xl font-semibold font-montserrat leading-relaxed text-center">
            We offer end-to-end technology solutions to help your business thrive
            in the digital landscape
          </p>
        </div>
      </div>
    </section>
  );
}
