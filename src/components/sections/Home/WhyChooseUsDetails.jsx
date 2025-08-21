import React from "react";

export default function WhyChooseUsDetails() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-blue-700 text-center mb-12">
          Reasons That Set Us Apart (Placeholder)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="rounded-xl bg-sky-50 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-lg font-bold font-montserrat mb-2">
                Benefit {n}
              </div>
              <p className="text-black/70 font-montserrat">
                Placeholder detail for benefit {n}. We’ll swap with designer copy and
                icons.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
