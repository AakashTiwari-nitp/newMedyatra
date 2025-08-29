"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  Star, 
  Shield,
  MessageCircle,
  Calculator
} from 'lucide-react';
import ConsultationForm from './ConsultationForm.jsx';

const HeroSection = () => {
  const router = useRouter();

  const chipData = [
    { 
      label: '10000+ patients served', 
      icon: <Users size={16} /> 
    },
    { 
      label: '4.9 ⭐ average rating', 
      icon: <Star size={16} /> 
    },
    { 
      label: 'Trusted by Hospitals', 
      icon: <Shield size={16} /> 
    }
  ];

  const hospitals = [
    { label: "Fortis", link: "https://www.fortishealthcare.com/" },
    { label: "Max", link: "https://www.maxhealthcare.in/" },
    { label: "Apollo", link: "https://www.apollohospitals.com/" },
    { label: "AIIMS", link: "https://aiims.edu/index.php/en" },
  ];

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="px-4 md:px-16 py-8 bg-gradient-to-br from-white via-pink-50 to-purple-100">
      <div className="max-w-6xl mx-auto pb-12 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-[#2f2f2f] text-center md:text-left leading-tight">
              Compare Treatment Costs in India & Get Your Custom Plan and Save Up to 70% on World-Class Care
            </h1>

            <p className="text-gray-600 max-w-md text-center md:text-left mx-auto md:mx-0 mb-6">
              Speak to our MedYatra AI companion – We've Helped 10,000+ People Like You
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <button
                onClick={() => handleNavigation('/chat')}
                className="w-full sm:w-auto max-w-xs bg-[#1D4645] text-white px-6 py-3 rounded-md hover:bg-[#333] transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <MessageCircle size={18} />
                Chat With AI Agent
              </button>

              <button
                onClick={() => handleNavigation('/compare-cost')}
                className="w-full sm:w-auto max-w-xs bg-white text-[#1D4645] px-6 py-3 rounded-md border border-[#1D4645] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <Calculator size={18} />
                Compare Treatment Cost
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center">
              {chipData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-800 rounded-full border border-[#28938C] text-sm"
                >
                  <span className="text-[#28938C]">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Partner logos */}
            <div className="space-y-3">
              <p className="text-gray-600 text-center md:text-left">
                Trusted by leading healthcare partners:
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center">
                {hospitals.map((hospital, index) => (
                  <a
                    key={index}
                    href={hospital.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#EEFAF9] text-gray-800 rounded-full border border-[#28938C] hover:bg-[#28938C] hover:text-white transition-colors text-sm font-medium no-underline"
                  >
                    {hospital.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;