import React, { useRef, useEffect, useState } from "react";

// ✅ Import all icons from the correct folder
import iconReselling from "../../assets/icons/icon-reselling.png";
import iconAppDev from "../../assets/icons/icon-app-dev.png";
import iconWebEcom from "../../assets/icons/icon-web-ecom.png";
import iconManagedIT from "../../assets/icons/icon-managed-it.png";
import iconConsulting from "../../assets/icons/icon-consulting.png"; // reuse for new cards if needed

const servicesData = [
  {
    title: "Software & Hardware Reselling",
    description:
      "Yield Plug Technologies offers premium software licensing, hardware procurement, and vendor management solutions, delivering trusted products from leading vendors to meet enterprise needs efficiently.",
    icon: iconReselling,
    highlight: true, // blue background
  },
  {
    title: "App Development & Maintenance",
    description:
      "Yield Plug Technologies builds custom web and mobile applications with 24/7 support and ongoing maintenance, ensuring reliable performance and continuous improvement.",
    icon: iconAppDev,
  },
  {
    title: "App Development & Support",
    description:
      "We build mobile applications that prioritise your consumers, whether you're starting from scratch or improving an existing App. From concept to launch, we deliver secure, scalable, and compliant solutions.",
    icon: iconConsulting,
  },
  {
    title: "Website & Ecommerce Platforms",
    description:
      "Yield Plug Technologies offers scalable websites and e-commerce solutions with full support, including custom development and performance optimization for seamless user experiences.",
    icon: iconWebEcom,
  },
  {
    title: "Managed IT Services",
    description:
      "Yield Plug Technologies provides skilled IT professionals to augment your team, offering reliable IT helpdesk services, LAN support, and desktop assistance for smooth operations.",
    icon: iconManagedIT,
  },
  {
    title: "Digital Transformation Solutions",
    description:
      "Automated business processes unlock productivity and drive performance. We develop custom-fit solutions that enable organisations to digitally transform with ease.",
    icon: iconConsulting,
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
            } ${
              isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0"
            }`}
          >
            <img src={service.icon} alt="" className="w-12 h-12" />
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
