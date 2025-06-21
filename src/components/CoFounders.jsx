import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Award, GraduationCap, Users, Target } from 'lucide-react';

const CoFounders = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coFounders = [
    {
      name: "Mohit Vaishnav",
      role: "Co-Founder & AI Visionary",
      bio: "Meet Mohit Vaishnav, a visionary entrepreneur and co-founder of Kimova, a pioneering solution provider revolutionizing the audit landscape. With a Doctor of Philosophy in Artificial and Natural Intelligence from the Toulouse Institute (ANITI) and Brown University (USA), Mohit brings a wealth of expertise in developing advanced AI solutions and leveraging deep learning models. Mohit's passion for technology and commitment to excellence align perfectly with Kimova's mission of redefining the audit experience through innovation and efficiency. As someone deeply motivated to apply his knowledge to solving practical applications, auditing represents a specific use case where reasoning is paramount, making Mohit's expertise invaluable in driving Kimova's success and shaping the future of auditing.",
      image: "/mohit_vaishnav.jpeg",
      expertise: ["AI Solutions", "Deep Learning", "Natural Intelligence", "Strategic Innovation"],
      education: "PhD in AI & Natural Intelligence, Toulouse Institute (ANITI) & Brown University (USA)",
      linkedin: "https://www.linkedin.com/in/mohit-vaishnav/",
      email: "mohit@kimova.ai"
    },
    {
      name: "Krishna Vaishnav",
      role: "Co-Founder & Security Expert",
      bio: "At Kimova, Krishna brings over three years of experience in the information security auditing field. She has earned a Master's degree in Cyber Security from Tallinn University of Technology and University of Tartu. Her academic and professional journey has cultivated profound expertise in assessing and enhancing information security systems and protocols. Krishna is at the forefront of transforming auditing activities from manual to automated processes, providing vital insights into the actual challenges faced during auditing. Kimova's mission, aligned with Krishna's personal goals, is to deliver high-quality audits that revolutionize the auditing process without compromising the thoroughness and reliability of results expected in high-stakes environments.",
      image: "/krishna_vaishnav.jpeg",
      expertise: ["Cyber Security", "Information Auditing", "Process Automation", "Risk Management"],
      education: "Master's in Cyber Security, Tallinn University of Technology & University of Tartu",
      linkedin: "https://www.linkedin.com/in/krishnathevaishnav/",
      email: "krishna@kimova.ai"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 relative overflow-hidden font-playfair">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes floatRotate {
          0%, 100% { transform: translateY(0px) rotate(45deg) scale(1); }
          33% { transform: translateY(-15px) rotate(55deg) scale(1.1); }
          66% { transform: translateY(-10px) rotate(35deg) scale(0.9); }
        }
        
        @keyframes floatScale {
          0%, 100% { transform: translateY(0px) rotate(12deg) scale(1); }
          25% { transform: translateY(-18px) rotate(23deg) scale(1.15); }
          50% { transform: translateY(-14px) rotate(10deg) scale(1.35); }
          75% { transform: translateY(-19px) rotate(28deg) scale(1.42); }
        }
        
        .float-1 { animation: float 3s ease-in-out infinite; }
        .float-2 { animation: float 4s ease-in-out infinite reverse; }
        .float-3 { animation: floatRotate 4s ease-in-out infinite; }
        .float-4 { animation: float 3s ease-in-out infinite; }
        .float-5 { animation: floatScale 5s ease-in-out infinite; }
        .float-6 { animation: float 2s ease-in-out infinite reverse; }
      `}</style>
      {/* Cool Background with Floating Shapes */}
      <div className="absolute inset-0">
        {/* Base gradient overlay */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Floating shapes */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#DD5100]/5 float-1"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 mb-20 rounded-full bg-[#00283b]/5 float-2"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#DD5100]/10 rounded-lg float-3"></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-[#00283b]/8 rounded-full float-4"></div>
        <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-[#DD5100]/5 to-[#00283b]/5 rounded-lg float-5"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#DD5100]/15 rounded-full float-6"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-5 "></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-screen-2xl ">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#00283b] to-transparent" />
            <Users className="w-5 h-5 text-[#00283b]" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent via-[#00283b] to-transparent" />
          </div>
          <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">Leadership</h1>
          <div className="text-xl text-[#00283b] font-medium mb-8 tracking-wide">
            Visionary Founders
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Meet the exceptional minds pioneering the future of intelligent automation and security.
          </p>
        </div>

        {/* Founders - now using full width */}
        <div className="mx-auto space-y-24 w-full">
          {coFounders.map((founder, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Image + Personal Info Column - unchanged position */}
              <div className={`w-full lg:w-2/5 flex flex-col items-center lg:items-start gap-6 ${index % 2 === 1 ? 'lg:ml-24' : ''}`}>
                <div className="relative w-fit">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-72 h-72 object-cover ml-30 rounded-lg shadow-md"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))'
                    }}
                  />
                </div>

                <div className="text-center ml-30 lg:text-left">
                  <h2 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">{founder.name}</h2>
                  <div className="text-lg text-[#00283b] font-medium">{founder.role}</div>
                </div>

                <div className="flex gap-5 ml-30">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-gray-600 hover:text-[#00283b] transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-xs font-light uppercase tracking-wide">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${founder.email}`}
                    className="group flex items-center gap-2 text-gray-600 hover:text-[#00283b] transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-xs font-light uppercase tracking-wide">Email</span>
                  </a>
                </div>
              </div>

              {/* Bio + Professional Info Column - now wider with centered text */}
              <div className="w-full lg:w-3/5 flex flex-col gap-8 px-4 ml-10 sm:px-0">
                <p className="text-lg text-gray-700 leading-relaxed font-light text-center w-full max-w-4xl mx-auto">
                  {founder.bio}
                </p>
                
                <div className="flex items-start gap-4 w-full max-w-4xl mx-auto">
                  <GraduationCap className="w-5 h-5 text-[#00283b] mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-sm text-[#00283b] font-semibold mb-1 uppercase tracking-wide">
                      Education
                    </div>
                    <div className="text-gray-700 font-light">{founder.education}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 w-full max-w-4xl mx-auto">
                  <Target className="w-5 h-5 text-[#00283b] mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-sm text-[#00283b] font-semibold mb-2 uppercase tracking-wide">
                      Core Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-[#00283b] text-white text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoFounders;