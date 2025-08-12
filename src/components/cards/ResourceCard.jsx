import React from "react";

export default function ResourceCard({ iconSrc, title }) {
  return (
    <div className="w-full max-w-[320px] mx-auto h-56 px-14 py-12 bg-sky-50 rounded-xl flex flex-col justify-start items-center gap-3.5 hover:shadow-lg transition-shadow duration-300">
      <img className="w-16 h-16" src={iconSrc} alt={title} />
      <div className="text-center text-black text-lg font-bold font-montserrat leading-snug">
        {title}
      </div>
    </div>
  );
}
