import React, { useRef } from "react";

const AuditHeroSection = () => {
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);

  const handleMouseEnter = () => {
    const pseudoEl = pseudoElementRef.current;
    pseudoEl.style.transition = "all 0.4s ease-in-out";
    pseudoEl.style.width = "250%";
    pseudoEl.style.backgroundColor = "#f97316"; // orange-500
  };

  const handleMouseLeave = () => {
    const pseudoEl = pseudoElementRef.current;
    pseudoEl.style.width = "0";
  };

  return (
    <section className="w-full bg-white text-orange-600 py-20 px-4 relative overflow-hidden">
    {/* Floating shapes */}
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#DD5100]/5"></div>
    <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#00283b]/5"></div>
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#DD5100]/10 rounded-lg rotate-45"></div>
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          TurboAudit by Kimova AI
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          AI for Smarter ISMS Compliance & Audits
        </h2>
        <p className="text-sm md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-gray-700">
          Empower your ISMS compliance (ISO 27001) with AI. TurboAudit automates{" "}
          <strong className="text-gray-800 font-semibold">
            end-to-end auditor workflows
          </strong>
          , analyzes uploaded documents with unparalleled depth to identify
          gaps, and delivers actionable insights, transforming audits from a
          burden into a strategic advantage.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
    
          <button
            ref={buttonRef}
            className="relative inline-flex items-center px-6 py-3 text-black hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="relative z-10 hover:text-white">
              Schedule a Demo
            </span>
            <span
              ref={pseudoElementRef}
              className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
            ></span>
          </button>

          <button
                className="relative inline-flex items-center px-6 py-3 text-orange-600 font-semibold rounded-full bg-white border border-orange-500 overflow-hidden transition-all duration-300 group"
                >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Try AI Agents Free
                </span>
                <span
                    className="absolute left-[-20px] w-0 h-[500px] bg-orange-500 rotate-[-29deg] transition-all duration-500 group-hover:w-[250%]"
                ></span>
                </button>

        </div>
      </div>
    </section>
  );
};

export default AuditHeroSection;
