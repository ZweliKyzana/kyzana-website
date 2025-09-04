import React, { useRef, useEffect, useState } from "react";

// ✅ Import the new six icons
import servOne from "../../assets/icons/serv-one.png";
import servTwo from "../../assets/icons/serv-two.png";
import servThree from "../../assets/icons/serv-three.png";
import servFour from "../../assets/icons/serv-four.png";
import servFive from "../../assets/icons/serv-five.png";
import servSix from "../../assets/icons/serv-six.png";

const servicesData = [
  {
    title: "Hardware Reselling",
    description:
      "Yield Plug Tech partners with global vendors and provides hardware from reputable brands in the following categories: Laptops, Desktops, Projects, Presentation Screens, External Hard drives, Printers, Network peripherals and accessories. The services includes procurement, delivery and configurations.",
    icon: servOne,
    // ✅ removed highlight so it matches the rest
  },
  {
    title: "Software Reselling",
    description:
      "We partner with local and global software providers to ensure that organisations have access to top-tier software solutions that drive operational efficiency and digital transformation.",
    icon: servTwo,
  },
  {
    title: "App Development & Support",
    description:
      "We build mobile applications that prioritise your consumers, whether you're starting from scratch or making improvements to an already existing App. We collaborate with you to bring your App idea to life from concert, design, development, testing and launching. We built Apps that are secured, scalable and are compliant to POPIA.",
    icon: servThree,
  },
  {
    title: "Website & Ecommerce Platforms",
    description:
      "We develop chic websites and e-Commerce platforms that give you digital presence, captivate your users and produce quantifiable outcomes.",
    icon: servFour,
  },
  {
    title: "IT Professional Services",
    description:
      "We provide skilled Project management and UI/UX Designer resources to augment your Team and ensure successfully delivery of projects.",
    icon: servFive,
  },
  {
    title: "Development of Digital Transformation Solutions",
    description:
      "Automated business processes unlock productivity and drive performance. We have a development team to automate business processes through the development of custom and fit for purpose solutions that enable organisations to digitally transform.",
    icon: servSix,
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
    "rounded-xl p-6 flex flex-col gap-3 transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:brightness-105";

  return (
    <section ref={sectionRef} className="w-full bg-white py-16">
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 px-8 lg:px-16 xl:px-32 items-stretch">
        {servicesData.map((service, index) => (
          <article
            key={index}
            style={{ animationDelay: isVisible ? `${index * 0.15}s` : "0s" }}
            className={`${cardBaseClasses} ${
              service.highlight ? "bg-blue-700 text-white" : "bg-sky-50 text-black"
            } ${isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"}`}
          >
            <img src={service.icon} alt={service.title} className="w-12 h-12" />
            <h3
              className={`text-lg font-bold leading-snug ${
                service.highlight ? "text-white" : "text-black"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-base font-semibold leading-tight ${
                service.highlight ? "text-white" : "text-black"
              }`}
            >
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
