import React, { useState, useEffect } from 'react';
import { Zap, Shield } from 'lucide-react';

const LayeredHero = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev < 6 ? prev + 1 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const brand = ['K', 'i', 'm', 'o', 'v', 'a', '.AI'];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      className="relative w-full min-h-screen bg-[#DD5100] overflow-hidden flex items-center justify-start"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Content container */}
      <div className="relative z-20 px-4 sm:px-8 md:px-16 lg:px-24 max-w-full min-h-screen w-full flex items-center justify-start">
        {/* Main content */}
        <div>
          {/* Welcome text */}
          <p className="text-white text-base sm:text-lg md:text-xl tracking-widest uppercase mb-2 sm:mb-4">
            Welcome to
          </p>

          {/* Brand Name Animation */}
          <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6 tracking-tight flex flex-wrap gap-1">
            {brand.map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-transform duration-300 ${
                  visibleIndex >= index
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                } ${
                  char === '.AI' && visibleIndex >= index
                    ? 'animate-bounce'
                    : ''
                }`}
                style={{
                  transitionDelay: `${index * 0.05}s`,
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest mb-6 sm:mb-8 leading-tight ">
            AI for Smarter ISMS Compliance & Audits
          </p>

          {/* Icons */}
          <div className="flex space-x-4 sm:space-x-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Hover reveal layer with white background and orange text */}
      {isHovering && (
        <div
          className="absolute inset-0 bg-white z-30 pointer-events-none transition-all duration-300 ease-out"
          style={{
            clipPath: `circle(100px at ${hoverPosition.x}px ${hoverPosition.y}px)`,
          }}
        >
          <div className="min-h-screen w-full flex items-center justify-start">
            <div className="px-4 sm:px-8 md:px-16 lg:px-24">
              {/* Welcome text */}
              <p className="text-[#DD5100] text-base sm:text-lg md:text-xl tracking-widest uppercase mb-2 sm:mb-4">
                Welcome to
              </p>

              {/* Brand Name Animation */}
              <h1 className="text-[#DD5100] font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6 tracking-tight flex flex-wrap gap-1">
                {brand.map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-transform duration-300 ${
                      visibleIndex >= index
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                    } ${
                      char === '.AI' && visibleIndex >= index
                        ? 'animate-bounce'
                        : ''
                    }`}
                    style={{
                      transitionDelay: `${index * 0.05}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </h1>

              {/* Tagline */}
              <p className="text-[#DD5100] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest mb-6 sm:mb-8 leading-tight">
                AI for Smarter ISMS Compliance & Audits
              </p>

              {/* Icons */}
              <div className="flex space-x-4 sm:space-x-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#DD5100]/20 rounded-full flex items-center justify-center">
                  <Shield className="text-[#DD5100] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#DD5100]/20 rounded-full flex items-center justify-center">
                  <Zap className="text-[#DD5100] w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LayeredHero;