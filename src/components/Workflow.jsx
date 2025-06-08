import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const workflowSteps = [
  {
    number: '01',
    title: 'Upload ISMS Documents',
    description: 'Auditors securely upload all relevant ISMS documents (policies, procedures, evidence) based on our provided guidance list.',
  },
  {
    number: '02',
    title: 'AI Analysis',
    description: 'TurboAudit processes the documents, analyzes evidence against ISMS standards, identifies findings, and provides actionable insights.',
  },
  {
    number: '03',
    title: 'Generate Reports',
    description: 'Auditors review AI-generated insights, manage the findings lifecycle, and utilize automated reporting features for efficient documentation.',
  },
  {
    number: '04',
    title: 'Consult AI Agents',
    description: 'Use integrated Ask ISMS/AIMS agents for instant clarification during the implementation phases.',
  }
];

const Workflow = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timers = [];

            workflowSteps.forEach((_, index) => {
              const timer = setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 250);
              timers.push(timer);
            });

            return () => timers.forEach(timer => clearTimeout(timer));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-4" ref={sectionRef}>
        
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent mb-12 tracking-tight">
      THE AUDITOR'S END-TO-END WORKFLOW WITH <span className="text-orange-500">TURBOAUDIT</span>
            </h2>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 border-transparent 
                shadow-md p-6 flex flex-col transition-all duration-700 ease-out transform
                hover:shadow-2xl hover:border-orange-500 hover:-translate-y-2
                ${visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Number */}
              <div className="text-5xl font-extrabold text-orange-500 mb-3 tracking-wide drop-shadow-sm">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Learn More */}
              <button className="mt-auto text-orange-600 text-sm font-medium flex items-center group hover:underline">
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Decorative line for desktop */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-5 h-0.5 bg-gray-300"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              )}

              {/* Decorative line for mobile */}
              <div className="lg:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                {index < workflowSteps.length - 1 && (
                  <div className="w-0.5 h-6 bg-gray-300"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;