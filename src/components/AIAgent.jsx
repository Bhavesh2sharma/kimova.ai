import React, { useRef } from 'react';
import { ArrowRight, Shield, Brain, Sparkles } from 'lucide-react';

export default function IntegratedAIAgents() {
  // Reusable button component with animation
  const AnimatedButton = ({ children, text }) => {
    const buttonRef = useRef(null);
    const pseudoElementRef = useRef(null);

    const handleMouseEnter = () => {
      const pseudoEl = pseudoElementRef.current;
      pseudoEl.style.transition = "all 0.4s ease-in-out";
      pseudoEl.style.width = "250%";
      pseudoEl.style.backgroundColor = "#00283b";
    };

    const handleMouseLeave = () => {
      const pseudoEl = pseudoElementRef.current;
      pseudoEl.style.width = "0";
    };

    return (
      <button
        ref={buttonRef}
        className="group/btn w-full bg-gradient-to-r from-[#DD5100] to-[#EE6600] hover:from-[#EE6600] hover:to-[#DD5100] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative z-10">{text}</span>
        <span className="relative z-10">{children}</span>
        <span
          ref={pseudoElementRef}
          className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg] transition-all duration-400"
        ></span>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#DD5100]" />
            <span className="text-sm font-medium text-[#CC4A00]">AI-Powered Auditing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Integrated{' '}
            <span className="bg-gradient-to-r from-[#DD5100] to-[#EE6600] bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            <span>Ask ISMS</span>
            <span className="text-[#DD5100]">&</span>
            <span>Ask AIMS</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Instant Expertise within the Auditor's Workflow
          </p>
        </div>

        {/* AI Agent Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Ask ISMS Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#DD5100] to-[#EE6600] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#DD5100] to-[#CC4A00] rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#FF7700] to-[#EE6600] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">ISO</span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Ask ISMS
                  <span className="text-lg font-normal text-gray-500 ml-2">(for ISO 27001)</span>
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  Auditors get instant, AI-powered answers on ISO 27001 controls, implementation, 
                  and interpretation directly within TurboAudit.
                </p>
              </div>

              {/* CTA Button */}
              <AnimatedButton text="Explore Ask ISMS">
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </AnimatedButton>
              
            </div>
          </div>

          {/* Ask AIMS Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#DD5100] to-[#EE6600] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-orange-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#DD5100] to-[#CC4A00] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#FF8800] to-[#DD5100] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">AI</span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Ask AIMS
                  <span className="text-lg font-normal text-gray-500 ml-2">(for ISO 42001)</span>
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  Auditors navigate AI governance complexities with AI-driven guidance on ISO 42001, 
                  risk, and ethics, integrated into TurboAudit.
                </p>
              </div>

              {/* CTA Button */}
              <AnimatedButton text="Explore Ask AIMS">
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Auditing Process?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
            TurboAudit pricing is customized based on your specific use case, company size, and complexity.
            </p>
            <AnimatedButton text="Contact Us for a quote">
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}