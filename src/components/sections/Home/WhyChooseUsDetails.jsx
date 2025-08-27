import React from "react";
import whyChooseUsImg from "../../../assets/images/why-choose-us.jpg"; // replace with your actual image

export default function WhyChooseUsDetails() {
  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-stretch px-6 sm:px-8 py-8 gap-12 bg-white rounded-lg">
        
        {/* Left side - evenly spaced text sections */}
        <div className="flex flex-col w-full md:w-1/2 gap-6">
          {/* Section 1 */}
          <div className="px-6 py-6 bg-sky-50 flex items-center rounded-lg">
            <p className="text-black/60 text-base sm:text-lg md:text-xl font-semibold font-montserrat leading-relaxed text-center w-full">
              Quick response in software installations and hardware procurement to ensure uninterrupted business operations.
            </p>
          </div>

          {/* Section 2 */}
          <div className="px-6 py-6 bg-sky-50 flex items-center rounded-lg">
            <p className="text-black/60 text-base sm:text-lg md:text-xl font-semibold font-montserrat leading-relaxed text-center w-full">
              Customer-centric approach that prioritizes customer success through tailored services and products that address customer needs. We strive for a hassle-free customer experience.
            </p>
          </div>

          {/* Section 3 */}
          <div className="px-6 py-6 bg-sky-50 flex items-center rounded-lg">
            <p className="text-black/60 text-base sm:text-lg md:text-xl font-semibold font-montserrat leading-relaxed text-center w-full">
              Customizable digital solutions that are easy to adopt and are tailored for different sectors.
            </p>
          </div>

          {/* Section 4 */}
          <div className="px-6 py-6 bg-sky-50 flex items-center rounded-lg">
            <p className="text-black/60 text-base sm:text-lg md:text-xl font-semibold font-montserrat leading-relaxed text-center w-full">
              Graduate development program to contribute to the reduction of youth unemployment.
            </p>
          </div>
        </div>

        {/* Right side - image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={whyChooseUsImg}
            alt="Why Choose Us"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
