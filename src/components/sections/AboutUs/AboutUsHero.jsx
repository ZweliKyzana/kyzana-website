import React from "react";
import aboutUsHero from "../../../assets/images/about-us-hero.jpg";

export default function AboutUsHero() {
  return (
    <section className="w-full flex flex-col bg-white">
      {/* Hero Image with Text Overlay */}
      <div className="relative w-full">
        <img
          className="w-full h-[582px] object-cover"
          src={aboutUsHero}
          alt="About Us Hero"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-6xl font-semibold font-montserrat leading-[65.79px] text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* Paragraphs under the image */}
      <div className="w-full h-auto mt-12 px-6 sm:px-8">
        <p className="text-black/60 text-xl font-semibold font-montserrat leading-relaxed mb-8 max-w-[80%]">
          Yield Plug Tech is a South African Information and Communications Technology (ICT) company founded in May 2025 and is based in Gauteng, Midrand. We offer end-to-end digital solutions and IT services. We empower organizations to drive digital transformation by optimizing their business processes through cutting-edge <span className="whitespace-nowrap">technology</span>.
        </p>
        <p className="text-black/60 text-xl font-semibold font-montserrat leading-relaxed max-w-[80%]">
          As a one-stop shop for innovative digital solutions, we help businesses harness the full potential of technology to enhance efficiency, scalability, compliance and growth. We are a catalyst for growth and success, both for our customers and the upcoming generation of tech talent.
        </p>
      </div>
    </section>
  );
}
