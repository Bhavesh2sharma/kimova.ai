import React, { useRef } from "react";

const HeroSection = () => {
  const buttonRef = useRef(null);
  const pseudoElementRef = useRef(null);

  const handleMouseEnter = () => {
    const pseudoEl = pseudoElementRef.current;
    pseudoEl.style.transition = "all 0.4s ease-in-out";
    pseudoEl.style.width = "250%";
    pseudoEl.style.backgroundColor = "#00283b"; // Corrected to navy
  };

  const handleMouseLeave = () => {
    const pseudoEl = pseudoElementRef.current;
    pseudoEl.style.width = "0";
  };

  return (
    <section className="w-full bg-white text-[#00283b] py-20 px-4 relative overflow-hidden font-playfair">
      {/* Floating shapes */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#DD5100]/5"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#00283b]/5"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#DD5100]/10 rounded-lg rotate-45"></div>

      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          TurboAudit by Kimova AI
        </h1>

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

          {/* Schedule a Demo Button */}
          <button
            ref={buttonRef}
            className="relative inline-flex items-center px-6 py-3 text-[#00283b] bg-white border border-[#00283b] rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:border-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="relative z-10">Schedule a Demo</span>
            <span
              ref={pseudoElementRef}
              className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg] transition-all duration-500"
            ></span>
          </button>

          {/* Try AI Agents Free Button */}
          <button
            className="relative inline-flex items-center px-6 py-3 text-white font-semibold rounded-full bg-[#00283b] border border-[#00283b] overflow-hidden transition-all duration-300 group"
          >
            <span className="relative z-10 group-hover:text-[#00283b] transition-colors duration-300">
              Try AI Agents Free
            </span>
            <span
              className="absolute left-[-20px] w-0 h-[500px] bg-white rotate-[-29deg] transition-all duration-500 group-hover:w-[250%]"
            ></span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
