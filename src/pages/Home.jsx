import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/cards/Services";
import FinalCTASection from "../components/sections/Home/FinalCTASection";
import Footer from "../components/global/Footer";

// Sections
import WhatWeOffer from "../components/sections/Home/WhatWeOffer";
import HowWeWork from "../components/sections/Home/HowWeWork";
import WorkProcess from "../components/sections/Home/WorkProcess";
import WhyChooseUsBg from "../components/sections/Home/WhyChooseUsBg";
import WhyChooseUsDetails from "../components/sections/Home/WhyChooseUsDetails";

export default function Home() {
  return (
    <div className="w-full bg-white pt-16 overflow-x-hidden">
      <Header />
      <Hero />

     {/* Purpose and Commitment Section */}
<div className="w-full px-4 sm:px-8 md:px-16 py-20 bg-sky-50 flex flex-col justify-start items-center gap-11">
  <div className="w-full max-w-[1024px] flex flex-col justify-center items-center gap-3">
    <h2 className="w-full text-center text-blue-800 text-2xl font-bold font-['Montserrat'] leading-loose">
      Our Purpose
    </h2>
    <p className="w-full text-center text-gray-900/60 text-xl font-semibold font-['Montserrat'] leading-relaxed">
      To build seamless technological experiences that drive your success forward
    </p>
  </div>
  
  <h3 className="text-center text-blue-800 text-xl font-bold font-['Montserrat'] leading-normal">
    Our Commitment
  </h3>
  
  <div className="w-full max-w-[896px] flex justify-center">
    <ul className="text-gray-900/60 text-xs sm:text-sm md:text-base lg:text-lg font-semibold font-['Montserrat'] leading-relaxed space-y-2">
      <li className="flex items-start">
        <span className="mr-2">•</span>
        We commit to understanding and aligning with your vision and goals.
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        We commit to delivering modern, scalable, and creative solutions.
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        To build lasting partnerships through openness and accountability.
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        Ensuring excellence and dependable outcomes every time.
      </li>
    </ul>
  </div>
</div>

      {/* Remaining sections */}
      <WhatWeOffer />
      <Services />
      <HowWeWork />
      <WorkProcess />
      
      
      <FinalCTASection />
      <Footer />
    </div>
  );
}