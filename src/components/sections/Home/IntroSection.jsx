import React from "react";

export default function IntroSection() {
  return (
    <section className="w-full bg-sky-50 flex justify-center">
      <div className="w-full max-w-[1440px] px-6 sm:px-12 py-20 flex flex-col gap-12">
        {/* Vision */}
        <div className="w-full max-w-[1024px] flex flex-col gap-3">
          <h2 className="text-blue-800 text-2xl md:text-3xl font-bold font-montserrat leading-loose">
            Our Vision
          </h2>
          <p className="text-gray-900/60 text-lg md:text-xl font-semibold font-montserrat leading-relaxed">
            At Yield Plug Tech, our mission is to deliver secure, user-friendly,
            and transformative digital solutions alongside comprehensive IT
            services thus empowering organizations to evolve and thrive in the
            digital era.
          </p>
        </div>

        {/* Mission */}
        <div className="w-full max-w-[991px] flex flex-col gap-2">
          <h2 className="text-blue-800 text-2xl md:text-3xl font-bold font-montserrat leading-loose">
            Our Mission
          </h2>
          <p className="text-gray-900/60 text-lg md:text-xl font-semibold font-montserrat leading-relaxed">
            To empower organisations worldwide by unlocking productivity,
            driving performance, and ensuring compliance through transformative
            digital solutions and comprehensive IT services.
          </p>
        </div>
      </div>
    </section>
  );
}
