import Header from "../components/Header";
import Footer from "../components/global/Footer";
import FinalCTASection from "../components/sections/Home/FinalCTASection";
import AboutUsHero from "../components/sections/AboutUs/AboutUsHero";
import VisionMissionSection from "../components/sections/AboutUs/VisionMissionSection";
import CoreValuesBadge from "../components/sections/AboutUs/CoreValuesBadge";
import CoreValuesSection from "../components/sections/AboutUs/CoreValuesSection";
import WhatWeOffer from "../components/sections/Home/WhatWeOffer"; 
import Services from "../components/cards/Services";
import WhyChooseUsBg from "../components/sections/Home/WhyChooseUsBg";
import WhyChooseUsDetails from "../components/sections/Home/WhyChooseUsDetails";

export default function AboutUs() {
  return (
    <div className="w-full bg-white pt-16">
      {/* 1. Header */}
      <Header />

      {/* 2. About Us Hero */}
      <AboutUsHero />

      {/* 3. Vision + Mission + Extra text */}
      <VisionMissionSection />

      {/* 4. Badge Section */}
      <CoreValuesBadge />

      {/* 5. Services-style (5 blocks, 3 + 2) */}
      <CoreValuesSection />

      {/* 6. Badge Section (reuse WhatWeOffer) */}
      <WhyChooseUsBg />

      {/* 7. Services Section (reuse Services) */}
      <WhyChooseUsDetails />

      {/* 8. Final CTA Section (reuse Home CTA) */}
      <FinalCTASection />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
