import React, { useState, useEffect } from 'react';
import { Zap, Shield } from 'lucide-react';

const WelcomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const videoUrl = "/Corporate.webm";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen pl-4 lg:pl-10">
        <div className="max-w-4xl">
          {/* First Line */}
          <div className="font-playfair overflow-hidden">
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 leading-snug transform transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            >
              We unite expertise and tech
            </h1>
          </div>

          {/* Second Line */}
          <div className="overflow-hidden">
            <h2
              className={`font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-snug transform transition-all duration-1500 ease-out delay-300 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            >
              Kimova.AI
            </h2>
          </div>

          {/* Third Line */}
          <div className="font-playfair overflow-hidden">
            <p
              className={`text-2xl md:text-3xl lg:text-4xl font-light text-white leading-snug transform transition-all duration-1500 ease-out delay-500 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            >
              AI for Smarter ISMS Compliance & Audits
            </p>
          </div>

          {/* Icons */}
          <div className="flex space-x-4 sm:space-x-6 mt-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#00283b]/20 rounded-full flex items-center justify-center">
              <Shield className="text-[#00283b] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#00283b]/20 rounded-full flex items-center justify-center">
              <Zap className="text-[#00283b] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Accent */}
      <div className="lg:hidden absolute bottom-20 left-0 right-0">
        <div
          className={`w-full h-12 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 transform transition-all duration-1000 ease-out delay-1200 ${
            isLoaded ? 'translate-y-0 opacity-30' : 'translate-y-full opacity-0'
          }`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
        ></div>
      </div>
    </div>
  );
};

export default WelcomeHero;
