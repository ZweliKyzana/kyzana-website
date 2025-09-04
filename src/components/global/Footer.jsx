import React from "react";
import newYieldIcon from "../../assets/icons/nav-logo-tt.png"; // ✅ replace with new logo

export default function Footer() {
  return (
    <footer className="w-full bg-sky-50 py-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo + Short Text */}
          <div className="flex flex-col items-start lg:col-span-4 relative -translate-y-24">
            <img
              src={newYieldIcon}
              alt="Yield Plug Icon"
              className="w-64 h-64 object-contain mb-0"
            />

            {/* Text below the logo */}
            <div className="flex flex-col leading-tight mt-[-80px]">
              <p className="text-black/60 text-lg font-semibold font-montserrat">
                Your trusted partner for comprehensive IT
              </p>
              <p className="text-black/60 text-lg font-semibold font-montserrat">
                solutions and digital transformation
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3 lg:col-span-3">
            <h3 className="text-blue-800 text-lg font-bold font-montserrat leading-snug">
              Services
            </h3>
            <p className="text-black/60 text-lg font-semibold font-montserrat leading-snug">
              Hardware & Software Reselling
            </p>
            <p className="text-black/60 text-lg font-semibold font-montserrat leading-snug">
              App Development & Support
            </p>
            <p className="text-black/60 text-lg font-semibold font-montserrat leading-snug">
              IT Professional Services
            </p>
            <p className="text-black/60 text-lg font-semibold font-montserrat leading-snug">
              Website & Ecommerce Platform
            </p>
            <p className="text-black/60 text-lg font-semibold font-montserrat leading-snug">
              Development of Digital Transformation Solutions
            </p>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3 lg:col-span-2">
            <h3 className="text-blue-800 text-lg font-bold font-montserrat leading-snug">
              Resources
            </h3>
            <ul className="space-y-2 text-black/60 font-semibold text-lg">
              <li>UI/UX Designers</li>
              <li>Project Managers</li>
              <li>Front-End Developers</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-blue-800 text-lg font-bold font-montserrat leading-snug">
              Contact Us
            </h3>
            <p className="text-black/60 text-lg font-semibold font-montserrat leading-snug">
              enquiries@yieldplugtech.com
            </p>
            <p className="text-black/60 text-lg font-semibold font-montserrat leading-snug">
              Follow Us
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <svg
                  className="w-9 h-9 text-blue-800 hover:text-blue-600 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 
                  23.403.597 24 1.325 24h11.494v-9.294H9.692V11.01h3.127V8.413c0-3.1 
                  1.894-4.788 4.659-4.788 1.325 0 2.464.099 
                  2.796.143v3.24h-1.918c-1.504 0-1.796.715-1.796 
                  1.763v2.309h3.587l-.467 3.696h-3.12V24h6.116C23.403 
                  24 24 23.403 24 22.676V1.325C24 .597 23.403 
                  0 22.675 0z"
                  />
                </svg>
              </a>

             

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <svg
                  className="w-9 h-9 text-blue-800 hover:text-blue-600 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.225 0H1.771C.792 0 
                  0 .774 0 1.729v20.542C0 23.226.792 24 
                  1.771 24h20.451C23.2 24 24 23.226 24 
                  22.271V1.729C24 .774 23.2 0 22.225 
                  0zM7.119 20.452H3.56V9h3.559v11.452zM5.34 
                  7.433c-1.137 0-2.059-.928-2.059-2.071 
                  0-1.144.922-2.072 2.059-2.072 
                  1.137 0 2.06.928 2.06 2.072 
                  0 1.143-.923 2.071-2.06 
                  2.071zm15.111 13.019h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
                  0-2.137 1.445-2.137 2.939v5.667H9.355V9h3.414v1.561h.049c.476-.9 
                  1.637-1.852 3.367-1.852 3.598 0 4.262 2.368 
                  4.262 5.451v6.292z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center text-black/60 text-lg font-semibold font-montserrat leading-snug border-t border-gray-300 pt-8">
          2025 Yield Plug Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
