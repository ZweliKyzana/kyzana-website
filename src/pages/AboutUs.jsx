import Header from "../components/Header";
import Footer from "../components/global/Footer";
import FinalCTASection from "../components/sections/Home/FinalCTASection";
import AboutUsHero from "../components/sections/AboutUs/AboutUsHero"; // <-- import it
import VisionMissionSection from "../components/sections/AboutUs/VisionMissionSection";
import CoreValuesBadge from "../components/sections/AboutUs/CoreValuesBadge";
import CoreValuesSection from "../components/sections/AboutUs/CoreValuesSection";

export default function AboutUs() {
  return (
    <div className="w-full bg-white">
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

      {/* 6. Badge Section */}
      <section className="w-full py-16 flex justify-center">
        <div className="bg-sky-50 px-12 py-8 rounded-lg shadow">
          <p className="text-xl font-semibold text-black/70">[ Another Badge ]</p>
        </div>
      </section>

      {/* 7. Services-style again */}
      <section className="w-full py-16 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-6 rounded">[ Service 1 ]</div>
          <div className="bg-gray-200 p-6 rounded">[ Service 2 ]</div>
          <div className="bg-gray-200 p-6 rounded">[ Service 3 ]</div>
          <div className="bg-gray-200 p-6 rounded">[ Service 4 ]</div>
          <div className="bg-gray-200 p-6 rounded">[ Service 5 ]</div>
          <div className="bg-gray-200 p-6 rounded">[ Service 6 ]</div>
        </div>
      </section>

      {/* 8. Final CTA Section (reuse Home CTA) */}
      <FinalCTASection />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
