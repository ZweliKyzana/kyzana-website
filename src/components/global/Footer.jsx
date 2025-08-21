import React from "react";
import yieldIcon from "../../assets/icons/yield-icon.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-slate-500 py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Short Text with Logo */}
          <div className="flex flex-col items-start">
            <img
              src={yieldIcon}
              alt="Yield Plug Icon"
              className="w-16 h-16 mb-4 object-contain"
            />
            <p className="text-lg font-semibold font-montserrat leading-snug max-w-sm">
              Your trusted partner for comprehensive IT solutions and digital transformation
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lime-300 text-lg font-bold font-montserrat leading-snug mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>Software & Hardware Reselling</li>
              <li>App Development & Maintenance</li>
              <li>IT Consulting</li>
              <li>Managed IT Services</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lime-300 text-lg font-bold font-montserrat leading-snug mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>UI/UX Designers</li>
              <li>Project Managers</li>
              <li>Front-End Developers</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lime-300 text-lg font-bold font-montserrat leading-snug mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>hello@yieldplugtech.com</li>
              <li>+27 102 223 4543</li>
              <li>Schedule a Call</li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center text-slate-500 text-lg font-semibold font-montserrat leading-snug border-t border-gray-700 pt-8">
          2025 Yield Plug Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
