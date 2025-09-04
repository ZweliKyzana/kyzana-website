import React from "react";
import whatWeOfferBg from "../../../assets/images/what-we-offer-bg-copy.png";

export default function WhatWeOffer() {
  return (
    <section
      className="w-full h-auto min-h-64 flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0)), url(${whatWeOfferBg})`,
      }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center px-6 sm:px-12 py-16">
        <div className="w-full max-w-[1024px] flex flex-col items-center gap-7 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold font-montserrat leading-10">
            What We Offer
          </h2>
          <p className="text-white text-xl md:text-2xl font-semibold font-montserrat leading-normal">
            We offer end-to-end technology solutions to help your business thrive <br className="hidden sm:block" />
            in the digital landscape
          </p>
        </div>
      </div>
    </section>
  );
}
