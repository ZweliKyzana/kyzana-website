// src/components/WhyChooseUs.jsx
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-6 lg:px-12 xl:px-20">
        
        {/* Left side */}
        <div className="flex flex-col gap-8">
          {/* Top outline button */}
          <button className="px-5 py-3 rounded-[76px] outline outline-2 outline-offset-[-2px] outline-black inline-flex justify-center items-center gap-2.5 w-fit">
            <span className="text-black text-xl font-semibold font-montserrat leading-relaxed">
              Why Choose Us
            </span>
          </button>

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 max-w-[750px]">
            <p className="text-black text-xl font-semibold font-montserrat leading-7">
              At Yield Plug Technologies, we are more than just an ICT service
              provider—we are your strategic partner in digital transformation.
              We deliver end-to-end technology solutions that simplify
              operations, enhance productivity, and drive growth.
            </p>
            <p className="text-black text-xl font-semibold font-montserrat leading-7">
              Our approach is rooted in collaboration, ensuring that every
              solution is tailored to your real business needs. With a diverse
              service offering—from premium software licensing and hardware
              procurement to app development, website design, and managed IT
              resources—you have everything you need under one trusted roof.
            </p>
            <p className="text-black text-xl font-semibold font-montserrat leading-7">
              Guided by our core values of Collaborative Innovation,
              Accountability, Simplicity by Design, and Customer-Centric
              Excellence, we take ownership of every project, ensuring seamless
              delivery and exceptional results. Choosing Yield Plug means
              choosing a partner committed to innovation, reliability, and your
              long-term success.
            </p>
          </div>

          {/* Bottom filled button */}
          <button className="px-5 py-3 bg-blue-700 rounded-[68px] inline-flex justify-center items-center gap-2.5 hover:bg-blue-800 transition-colors duration-200 w-fit">
            <span className="text-white text-xl font-semibold font-montserrat leading-normal">
              Get Started
            </span>
          </button>
        </div>

        {/* Right side image */}
        <div className="flex justify-center lg:justify-end">
          <img
            className="w-[567px] h-[771px] rounded-xl object-cover"
            src="https://placehold.co/567x771"
            alt="Why Choose Us"
          />
        </div>
      </div>
    </section>
  );
}
