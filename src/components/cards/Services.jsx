import React, { useRef, useEffect, useState } from "react";

const servicesData = [
  {
    title: "Software & Hardware Reselling",
    description:
      "Yield Plug Technologies offers premium software licensing, hardware procurement, and vendor management solutions, delivering trusted products from leading vendors to meet enterprise needs efficiently.",
    icon: "https://placehold.co/48x48",
  },
  {
    title: "Cloud Solutions",
    description:
      "We deliver scalable cloud infrastructure, ensuring secure, flexible, and cost-effective solutions for modern businesses.",
    icon: "https://placehold.co/48x48",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with advanced security measures, monitoring, and proactive risk management.",
    icon: "https://placehold.co/48x48",
  },
  {
    title: "Managed IT Services",
    description:
      "Comprehensive support and proactive maintenance to keep your systems running at peak performance.",
    icon: "https://placehold.co/48x48",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const cardBaseClasses =
    "rounded-xl p-6 flex flex-col gap-3 transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:brightness-110";

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      {/* Heading */}
      <div
        className={`text-center mb-12 px-4 transition-opacity duration-700 ${
          isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
        }`}
      >
        <h2 className="text-blue-700 text-4xl font-bold mb-4 font-montserrat">
          Comprehensive IT Services
        </h2>
        <p className="text-black/50 text-xl font-semibold leading-relaxed max-w-3xl mx-auto">
          We offer end-to-end technology solutions to help your business thrive
          in the digital landscape
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 px-8 lg:px-16 xl:px-32 items-stretch">
        {/* Row 1 - Left */}
        <article
          style={{ animationDelay: isVisible ? "0s" : "0s" }}
          className={`${cardBaseClasses} bg-blue-700 ${
            isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <img src={servicesData[0].icon} alt="" className="w-12 h-12" />
          <h3 className="text-white text-lg font-bold leading-snug">
            {servicesData[0].title}
          </h3>
          <p className="text-white text-base font-semibold leading-tight">
            {servicesData[0].description}
          </p>
        </article>

        {/* Row 1 - Middle */}
        <article
          style={{ animationDelay: isVisible ? "0.15s" : "0s" }}
          className={`${cardBaseClasses} bg-blue-700 ${
            isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <img src={servicesData[1].icon} alt="" className="w-12 h-12" />
          <h3 className="text-white text-lg font-bold leading-snug">
            {servicesData[1].title}
          </h3>
          <p className="text-white text-base font-semibold leading-tight">
            {servicesData[1].description}
          </p>
        </article>

        {/* Tall Card */}
        <aside
          style={{ animationDelay: isVisible ? "0.3s" : "0s" }}
          className={`bg-sky-50 rounded-xl p-6 flex flex-col gap-4 lg:row-span-2 transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:brightness-105 ${
            isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <img src="https://placehold.co/48x48" alt="" className="w-12 h-12" />
          <h3 className="text-black text-lg font-bold leading-snug">
            IT Consulting
          </h3>
          <div className="flex flex-col gap-3.5 text-black text-base font-semibold leading-tight">
            <p>
              Yield Plug provides expert project management and UI/UX design
              consultation, guiding projects from inception to completion with
              precision and efficiency.
            </p>
            <p>
              Their project management services ensure timelines, budgets, and
              quality standards are consistently met, while their UI/UX
              expertise focuses on creating intuitive, engaging, and
              user-centered digital experiences.
            </p>
            <p>
              By combining strategic planning with design innovation, Yield
              Plug helps businesses achieve impactful results that meet both
              operational goals and end-user needs.
            </p>
          </div>
        </aside>

        {/* Row 2 - Left */}
        <article
          style={{ animationDelay: isVisible ? "0.45s" : "0s" }}
          className={`${cardBaseClasses} bg-blue-700 ${
            isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <img src={servicesData[2].icon} alt="" className="w-12 h-12" />
          <h3 className="text-white text-lg font-bold leading-snug">
            {servicesData[2].title}
          </h3>
          <p className="text-white text-base font-semibold leading-tight">
            {servicesData[2].description}
          </p>
        </article>

        {/* Row 2 - Middle */}
        <article
          style={{ animationDelay: isVisible ? "0.6s" : "0s" }}
          className={`${cardBaseClasses} bg-blue-700 ${
            isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <img src={servicesData[3].icon} alt="" className="w-12 h-12" />
          <h3 className="text-white text-lg font-bold leading-snug">
            {servicesData[3].title}
          </h3>
          <p className="text-white text-base font-semibold leading-tight">
            {servicesData[3].description}
          </p>
        </article>
      </div>
    </section>
  );
}
