import React from 'react';
import { ShieldCheck, Shield, CheckCircle, Zap, Layers } from 'lucide-react';

const Points = ({ text, color }) => (
  <li className="flex items-start gap-3 text-gray-800 mb-4 [font-family:'Satoshi']">
    <CheckCircle className={`w-5 h-5 mt-1 shrink-0 ${color}`} />
    <span className="text-lg font-medium">{text}</span>
  </li>
);

const ComplianceComparison = () => {
  return (
    <section className="py-20 overflow-x-hidden [font-family:'Clash_Grotesk']">
      {/* Preload fonts in your index.html */}
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@300..700&family=Satoshi:wght@300..700&display=swap"
      />
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-orange-800 to-gray-600 bg-clip-text text-transparent mb-12 tracking-tight font-medium">
          How TurboAudit Complements Your Compliance Stack
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* TurboAudit Card */}
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-r-full lg:rounded-l-none p-10 shadow-xl border-t border-b border-r border-blue-500">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <div className="p-4 bg-blue-50 rounded-full mb-4">
                <ShieldCheck className="text-blue-600 w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-center text-gray-900 font-semibold">
                TurboAudit: AI Analysis Engine
              </h3>
              <p className="text-xl text-gray-600 mt-2 text-center [font-family:'Satoshi']">
                <span className="font-semibold">Focus:</span> Deep Analysis for Readiness & Audit
              </p>
            </div>
            <ul className="space-y-4">
              <Points text="AI workbench for implementers & auditors needing deep insights" color="text-blue-500" />
              <Points text="Automates analysis of uploaded policies and evidence" color="text-blue-500" />
              <Points text="Identifies compliance gaps against standards (ISO 27001, etc.)" color="text-blue-500" />
              <Points text="Enhances efficiency for audit readiness and execution" color="text-blue-500" />
              <Points text="Categorizes findings by severity" color="text-blue-500" />
              <Points text="Complements GRC platforms with analytical power" color="text-blue-500" />
            </ul>
            <div className="mt-8 text-center">
              <Zap className="w-16 h-16 text-blue-100 mx-auto" />
            </div>
          </div>
        </div>

        {/* GRC Platforms Card */}
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-l-full lg:rounded-r-none p-10 shadow-xl border-t border-b border-l border-green-500">
          <div className="max-w-2xl mx-auto ml-20">
            <div className="flex flex-col items-center mb-8">
              <div className="p-4 bg-green-50 rounded-full mb-4">
                <Shield className="text-green-600 w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold text-center text-gray-900 font-semibold">
                GRC Platforms
              </h3>
              <p className="text-xl text-gray-600 mt-2 text-center [font-family:'Satoshi']">
                <span className="font-semibold">Focus:</span> Continuous Monitoring & Company-Wide Prep
              </p>
            </div>
            <ul className="space-y-4">
              <Points text="For companies needing ongoing compliance management" color="text-green-500" />
              <Points text="Automates evidence collection via direct integrations" color="text-green-500" />
              <Points text="Continuous monitoring of technical controls" color="text-green-500" />
              <Points text="Manages company-wide policy distribution & training" color="text-green-500" />
              <Points text="Streamlines overall compliance posture" color="text-green-500" />
            </ul>
            <div className="mt-8 text-center">
              <Layers className="w-16 h-16 text-green-100 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceComparison;