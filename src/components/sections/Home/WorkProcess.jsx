import React from "react";
import workProcessImg from "../../../assets/images/work-process.jpg";

const steps = [
  {
    title: "Discover",
    description:
      "We begin by understanding your business goals, challenges, and vision to create a clear project roadmap.",
  },
  {
    title: "Design",
    description:
      "Our experts craft tailored, user-focused solutions using the latest technology and best practices.",
  },
  {
    title: "Deliver",
    description:
      "We implement with precision, ensuring quality, timely delivery, and seamless integration.",
  },
  {
    title: "Support",
    description:
      "After launch, we provide continuous support, performance monitoring, and improvements to keep you ahead.",
  },
];

export default function WorkProcess() {
  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-start px-2 md:px-6">
        
        {/* Left Image */}
        <div className="flex-[1.2] flex justify-start md:pr-8">
          <img
            src={workProcessImg}
            alt="Work Process"
            className="w-full max-w-[650px] h-[579px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Section: steps mapped */}
        <div className="flex-[1.2] flex flex-col gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-8">
              {/* Rectangle - last one is blue */}
              <div
                className={`w-4 h-28 self-start ${
                  index === steps.length - 1 ? "bg-blue-800" : "bg-zinc-300"
                }`}
              />
              <div className="flex flex-col justify-start">
                <h3 className="text-blue-800 text-xl font-bold font-montserrat leading-normal -mt-1">
                  {step.title}
                </h3>
                <p className="text-black/60 text-xl font-semibold font-montserrat leading-relaxed mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
