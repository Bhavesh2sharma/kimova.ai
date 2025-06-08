import React, { useEffect, useRef, useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const answerRefs = useRef([]); // Ref to store answer elements

    useEffect(() => {
        const isDesktop = window.innerWidth >= 768;
        if (isDesktop) {
            setOpenIndex(0);
        }
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: 'What is TurboAudit??',
            answer: (
                <div className="flex flex-col gap-4">
                    <p>TurboAudit is an AI-powered compliance solution that automates ISMS audits, identifies security gaps in documents, and provides actionable insights to streamline ISO 27001 compliance workflows.</p>
                </div>
            ),
        },
        {
            question: "How accurate is TurboAudit's gap analysis?",
            answer: "TurboAudit achieves 95% accuracy in identifying compliance gaps using advanced AI that cross-references documents with ISO 27001 requirements in real-time.",
        },
        {
            question: "Does TurboAudit replace human auditors?",
            answer: "No, it augments auditors by automating 80% of manual work while highlighting critical areas needing human expertise for final assessment.",
        },
        {
            question: "What file formats does TurboAudit support?",
            answer: "It analyzes PDFs, Word docs, Excel sheets, and scans with OCR capability for handwritten audit notes and legacy documents.",
        },
        {
            question: "Can TurboAudit track remediation progress?",
            answer: "Yes, it automatically monitors corrective actions, sends reminders, and updates compliance dashboards as gaps are resolved.",
        }
    ];

    return (
        <div className="py-8 mt-12 md:py-16 font-sans bg-gray-50">
            <section className="container mx-auto px-4 md:flex md:flex-row gap-16 max-w-7xl">
                <div className="flex-1 flex flex-col gap-10 mb-12 md:mb-0">
                    <h2 className="text-2xl md:text-5xl font-bold text-center text-gray-800 leading-tight">
                        Frequently Asked <span className="text-[#DD5100]">Questions</span>
                    </h2>
                    <div className="bg-gradient-to-br from-orange-100 to-orange-100 border border-orange-200 flex flex-col gap-8 justify-center items-center p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-52 h-14 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
                            <span className="text-white font-bold text-xl tracking-wide">Talk to Us</span>
                        </div>
                        <div className="flex flex-col gap-3 text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800">Still have questions?</h3>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md">
                                We're here for you. Talk to us and let us know how we can help.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8">
                        {faqItems.map((item, index) => (
                            <div key={index} className="border-b border-orange-100 last:border-none">
                                <h3 className="flex">
                                    <button
                                        type="button"
                                        aria-expanded={openIndex === index}
                                        className="faq-question flex flex-1 justify-between text-left text-base md:text-xl font-semibold py-6 md:py-8 hover:text-orange-600 transition-colors duration-300 text-gray-800"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="leading-relaxed pr-4">{item.question}</span>
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 md:h-7 md:w-7 transition-transform duration-300 text-orange-500 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                        >
                                            <path
                                                d="M3.135 6.158a.5.5 0 0 1 .707-.02L7.5 9.565l3.658-3.427a.5.5 0 0 1 .707.708l-4 3.75a.5.5 0 0 1-.707 0l-4-3.75a.5.5 0 0 1-.02-.707z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </h3>
                                <div
                                    ref={el => (answerRefs.current[index] = el)}
                                    className={`text-base md:text-lg text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                                        openIndex === index 
                                            ? 'max-h-96 opacity-100 mb-4' 
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="pb-6 md:pb-8 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;