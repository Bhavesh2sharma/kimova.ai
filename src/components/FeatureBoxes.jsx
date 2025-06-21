import React, { useState, useEffect, useRef } from 'react';
import { Clock, DollarSign, Search, RotateCcw, BarChart3, Zap } from 'lucide-react';

const features = [
  { 
    name: 'Reduce Compliance Time', 
    message: 'Automate document analysis, gap identification, and reporting to cut compliance cycles dramatically.',
    icon: Clock
  },
  { 
    name: 'Lower Compliance & Costs', 
    message: 'Minimize manual labor and resource strain for both implementation and auditing activities.',
    icon: DollarSign
  },
  { 
    name: 'Unbiased and Quality Compliance', 
    message: 'Leverage AI for deeper analysis of policies and evidence against standards, improving readiness and audit quality.',
    icon: Search
  },
  { 
    name: 'Streamline Compliance Workflows', 
    message: 'Simplify the entire process, from policy analysis and gap assessment to audit execution and reporting.',
    icon: RotateCcw
  },
  { 
    name: 'Focus on Strategic Insights', 
    message: 'Free up teams from repetitive tasks to focus on strategic gap closure, risk management, and critical thinking.',
    icon: BarChart3
  },
  { 
    name: 'Accelerate Audit Readiness', 
    message: 'Quickly identify compliance gaps, get policy improvement insights, and prepare documentation efficiently for audits.',
    icon: Zap
  },
];

