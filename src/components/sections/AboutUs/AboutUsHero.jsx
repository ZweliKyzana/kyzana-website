import React from "react";
import aboutUsHero from "../../../assets/images/about-us-hero.jpg";

export default function AboutUsHero() {
  return (
    <>
      <section
        className="w-full h-[700px] md:h-[750px] relative flex items-center justify-center bg-cover bg-center pt-16 z-0"
        style={{ backgroundImage: `url(${aboutUsHero})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-[1440px] text-center">
          <h1 className="text-white text-5xl md:text-6xl font-semibold font-montserrat leading-tight">
            About Us
          </h1>
        </div>
      </section>

      <section className="w-full h-auto mt-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl"> {/* Added container with max-width */}
          <p className="text-black/60 text-xl font-semibold font-montserrat leading-relaxed mb-8">
            Yield Plug Tech is a South African Information and Communications
            Technology (ICT) company founded in May 2025 and based in Gauteng.
            Yield Plug Tech is a 100% Black Female owned company and offers
            end-to-end digital solutions and IT services. We empower organisations
            to drive digital transformation by optimising their business processes
            through cutting-edge{" "}
            <span className="whitespace-nowrap">technology</span>.
          </p>
          <p className="text-black/60 text-xl font-semibold font-montserrat leading-relaxed mb-16">
            As a one-stop shop for innovative digital solutions, we help businesses
            harness the full potential of technology to enhance efficiency,
            scalability, compliance and growth. We are a catalyst for growth and
            success, both for our customers and the upcoming generation of tech
            talent.
          </p>
        </div>
      </section>
    </>
  );
}