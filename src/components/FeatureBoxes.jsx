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
  const boxRefs = useRef([]);
  const containerRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
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

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll detection for mobile
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
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section className="bg-gray-50 py-12 px-4" ref={containerRef}>

      <h2 className={`text-center text-3xl font-semibold text-orange-600 mb-24 tracking-wide
                      transition-all duration-1000 ease-out transform
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        Unlock Intelligent ISMS Compliance & Auditing
      </h2>

      <div className="max-w-7xl mx-auto">
 
        <div className="hidden md:block">
          {/* First row - 3 boxes */}
          <div className="flex flex-row gap-12 justify-center items-start mb-32">
            {features.slice(0, 3).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  ref={el => boxRefs.current[index] = el}
                  className={`relative group bg-white rounded-2xl shadow-lg
                             p-6 w-80 transition-all duration-700 ease-out
                             transform flex flex-col items-center text-center
                             hover:shadow-2xl hover:-translate-y-2 hover:z-10
                             ${isVisible 
                               ? 'translate-x-0 opacity-100' 
                               : index === 0 ? 'translate-x-[-100px] opacity-0' 
                                 : index === 1 ? 'translate-y-[100px] opacity-0'
                                 : 'translate-x-[100px] opacity-0'
                             }`}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
                    minHeight: '200px'
                  }}
                >
                  {/* Icon */}
                  <div className="absolute -top-12">
                    <div className="w-24 h-24 rounded-full border-4 border-[#DD5100] bg-white 
                                    flex items-center justify-center shadow-md
                                    group-hover:w-28 group-hover:h-28 group-hover:shadow-lg
                                    transition-all duration-500 ease-out">
                      <IconComponent className="text-black text-3xl group-hover:text-4xl 
                                               transition-all duration-500 ease-out" />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="mt-16 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-xl
                                   transition-all duration-500 ease-out">{item.name}</h3>
                  </div>

                  {/* Message text*/}
                  <div className="overflow-hidden transition-all duration-700 ease-out
                                  group-hover:opacity-100 opacity-0
                                  group-hover:max-h-32 max-h-0
                                  group-hover:translate-y-0 translate-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed px-2 pb-2">{item.message}</p>
                  </div>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10"></div>
                </div>
              );
            })}
          </div>

          {/* Second row - 3 boxes */}
          <div className="flex flex-row gap-12 justify-center items-start">
            {features.slice(3, 6).map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index + 3}
                  ref={el => boxRefs.current[index + 3] = el}
                  className={`relative group bg-white rounded-2xl shadow-lg
                             p-6 w-80 transition-all duration-700 ease-out
                             transform flex flex-col items-center text-center
                             hover:shadow-2xl hover:-translate-y-2 hover:z-10
                             ${isVisible 
                               ? 'translate-x-0 opacity-100' 
                               : index === 0 ? 'translate-x-[-100px] opacity-0' 
                                 : index === 1 ? 'translate-y-[-100px] opacity-0'
                                 : 'translate-x-[100px] opacity-0'
                             }`}
                  style={{ 
                    transitionDelay: isVisible ? `${(index + 3) * 50}ms` : '0ms',
                    minHeight: '200px'
                  }}
                >
                  {/* Icon */}
                  <div className="absolute -top-12">
                    <div className="w-24 h-24 rounded-full border-4 border-[#DD5100] bg-white 
                                    flex items-center justify-center shadow-md
                                    group-hover:w-28 group-hover:h-28 group-hover:shadow-lg
                                    transition-all duration-500 ease-out">
                      <IconComponent className="text-black text-3xl group-hover:text-4xl 
                                               transition-all duration-500 ease-out" />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="mt-16 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-xl
                                   transition-all duration-500 ease-out">{item.name}</h3>
                  </div>

                  {/* Message text with improved animation */}
                  <div className="overflow-hidden transition-all duration-700 ease-out
                                  group-hover:opacity-100 opacity-0
                                  group-hover:max-h-32 max-h-0
                                  group-hover:translate-y-0 translate-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed px-2 pb-2">{item.message}</p>
                  </div>

                  {/* Subtle background gradient on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile view - Single column with scroll detection */}
        <div className="md:hidden flex flex-col items-center space-y-16">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            const isCenter = centerBoxIndex === index;
            
            return (
              <div
                key={index}
                ref={el => boxRefs.current[index] = el}
                className={`relative bg-white rounded-2xl shadow-lg
                           p-6 w-80 transition-all duration-500 ease-out
                           flex flex-col items-center text-center transform
                           ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                           ${isCenter ? 'scale-105 shadow-2xl' : 'scale-100'}
                           ${isCenter ? 'min-h-64' : 'min-h-48'}`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
                }}
              >
                {/* Icon */}
                <div className="absolute -top-12">
                  <div className={`rounded-full border-4 border-[#DD5100] bg-white 
                                  flex items-center justify-center shadow-md transition-all duration-500
                                  ${isCenter ? 'w-28 h-28' : 'w-24 h-24'}`}>
                    <IconComponent className={`text-black transition-all duration-500 ${isCenter ? 'text-4xl' : 'text-3xl'}`} />
                  </div>
                </div>

                {/* Name */}
                <div className="mt-16">
                  <h3 className={`font-semibold text-gray-900 transition-all duration-500 ${isCenter ? 'text-xl' : 'text-lg'}`}>
                    {item.name}
                  </h3>
                </div>

                {/* Message text (shows when centered on mobile) */}
                <div className={`overflow-hidden transition-all duration-500 ease-out mt-4
                                ${isCenter ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-gray-600 px-2">{item.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;