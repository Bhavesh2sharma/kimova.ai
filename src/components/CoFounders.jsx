import React from 'react';

const team = [
  {
    name: 'Mohit Vaishnav',
    image: '/src/assets/mohit_vaishnav.jpeg',
    title: 'Co-Founder & AI Visionary',
    education: 'PhD in AI & Natural Intelligence',
    institution: 'Toulouse Institute (ANITI) & Brown University',
    description: `Meet Mohit Vaishnav, a visionary entrepreneur and co-founder of Kimova, a pioneering solution provider revolutionizing the audit landscape. With a Doctor of Philosophy in Artificial and Natural Intelligence from the Toulouse Institute (ANITI) and Brown University (USA), Mohit brings a wealth of expertise in developing advanced AI solutions and leveraging deep learning models. Mohit's passion for technology and commitment to excellence align perfectly with Kimova's mission of redefining the audit experience through innovation and efficiency. As someone deeply motivated to apply his knowledge to solving practical applications, auditing represents a specific use case where reasoning is paramount, making Mohit's expertise invaluable in driving Kimova's success and shaping the future of auditing.`,
  },
  {
    name: 'Krishna Vaishnav',
    image: '/src/assets/krishna_vaishnav.jpeg',
    title: 'Co-Founder & Security Expert',
    education: 'Master\'s in Cyber Security',
    institution: 'Tallinn University of Technology & University of Tartu',
    description: `At Kimova, Krishna brings over three years of experience in the information security auditing field. She has earned a Master's degree in Cyber Security from Tallinn University of Technology and University of Tartu. Her academic and professional journey has cultivated profound expertise in assessing and enhancing information security systems and protocols. Krishna is at the forefront of transforming auditing activities from manual to automated processes, providing vital insights into the actual challenges faced during auditing. Kimova's mission, aligned with Krishna's personal goals, is to deliver high-quality audits that revolutionize the auditing process without compromising the thoroughness and reliability of results expected in high-stakes environments.`,
  },
];

const CoFounders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 text-sm font-medium tracking-wide uppercase px-4 py-2 bg-orange-50 rounded-full border border-orange-200">
              Leadership Team
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Meet Our Co-Founders
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced leaders driving innovation in AI-powered auditing solutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32 rounded-full shadow-lg">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback initials (hidden by default) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full hidden items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 text-lg font-semibold mb-3">
                    {member.title}
                  </p>
                  <div className="space-y-1">
                    <p className="text-gray-700 text-sm font-medium">
                      {member.education}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {member.institution}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-px bg-orange-300"></div>
                </div>

                {/* Description */}
                <div className="text-gray-600 text-sm leading-relaxed">
                  <p>{member.description}</p>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Transforming the future of auditing with AI innovation</span>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoFounders;