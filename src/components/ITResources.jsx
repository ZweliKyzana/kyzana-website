import React from "react";
import ResourceCard from "./cards/ResourceCard";
import itResourcesIcon from "../assets/icons/it-resources.png"; // ✅ update path if needed

export default function ITResources() {
  const resources = [
    { title: "Project Managers" },
    { title: "Business Analysts" },
    { title: "UI/UX Designers" },
    { title: "Support Technicians" },
    { title: "System Administrators" },
    { title: "Project Administrators" },
    { title: "IT Consultants" },
    { title: "Help Desk Agents" },
  ];

  return (
    <section className="w-full bg-white py-20">
      {/* Text content stays centered */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <h2 className="text-center text-blue-700 text-4xl font-bold font-montserrat leading-10">
          Expect IT Resources On-Demand
        </h2>

        <p className="text-center text-black/50 text-xl font-semibold font-montserrat leading-relaxed max-w-2xl mx-auto mt-4">
          Access skilled professionals to augment your team or handle specific projects.
        </p>
      </div>

      {/* Grid bleeds full width */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-8 lg:px-12">
        {resources.map((res, index) => (
          <ResourceCard
            key={index}
            iconSrc={itResourcesIcon}
            title={res.title}
          />
        ))}
      </div>
    </section>
  );
}
