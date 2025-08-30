"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";

const faq = [
    {
        question: "What is MedYatra?",
        answer:
            "MedYatra is a healthcare travel platform that connects you with top clinics and hospitals in India for Hair, IVF, Dental, and Cosmetic treatments. We also assist with travel, accommodation, and concierge services.",
    },
    {
        question: "How do I book a treatment through MedYatra?",
        answer:
            "You can select a treatment, choose a clinic, and book a consultation directly through our website. Our team will assist you throughout the process.",
    },
    {
        question: "Do you provide assistance with travel and accommodation?",
        answer:
            "Yes. We offer travel packages that include flights, hotel bookings, local transport (like Uber), and appointment scheduling.",
    },
    {
        question: "Are the clinics and doctors verified?",
        answer:
            "All listed clinics and doctors go through a thorough verification process based on experience, accreditation, and patient reviews.",
    },
    {
        question: "Can international patients use MedYatra?",
        answer:
            "Absolutely. MedYatra is built for both Indian and international patients seeking affordable, high-quality treatments in India.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const router = useRouter();

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 md:py-20 px-2 md:px-12 bg-[#F3ECE5]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image
                        src="/faq-illustration.webp"
                        alt="Doctor FAQ"
                        width={500}
                        height={400}
                        className="rounded-xl object-contain"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl text-black font-bold mb-2">Frequently Asked Questions</h2>
                    <p className="text-gray-600 mb-6">
                        Get answers to common questions about MedYatra
                    </p>

                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className="mb-3 rounded-xl border bg-white border-gray-200 shadow-sm"
                        >
                            <button
                                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-lg text-gray-800"
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                                <FiChevronDown
                                    className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-4 pb-4 text-sm text-gray-600">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Support Button */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 mb-2">Still have questions?</p>
                        <button
                            onClick={() => router.push("/free-consultation")}
                            className="px-6 py-2 rounded-lg border border-gray-400 bg-white text-gray-600 font-semibold hover:bg-gray-100 transition"
                        >
                            Contact Us Now!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
