import React from "react";
import whatWeOfferBg from "../../../assets/images/what-we-offer-bg-copy.png"; // ✅ same image as What We Offer

export default function WhyChooseUsBg() {
  return (
    <section
      className="w-full h-64 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${whatWeOfferBg})` }}
    >
      <div className="w-full max-w-[1440px] flex flex-col items-center justify-center px-6 sm:px-12 py-16">
        <div className="w-full max-w-[718px] flex flex-col items-center gap-7">
          <h2 className="text-white text-4xl md:text-5xl font-bold font-montserrat leading-10 text-center">
            Why Choose Us
          </h2>
          <p className="text-white text-xl md:text-2xl font-semibold font-montserrat leading-normal text-center">
            Your trusted partner in building future-ready businesses
          </p>
        </div>
      </div>
    </section>
  );
}
