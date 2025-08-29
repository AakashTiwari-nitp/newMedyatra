"use client";
import React from "react";
import { FaComments, FaUserFriends, FaCalendarCheck } from "react-icons/fa";

const steps = [
  {
    icon: <FaComments size={32} className="text-teal-900" />,
    title: "Describe Symptoms",
    description:
      "Share your health concerns in simple language, no medical jargon needed. Our AI understands both medical terms and everyday symptoms.",
  },
  {
    icon: <FaUserFriends size={32} className="text-teal-900" />,
    title: "Get Matched with Best Doctor",
    description:
      "Our AI instantly analyzes your symptoms, location, and preferences to connect you with top-rated, verified doctors.",
  },
  {
    icon: <FaCalendarCheck size={32} className="text-teal-900" />,
    title: "Schedule & Consult",
    description:
      "Book your appointment in seconds. Choose an online video consultation or an in-person visit at your convenience.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 bg-[#F8EEE2]">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How It Works
        </h2>
        <p className="text-gray-600 mt-2">
          Get connected with the right doctor in just three simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Icon inside avatar-like circle */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-white">
              {step.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 max-w-xs">{step.description}</p>

            {/* Step number */}
            <span className="text-xl font-bold text-gray-800">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
