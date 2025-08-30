'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const treatments = [
    {
        name: "IVF",
        subtitle: "Journey To Parenthood with IVF",
        description:
            "Struggling to conceive? IVF is a proven method where eggs and sperm are combined in a lab, and embryos are implanted in the uterus.",
        types: [
            "Fertility Assessments",
            "IVF & IUI Procedures", 
            "Eggs Freezing",
            "Genetic Testing",
            "Fertility Preservation",
        ],
        fee: "Free",
        tag: "Available Today",
        image: "/doctors/ivf.webp",
    },
    {
        name: "Hair Transplant",
        subtitle: "Regain Your Hair, Regain Confidence",
        description:
            "Hair transplant restores natural look using advanced FUE & FUT methods to move healthy follicles to balding areas.",
        types: [
            "FUE (Follicular Unit Extraction)",
            "FUT (Strip Method)",
            "DHI (Direct Hair Implantation)",
            "Beard / Eyebrow Transplants",
            "Scalp Micropigmentation",
        ],
        fee: "Free",
        tag: "Available Today",
        image: "/doctors/hair transplant.webp",
    },
    {
        name: "Dental Care",
        subtitle: "Dental Care That Makes You Smile",
        description:
            "We connect you with expert dental care - from basic cleaning to full smile makeovers - using cutting-edge technology.",
        types: [
            "Implants & Root Canals",
            "Braces & Aligners",
            "Teeth Whitening",
            "Smile Makeovers",
            "Full Mouth Rehab",
        ],
        fee: "Free",
        tag: "Available Today",
        image: "/doctors/dental.webp",
    },
    {
        name: "Cosmetic Procedures",
        subtitle: "Redefine Your With Confidence",
        description:
            "From subtle enhancements to full transformations, we help you access global cosmetic care with ease.",
        types: [
            "Botox & Fillers",
            "Liposuction & Rhinoplasty",
            "Skin Rejuvenation",
            "Facelift & Breast Procedures",
            "Plastic Surgery"
        ],
        fee: "Free",
        tag: "Available Today",
        image: "/doctors/cosmetic.webp",
    },
];

const TreatmentCard = ({ treatment }) => {
    const router = useRouter();
    
    return (
        <div className="max-w-sm w-full h-full text-black flex flex-col bg-white rounded-lg shadow-lg relative">
            <div className="relative">
                <Image
                    src={treatment.image}
                    alt="Doctor"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 right-2 bg-green-50 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {treatment.tag}
                </span>
            </div>

            <div className="flex-1 flex flex-col p-4">
                <h3 className="font-bold text-base mb-1">
                    {treatment.name}
                </h3>
                <h4 className="font-semibold text-sm text-gray-800 mb-2">
                    {treatment.subtitle}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                    {treatment.description}
                </p>

                <div className="mb-4">
                    <p className="font-semibold text-sm mb-2">Types:</p>
                    {treatment.types.map((type, i) => (
                        <p key={i} className="text-sm text-gray-500 mb-1">
                            {type}
                        </p>
                    ))}
                </div>

                <p className="font-semibold text-sm text-center mb-4">
                    Travel, treatment & transformation – <br />
                    all handled by Medyatra
                </p>

                <hr className="my-4 border-gray-200" />

                <div className="flex justify-between items-center mb-4">
                    <span className="text-black font-bold">{treatment.fee}</span>
                    <span className="text-xs text-gray-600">
                        Consultation fee
                    </span>
                </div>

                <button
                    className="mt-auto w-full bg-slate-700 border border-slate-700 text-white rounded-lg py-2 px-4 text-sm font-medium hover:bg-gray-800 hover:border-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                    onClick={() => router.push('/free-consultation')}
                >
                    <Calendar size={16} />
                    Free Consultation
                </button>
            </div>
        </div>
    );
};

const MultiSpecialitySection = () => {
    const router = useRouter();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-16 px-4 md:px-16 text-black bg-orange-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Multi Speciality Treatment Needs
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Our platform streamlines the accelerator application process from start to finish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {treatments.map((treatment, i) => (
                    <TreatmentCard key={i} treatment={treatment} />
                ))}
            </div>

            <div className="text-center mt-12">
                <button
                    className="bg-white border border-gray-400 text-gray-800 rounded-lg px-8 py-2 font-semibold hover:bg-gray-100 hover:border-gray-800 transition-colors duration-200 flex items-center gap-2 mx-auto"
                    onClick={() => router.push('/free-consultation')}
                >
                    View All Doctors
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default MultiSpecialitySection;