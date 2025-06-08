import React from 'react';
import {
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaEnvelope
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#FF851B] text-black pt-6 h-full">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-6 text-center">
        {/* Top italic line */}
        <p className="italic text-md text-black max-w-4xl">
          Built on secure Google Cloud infrastructure & supported by the Google Cloud for Startups Program.
        </p>

        {/* Social Icons */}
        <div className="flex gap-10 text-6xl justify-center items-center">
          <a href="#" aria-label="Email">
            <FaEnvelope className="hover:text-white transition duration-300" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-white transition duration-300" />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <FaXTwitter className="hover:text-white transition duration-300" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube className="hover:text-white transition duration-300" />
          </a>
        </div>

        {/* Smaller bottom message */}
        <p className="text-xs text-gray-800">
          If you are interested in this product, please write us an email.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-sm py-2 mt-6 text-center w-full">
        © Copyright 2025 Kimova AI OÜ. All rights reserved. <a href="#" className="underline">Impressum.</a>
      </div>
    </footer>
  );
};

export default Footer;
