import React from "react";
import coreValuesBg from "../../../assets/images/what-we-offer-bg-copy.png"; // ✅ background image

export default function CoreValuesBadge() {
  return (
    <section
      className="w-full flex items-center justify-center bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${coreValuesBg})` }}
    >
      <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-6 px-6 sm:px-12">
        {/* Heading */}
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold font-montserrat leading-snug">
          Our Core Values
        </h2>

        {/* Paragraph */}
        <p className="text-center text-white text-base md:text-lg font-semibold font-montserrat leading-relaxed max-w-[750px]">
          Our values shape everything we do, from creating innovative solutions to
          fostering a culture of integrity, collaboration and
          customer-centric excellence.
        </p>
      </div>
    </section>
  );
}
