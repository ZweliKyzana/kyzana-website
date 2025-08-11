export default function Hero() {
  return (
    <section className="w-full bg-sky-50 flex flex-col items-center justify-center py-16 px-4 text-center">
      {/* Heading + Paragraph */}
      <div className="max-w-4xl flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
  Complete IT Solutions for Your{" "}
  <span className="bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent">
    Digital Success
  </span>
</h1>

        <p className="text-black/60 text-lg md:text-xl font-semibold leading-relaxed">
          From software development to IT consulting, we provide comprehensive
          technology solutions and managed resources to accelerate your
          business growth
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* First Button */}
        <button className="px-6 py-2.5 bg-black text-white rounded-lg flex items-center gap-2 text-sm font-semibold">
          Start Your Project
          <img src="https://placehold.co/16x16" alt="" className="w-4 h-4" />
        </button>

        {/* Second Button */}
        <button className="px-6 py-2.5 border border-sky-900 rounded-lg text-black text-sm font-semibold">
          View Our Services
        </button>
      </div>
    </section>
  );
}
