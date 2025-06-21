import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const workflowSteps = [
  {
    number: '01',
    title: 'Upload ISMS Documents',
    description: 'Securely upload all ISMS documents (policies, evidence, etc.) with guided checklist support.',
  },
  {
    number: '02',
    title: 'AI Analysis',
    description: 'TurboAudit intelligently reviews and maps ISMS compliance, identifying findings instantly.',
  },
  {
    number: '03',
    title: 'Generate Reports',
    description: 'Download tailored audit reports with rich insights and evidence mapping in one click.',
  },
  {
    number: '04',
    title: 'Consult AI Agents',
    description: 'Ask ISMS/AIMS agents anything in real-time to streamline your implementation process.',
  }
];

const Workflow = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            workflowSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-24 px-4 sm:px-10 lg:px-24 font-playfair"
    >
      <div className="relative max-w-screen-2xl mx-auto text-[#00283b]">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-20 text-center leading-snug font-playfair text-[#00283b]">
          The Auditor’s End-to-End Workflow with{' '}
          <span className="text-[#00283b]">TurboAudit</span>
        </h2>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className={`relative border border-[#00283b] bg-[#00283b] text-white
              px-8 py-12 transition-all duration-700
              transform hover:-translate-y-2 hover:shadow-2xl
              ${visibleSteps.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              rounded-tl-3xl rounded-br-3xl`}
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto border-2 border-white text-xl font-bold rounded-full">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-center font-playfair">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 leading-relaxed text-center">
                {step.description}
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <button className="text-sm sm:text-base text-white font-medium flex items-center group hover:underline">
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Line Connector */}
              {index < workflowSteps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 right-[-30px] w-12 h-0.5 bg-white/30">
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