const FeatureBoxes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [centerBoxIndex, setCenterBoxIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [randomDirections, setRandomDirections] = useState([]);
  const boxRefs = useRef([]);
  const containerRef = useRef(null);

  // Generate random entrance directions
  useEffect(() => {
    const directions = features.map(() => {
      const angle = Math.random() * 360;
      const distance = 100 + Math.random() * 200; // 100-300px
      return {
        x: Math.cos(angle * Math.PI / 180) * distance,
        y: Math.sin(angle * Math.PI / 180) * distance,
        rotation: Math.random() * 360 - 180, // -180 to 180 degrees
        scale: 0.3 + Math.random() * 0.4 // 0.3 to 0.7
      };
    });
    setRandomDirections(directions);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2 + window.scrollY;
      let closestIndex = -1;
      let closestDistance = Infinity;

      boxRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const boxCenter = rect.top + window.scrollY + rect.height / 2;
          const distance = Math.abs(viewportCenter - boxCenter);
          
          if (distance < closestDistance && distance < window.innerHeight * 0.4) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCenterBoxIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden" ref={containerRef}>
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/public/busy-office.webm" type="video/webm" />
      </video>
      
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10">
        <h2 className={`text-center text-4xl font-bold text-white mb-32 tracking-wide drop-shadow-lg
                        transition-all duration-1000 ease-out transform
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Unlock Intelligent ISMS Compliance & Auditing
        </h2>

        <div className="max-w-7xl mx-auto">
          {/* Desktop view */}
          <div className="hidden md:block">
            {/* First row - 3 boxes */}
            <div className="flex flex-row gap-8 justify-center items-start mb-16">
              {features.slice(0, 3).map((item, index) => {
                const IconComponent = item.icon;
                const direction = randomDirections[index] || { x: 0, y: 0, rotation: 0, scale: 1 };
                
                return (
                  <div
                    key={index}
                    ref={el => boxRefs.current[index] = el}
                    className={`group relative rounded-2xl shadow-lg border border-white/30
                               p-8 w-80 transition-all duration-700 ease-out cursor-pointer
                               transform flex flex-col items-center text-center
                               hover:shadow-2xl hover:border-white/50 hover:scale-105
                               bg-white/10 backdrop-blur-md`}
                    style={{ 
                      transform: isVisible 
                        ? 'translate(0, 0) rotate(0deg) scale(1)' 
                        : `translate(${direction.x}px, ${direction.y}px) rotate(${direction.rotation}deg) scale(${direction.scale})`,
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                      transformOrigin: 'center',
                      minHeight: '280px'
                    }}
                  >
                    {/* Icon Circle - Instant hover */}
                    <div className="absolute -top-8">
                      <div className="w-16 h-16 rounded-full border-4 border-[#00283b] bg-white/90 backdrop-blur-sm
                                      flex items-center justify-center shadow-lg transition-all duration-150 ease-out
                                      group-hover:w-20 group-hover:h-20 group-hover:shadow-xl group-hover:-top-10
                                      group-hover:border-orange-500">
                        <IconComponent className="w-6 h-6 text-gray-800 group-hover:w-8 group-hover:h-8 transition-all duration-150 ease-out" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-12 mb-6 relative z-10">
                      <h3 className="text-lg font-semibold text-white leading-tight drop-shadow-md">
                        {item.name}
                      </h3>
                    </div>

                    {/* Message with instant hover */}
                    <div className="absolute inset-x-4 bottom-4 rounded-xl p-4 shadow-xl
                                    bg-white/20 backdrop-blur-lg border border-white/40
                                    opacity-0 group-hover:opacity-100 transform transition-all duration-200 ease-out
                                    group-hover:translate-y-0 translate-y-4
                                    before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br 
                                    before:from-white/10 before:to-transparent before:pointer-events-none">
                      <p className="text-sm text-white leading-relaxed relative z-10 drop-shadow-sm">
                        {item.message}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second row - 3 boxes */}
            <div className="flex flex-row gap-8 justify-center items-start">
              {features.slice(3, 6).map((item, index) => {
                const IconComponent = item.icon;
                const direction = randomDirections[index + 3] || { x: 0, y: 0, rotation: 0, scale: 1 };
                
                return (
                  <div
                    key={index + 3}
                    ref={el => boxRefs.current[index + 3] = el}
                    className={`group relative rounded-2xl shadow-lg border border-white/30
                               p-8 w-80 transition-all duration-700 ease-out cursor-pointer
                               transform flex flex-col items-center text-center
                               hover:shadow-2xl hover:border-white/50 hover:scale-105
                               bg-white/10 backdrop-blur-md`}
                    style={{ 
                      transform: isVisible 
                        ? 'translate(0, 0) rotate(0deg) scale(1)' 
                        : `translate(${direction.x}px, ${direction.y}px) rotate(${direction.rotation}deg) scale(${direction.scale})`,
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: isVisible ? `${(index + 3) * 150}ms` : '0ms',
                      transformOrigin: 'center',
                      minHeight: '280px'
                    }}
                  >
                    {/* Icon Circle - Instant hover */}
                    <div className="absolute -top-8">
                      <div className="w-16 h-16 rounded-full border-4 border-[#00283b] bg-white/90 backdrop-blur-sm
                                      flex items-center justify-center shadow-lg transition-all duration-150 ease-out
                                      group-hover:w-20 group-hover:h-20 group-hover:shadow-xl group-hover:-top-10
                                      group-hover:border-orange-500">
                        <IconComponent className="w-6 h-6 text-gray-800 group-hover:w-8 group-hover:h-8 transition-all duration-150 ease-out" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-12 mb-6 relative z-10">
                      <h3 className="text-lg font-semibold text-white leading-tight drop-shadow-md">
                        {item.name}
                      </h3>
                    </div>

                    {/* Message with instant hover */}
                    <div className="absolute inset-x-4 bottom-4 rounded-xl p-4 shadow-xl
                                    bg-white/20 backdrop-blur-lg border border-white/40
                                    opacity-0 group-hover:opacity-100 transform transition-all duration-200 ease-out
                                    group-hover:translate-y-0 translate-y-4
                                    before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br 
                                    before:from-white/10 before:to-transparent before:pointer-events-none">
                      <p className="text-sm text-white leading-relaxed relative z-10 drop-shadow-sm">
                        {item.message}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden flex flex-col items-center space-y-12">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              const isCenter = centerBoxIndex === index;
              const direction = randomDirections[index] || { x: 0, y: 0, rotation: 0, scale: 1 };
              
              return (
                <div
                  key={index}
                  ref={el => boxRefs.current[index] = el}
                  className={`relative rounded-2xl shadow-lg border border-white/30
                             p-6 w-80 transition-all duration-700 ease-out
                             flex flex-col items-center text-center transform
                             bg-white/10 backdrop-blur-md
                             ${isCenter ? 'scale-105 shadow-2xl border-white/50' : 'scale-100'}
                             ${isCenter ? 'min-h-80' : 'min-h-52'}`}
                  style={{ 
                    transform: isVisible 
                      ? `translate(0, 0) rotate(0deg) scale(${isCenter ? 1.05 : 1})` 
                      : `translate(${direction.x}px, ${direction.y}px) rotate(${direction.rotation}deg) scale(${direction.scale})`,
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
                  }}
                >
                  {/* Icon Circle - Instant response */}
                  <div className="absolute -top-6">
                    <div className={`rounded-full border-4 border-[#00283b] bg-white/90 backdrop-blur-sm
                                    flex items-center justify-center shadow-lg transition-all duration-150 ease-out
                                    ${isCenter ? 'w-16 h-16 border-orange-500 shadow-xl' : 'w-14 h-14'}`}>
                      <IconComponent className={`text-gray-800 transition-all duration-150 ease-out ${isCenter ? 'w-8 h-8' : 'w-6 h-6'}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <h3 className={`font-semibold text-white mb-4 leading-tight transition-all duration-150 ease-out drop-shadow-md
                                    ${isCenter ? 'text-lg' : 'text-base'}`}>
                      {item.name}
                    </h3>
                  </div>

                  {/* Message with instant response */}
                  <div className={`rounded-xl border border-white/40 shadow-xl mx-2
                                  bg-white/20 backdrop-blur-lg transition-all duration-200 ease-out
                                  before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br 
                                  before:from-white/10 before:to-transparent before:pointer-events-none
                                  ${isCenter ? 'opacity-100 max-h-40 p-4' : 'opacity-0 max-h-0 p-0 overflow-hidden'}`}>
                    <p className="text-sm text-white leading-relaxed relative z-10 drop-shadow-sm">
                      {item.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;