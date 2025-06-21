import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// import SoundFlare from '../../assets/images/Cloudflare_Logo.svg';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState('');
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null);
    const buttonRef = useRef(null);
    const pseudoElementRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('');
        }
    };

    const handleFileClick = () => {
        fileInputRef.current.click();
    };

    // New function to handle file removal
    const handleRemoveFile = () => {
        setFileName('');
        // Reset the file input value so the same file can be selected again
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            duration: 0.2,
            ease: "power1.out"
        });

        gsap.to(pseudoElementRef.current, {
            width: '500px',
            duration: 1,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            duration: 0.2,
            ease: "power1.out"
        });

        gsap.to(pseudoElementRef.current, {
            width: '0px',
            duration: 1,
            ease: "power2.out"
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log({ name, email, info });
    };

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#f9fbfb] flex justify-center items-center w-full shadow-2xl">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 lg:gap-20">
                {/* Left side with heading (outside the card) */}
                <div className="w-full md:w-2/5 mb-8 md:mb-0">
                    <div className="text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-4">
                            START BUILDING <br />
                            YOUR SOFTWARE.<br />
                            CONTACT US<br />
                            NOW
                            
                            <div className="relative">  
                                <img src="https://inoxoft.com/wp-content/themes/inoxoft/images/ico/form-arrow.svg" alt="arrow" className="w-24 sm:w-32 md:w-40 h-10 sm:h-12 md:h-14 ml-20 sm:ml-24 md:ml-32 -mt-10 sm:-mt-12 md:-mt-14" />
                            </div>
                        </h2>
                    </div>
                </div>

                {/* Right side with form (inside the card) */}
                <div className="w-full md:w-3/5">
                    <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">
                        {/* Contact person */}
                        <div className="mb-10 sm:mb-16 flex items-center">
                            <div className="mr-4">
                                <img
                                    src="https://inoxoft.com/wp-content/uploads/2023/11/gray-2.png"
                                    alt="Oleksii Kamynin"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="text-sm sm:text-base font-bold text-gray-800">Oleksii Kamynin</div>
                                <div className="text-xs sm:text-sm text-gray-600">Business Development Executive</div>
                                <div className="mt-1">
                                    <a
                                        href="#"
                                        className="text-[#1a5c8d]"
                                    >
                                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mb-6 sm:mb-8 relative">
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 transition-all duration-200 ${name ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
                                >
                                    Name *
                                </label>
                            </div>

                            <div className="mb-6 sm:mb-8 relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label
                                    htmlFor="email"
                                    className={`absolute left-0 transition-all duration-200 ${email ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
                                >
                                    E-mail *
                                </label>
                            </div>

                            <div className="mb-8 sm:mb-10 relative">
                                <input
                                    type="text"
                                    id="info"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500 bg-transparent"
                                    required
                                    value={info}
                                    onChange={(e) => setInfo(e.target.value)}
                                />
                                <label
                                    htmlFor="info"
                                    className={`absolute left-0 transition-all duration-200 ${info ? '-top-5 text-sm text-gray-600' : 'top-2 text-gray-500'}`}
                                >
                                    What we can do for you? *
                                </label>
                            </div>

                            {/* Attached file display */}
                            {fileName && (
                                <div className="mb-6 py-2 px-3 sm:px-4 bg-gray-50 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a5c8d] flex-shrink-0">
                                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                                    </svg>
                                    <span className="ml-2 text-xs sm:text-sm text-gray-700 truncate max-w-[calc(100%-60px)]">{fileName}</span>
                                    <button 
                                        type="button" 
                                        className="ml-auto text-gray-500 hover:text-gray-700 p-1"
                                        onClick={handleRemoveFile}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            )}

                            {/* Made responsive with flex-col on mobile and flex-row on larger screens */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20">
                                <div className="relative inline-block mb-4 sm:mb-0">
                                    <button
                                        type="submit"
                                        ref={buttonRef}
                                        className="relative inline-flex items-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 hover:text-white bg-white border border-[#00283b] hover:border-white rounded-full transition-all duration-300 overflow-hidden text-xs sm:text-sm font-medium cursor-pointer w-full sm:w-auto justify-center"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <span className="relative z-10 hover:text-white">
                                            SEND A MESSAGE
                                        </span>
                                        <span
                                            ref={pseudoElementRef}
                                            className="absolute left-[-20px] w-0 h-[500px] bg-[#00283b] rotate-[-29deg]"
                                        ></span>
                                    </button>
                                </div>

                                <div className="flex items-center text-[#1a5c8d]">
                                    <button
                                        type="button"
                                        onClick={handleFileClick}
                                        aria-label="Attach file"
                                        className="text-[#1a5c8d] cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" sm:width="20" sm:height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                                        </svg>
                                    </button>
                                    <span 
                                        className="ml-2 text-base sm:text-lg md:text-xl text-[#1a5c8d] cursor-pointer" 
                                        onClick={handleFileClick}
                                    >
                                        Attach file
                                    </span>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        className="hidden"
                                        accept=".gif,.png,.jpg,.jpeg,.txt,.doc,.pdf"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;