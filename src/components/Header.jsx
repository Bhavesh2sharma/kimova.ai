import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const treatments = [
  "AI Policy analyzer",
  "AI ISMS audit",
  "AI audit notes",
  "Ask ISMS",
  "Ask AIMS",
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleDropdownMouseEnter = () => setDropdownOpen(true);
  const handleDropdownMouseLeave = () => setDropdownOpen(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  return (
    <header className="bg-white shadow-md py-4 px-6 w-full fixed top-0 z-50">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[#1f1f1f] font-medium">
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">Home</a>
          
          {/* Desktop Treatment Dropdown with Circular Animation */}
          <div
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button className="flex items-center gap-1 hover:text-orange-500 transition-colors duration-300">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Circular Dropdown Background */}
            <div className="relative">
              <div className={`
                absolute left-1/2 top-2 -translate-x-1/2 transition-all duration-500 ease-out
                ${dropdownOpen ? 'w-96 h-96 opacity-100 scale-100' : 'w-0 h-0 opacity-0 scale-0'}
                bg-gradient-to-br from-orange-400 to-orange-600 rounded-full z-10 shadow-2xl
              `}></div>
              
              {/* Dropdown Items */}
              {dropdownOpen && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 w-80">
                  <div className="bg-transparent rounded-lg p-6 space-y-4">
                    {treatments.map((item, index) => (
                      <a
                        key={item}
                        href="#"
                        className={`
                          block text-white transition-all duration-200
                          text-center py-2 px-4 rounded-lg 
                          transform hover:scale-105 opacity-0 translate-y-2
                        `}
                        style={{ 
                          animation: dropdownOpen ? `slideInUp 0.3s ease-out ${index * 0.05}s forwards` : 'none'
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <a href="#" className="hover:text-orange-500 transition-colors duration-300">Our Blogs</a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">About Us</a>
          <a href="#" className="hover:text-orange-500 transition-colors duration-300">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative">
          <button
            onClick={toggleMobileMenu}
            className="p-3 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Overlay */}
          <div className={`
            fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40
            ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `} onClick={toggleMobileMenu}></div>

          {/* Mobile Menu Circle */}
          <div className={`
          fixed top-4 right-6 w-96 h-96 rounded-full overflow-hidden z-50
          bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl
          transition-all duration-500 ease-out origin-top-right
          ${mobileMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
        `}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              {!mobileDropdownOpen ? (
                <div className="space-y-6 text-center">
                  <a href="#" className="block text-white font-medium text-lg hover:text-orange-100 transition-colors duration-300">
                    Home
                  </a>
                  
                  {/* Mobile Treatment Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleMobileDropdown}
                      className="flex items-center gap-2 text-white font-medium text-lg hover:text-orange-100 transition-colors duration-300"
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <a href="#" className="block text-white font-medium text-lg hover:text-orange-100 transition-colors duration-300">
                    Our Blogs
                  </a>
                  <a href="#" className="block text-white font-medium text-lg hover:text-orange-100 transition-colors duration-300">
                    About Us
                  </a>
                  <a href="#" className="block text-white font-medium text-lg hover:text-orange-100 transition-colors duration-300">
                    Contact Us
                  </a>
                </div>
              ) : (
                <div className="space-y-6 text-center w-full">
                  <div className="mb-8">
                    <button
                      onClick={toggleMobileDropdown}
                      className="flex items-center gap-2 text-white font-medium text-xl hover:text-orange-100 transition-colors duration-300 mx-auto"
                    >
                      Services
                      <ChevronDown className="w-5 h-5 rotate-180" />
                    </button>
                  </div>
                  {/* Mobile Treatment Dropdown Items */}
                  <div className="space-y-4 max-h-64 overflow-y-auto px-4">
                    {treatments.map((item, index) => (
                      <a
                        key={item}
                        href="#"
                        className={`
                          block text-orange-100 text-base hover:text-white transition-all duration-200
                          text-center py-3 px-4 rounded-lg hover:bg-white/10
                          transform hover:scale-105 opacity-0 translate-y-2
                        `}
                        style={{ 
                          animation: mobileDropdownOpen ? `slideInUp 0.3s ease-out ${index * 0.2}s forwards` : 'none'
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;