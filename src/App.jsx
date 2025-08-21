import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/cards/Services";
import FinalCTASection from "./components/sections/Home/FinalCTASection";
import Footer from "./components/global/Footer";

// NEW sections
import IntroSection from "./components/sections/Home/IntroSection";
import WhatWeOffer from "./components/sections/Home/WhatWeOffer";
import HowWeWork from "./components/sections/Home/HowWeWork";
import WorkProcess from "./components/sections/Home/WorkProcess";
import WhyChooseUsBg from "./components/sections/Home/WhyChooseUsBg";
import WhyChooseUsDetails from "./components/sections/Home/WhyChooseUsDetails";

function App() {
  return (
    <>
      <Header />
      <Hero />

      {/* NEW structure begins */}
      <IntroSection />
      <WhatWeOffer />
      <Services />
      <HowWeWork />
      <WorkProcess />
      <WhyChooseUsBg />
      <WhyChooseUsDetails />
      {/* NEW structure ends */}

      <FinalCTASection />
      <Footer />
    </>
  );
}

export default App;
