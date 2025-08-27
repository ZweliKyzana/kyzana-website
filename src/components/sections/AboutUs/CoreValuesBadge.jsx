import React from "react";
import coreValuesBg from "../../../assets/images/what-we-offer-bg-copy.jpg"; // ✅ background image

export default function CoreValuesBadge() {
  return (
    <section
      className="w-full h-64 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${coreValuesBg})` }}
    >
      <div className="w-[1440px] h-64 px-80 py-32 inline-flex flex-col justify-center items-center gap-2.5">
        <div className="w-[750px] flex flex-col justify-start items-center gap-7">
          <div className="self-stretch text-center text-white text-4xl font-bold font-['Montserrat'] leading-10">
            Our Core Values
          </div>
          <div className="self-stretch text-center text-white text-lg font-semibold font-['Montserrat'] leading-snug">
            Our values shape everything we do, from creating innovative solutions to
            fostering a culture of integrity, collaboration and
            customer-centric excellence.
          </div>
        </div>
      </div>
    </section>
  );
}
