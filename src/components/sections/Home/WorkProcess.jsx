import React from "react";

export default function WorkProcess() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-blue-700 text-center mb-12">
          Our Process (Placeholder)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Discover", "Design", "Deliver"].map((step, i) => (
            <div
              key={i}
              className="rounded-xl bg-sky-50 p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-xl font-bold font-montserrat mb-2">{step}</div>
              <p className="text-black/70 font-montserrat">
                Placeholder description for {step.toLowerCase()} step. Will be
                replaced by final copy + icons later.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
