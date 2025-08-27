import React from "react";
import cvOne from "../../../assets/icons/c-v-one.png";
import cvTwo from "../../../assets/icons/c-v-two.png";
import cvThree from "../../../assets/icons/c-v-three.png";
import cvFour from "../../../assets/icons/c-v-four.png";
import cvFive from "../../../assets/icons/c-v-five.png";

export default function CoreValuesSection() {
  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-7 px-6">
        {/* First Row: 3 blocks */}
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          {/* Block 1 */}
          <div className="flex-1 bg-sky-50 p-6 rounded-lg border-2 border-sky-100 flex flex-col items-center gap-4">
            <img className="w-12 h-12" src={cvFive} alt="Icon 1" />
            <h3 className="text-slate-600 text-lg font-bold font-montserrat text-center">
              Collaborative Innovation
            </h3>
            <p className="text-black/60 text-base font-semibold font-montserrat text-center leading-tight">
              We partner closely with our customers and build with them solutions that are tailored for their needs.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex-1 bg-sky-50 p-6 rounded-lg border-2 border-sky-100 flex flex-col items-center gap-4">
            <img className="w-12 h-12" src={cvThree} alt="Icon 2" />
            <h3 className="text-slate-600 text-lg font-bold font-montserrat text-center">
              Simplicity by Design
            </h3>
            <p className="text-black/60 text-base font-semibold font-montserrat text-center leading-tight">
              We believe in intuitive, effortless digital solutions that users love to adopt.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex-1 bg-sky-50 p-6 rounded-lg border-2 border-sky-100 flex flex-col items-center gap-4">
            <img className="w-12 h-12" src={cvTwo} alt="Icon 3" />
            <h3 className="text-slate-600 text-lg font-bold font-montserrat text-center">
              Integrity
            </h3>
            <p className="text-black/60 text-base font-semibold font-montserrat text-center leading-tight">
              We operate with honesty and ethical practices ensuring long-term partnerships built on trust and credibility.
            </p>
          </div>
        </div>

        {/* Second Row: 2 blocks centered */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
          {/* Block 4 */}
          <div className="w-full md:w-[32%] bg-sky-50 p-6 rounded-lg border-2 border-sky-100 flex flex-col items-center gap-4">
            <img className="w-12 h-12" src={cvOne} alt="Icon 4" />
            <h3 className="text-slate-600 text-lg font-bold font-montserrat text-center">
              Accountability & Ownership
            </h3>
            <p className="text-black/60 text-base font-semibold font-montserrat text-center leading-tight">
              We take ownership of our solutions, ensuring transparency and reliability in every project. From strategy to execution, we stand by our work and deliver measurable results for our customers.
            </p>
          </div>

          {/* Block 5 */}
          <div className="w-full md:w-[32%] bg-sky-50 p-6 rounded-lg border-2 border-sky-100 flex flex-col items-center gap-4">
            <img className="w-12 h-12" src={cvFour} alt="Icon 5" />
            <h3 className="text-slate-600 text-lg font-bold font-montserrat text-center">
              Customer-Centric Excellence
            </h3>
            <p className="text-black/60 text-base font-semibold font-montserrat text-center leading-tight">
              We go beyond support and provide proactive, agile, and solution-driven customer care. By listening deeply and responding with clarity, we ensure every interaction adds value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
