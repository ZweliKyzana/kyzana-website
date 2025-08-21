

import React from "react";
import whatWeOfferBg from "../../../assets/images/what-we-offer-bg-copy.jpg"; // ✅ same image as What We Offer

export default function HowWeWork() {
  return (
    <section
      className="w-full h-64 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${whatWeOfferBg})` }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center px-6 sm:px-12 py-16">
        <div className="w-full max-w-[718px] flex flex-col items-center gap-7">
          <h2 className="text-white text-4xl md:text-5xl font-bold font-montserrat leading-10 text-center">
            How We Work
          </h2>
          <p className="text-white text-xl md:text-2xl font-semibold font-montserrat leading-normal text-center">
            We keep things clear, collaborative, and outcome-focused from start
            to finish.
          </p>
        </div>
      </div>
    </section>
  );
}

