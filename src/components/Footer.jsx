import React from 'react';
import {
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaEnvelope
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#00283b] text-white pt-6 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-6 text-center">
        {/* Top italic line */}
        <p className="italic text-lg max-w-5xl">
          Built on secure Google Cloud infrastructure & supported by the Google Cloud for Startups Program.
        </p>

        {/* Social Icons */}
        <div className="flex gap-10 text-4xl sm:text-5xl md:text-6xl justify-center items-center">
          <a href="#" aria-label="Email" className="transition-transform duration-300 hover:scale-110">
            <FaEnvelope className="text-white hover:text-white" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-transform duration-300 hover:scale-110">
            <FaLinkedin className="text-white hover:text-white" />
          </a>
          <a href="#" aria-label="X (Twitter)" className="transition-transform duration-300 hover:scale-110">
            <FaXTwitter className="text-white hover:text-white" />
          </a>
          <a href="#" aria-label="YouTube" className="transition-transform duration-300 hover:scale-110">
            <FaYoutube className="text-white hover:text-white" />
          </a>
        </div>

        {/* Smaller bottom message */}
        <p className="text-xs text-white/80">
          If you are interested in this product, please write us an email.
        </p>

        {/* Logos Below */}
        <div className="flex flex-row gap-12 items-center justify-center mt-0 mb-0">
          <div className="w-28 sm:w-32">
            <img
              src="/ISO.png"
              alt="ISO Logo"
              className="object-contain w-full "
            />
          </div>
          <div className="w-28 sm:w-32">
            <img
              src="/KimAi.png"
              alt="Kimova Logo"
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00283b] text-white text-sm py-2 text-center w-full">
        © Copyright 2025 Kimova AI OÜ. All rights reserved.{' '}
        <a href="#" className="underline hover:text-white">Impressum.</a>
      </div>
    </footer>
  );
};

export default Footer;
