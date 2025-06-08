import React from 'react';
import { ShieldCheck, Shield, CheckCircle, Zap, Layers } from 'lucide-react';

const Points = ({ text, color }) => (
  <li className="flex items-start gap-2 text-gray-800">
    <CheckCircle className={`w-5 h-5 mt-1 shrink-0 ${color}`} />
    <span>{text}</span>
  </li>
);

const ComplianceComparison = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-orange-800 to-gray-600 bg-clip-text text-transparent mb-12 tracking-tight">
        How TurboAudit Complements Your Compliance Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* TurboAudit Box (taller) */}
        <div className="relative bg-[#e6f1fd] border border-blue-200 rounded-2xl p-8 shadow-md text-gray-800 min-h-[600px]">
          <div className="flex flex-col items-center mb-4">
            <ShieldCheck className="text-blue-600 w-10 h-10 mb-2" />
            <h3 className="text-xl sm:text-2xl font-semibold text-center">
              TurboAudit: AI Analysis Engine
            </h3>
          </div>
          <p className="font-medium mb-4 text-center text-gray-700">
            <span className="font-bold">Focus:</span> Deep Analysis for Readiness & Audit
          </p>
          <ul className="space-y-3">
            <Points text="AI workbench for implementers & auditors needing deep insights." color="text-blue-600" />
            <Points text="Automates analysis of uploaded policies, documents, and evidence." color="text-blue-600" />
            <Points text="Identifies compliance gaps and assesses evidence against standards (ISO 27001, etc.)." color="text-blue-600" />
            <Points text="Enhances efficiency and depth for both audit readiness and execution." color="text-blue-600" />
            <Points text="Categorizes audit findings based on severity." color="text-blue-600" />
            <Points text="Complements GRC platforms by providing focused analytical power to conduct audit." color="text-blue-600" />
          </ul>
          
          {/* Bottom icon - matches box color scheme */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-500 opacity-20">
            <Zap className="w-16 h-16" />
          </div>
        </div>

        {/* GRC Platforms Box (shorter) */}
        <div className="relative bg-[#fff7dc] border border-yellow-200 rounded-2xl p-8 shadow-md text-gray-800 min-h-[300px] mt-24">
          <div className="flex flex-col items-center mb-4">
            <Shield className="text-yellow-500 w-10 h-10 mb-2" />
            <h3 className="text-xl sm:text-2xl font-semibold text-center">
              GRC Platforms
            </h3>
          </div>
          <p className="font-medium mb-4 text-center text-gray-700">
            <span className="font-bold">Focus:</span> Continuous Monitoring & Company-Wide Prep
          </p>
          <ul className="space-y-3">
            <Points text="Designed for companies seeking ongoing compliance management." color="text-yellow-600" />
            <Points text="Automates evidence collection via direct integrations (Cloud/SaaS)." color="text-yellow-600" />
            <Points text="Continuous monitoring of technical controls against frameworks." color="text-yellow-600" />
            <Points text="Manage company-wide tasks like policy distribution & training." color="text-yellow-600" />
            <Points text="Streamline overall company readiness and maintain compliance posture." color="text-yellow-600" />
          </ul>
          
          {/* Bottom icon - matches box color scheme */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-yellow-500 opacity-20">
            <Layers className="w-16 h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceComparison;