
import React from "react";
import visionMissionImage from "../../../assets/images/vision-mission-section2.jpg"; // ✅ actual image

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-sky-50 py-16 flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row gap-12 px-6">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            className="w-[675px] h-[480px] object-cover"
            src={visionMissionImage}
            alt="Vision Mission"
          />
        </div>

        {/* Right: Vision + Mission */}
        <div className="flex flex-col justify-between max-w-[588px]">
          {/* Vision */}
          <div className="mb-8">
            <h2 className="text-blue-800 text-xl font-bold font-montserrat leading-normal">
              Vision
            </h2>
            <p className="text-gray-900/60 text-xl font-semibold font-montserrat leading-relaxed">
              To empower organisations worldwide by unlocking productivity,
              driving performance, and ensuring compliance through transformative
              digital solutions and comprehensive IT services.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-blue-800 w-96 my-4"></div>

          {/* Mission */}
          <div>
            <h2 className="text-blue-800 text-xl font-bold font-montserrat leading-normal">
              Mission
            </h2>
            <p className="text-gray-900/60 text-xl font-semibold font-montserrat leading-relaxed">
              At Yield Plug Tech, our mission is to deliver secure, user-friendly,
              and transformative digital solutions alongside comprehensive IT
              services thus empowering organizations to evolve and thrive in the
              digital era.
            </p>
          </div>
          {/* Divider */}
          <div className="border-t-2 border-blue-800 w-96 my-4"></div>
        </div>
      </div>

      


    </section>
  );
}
