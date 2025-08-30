"use client";
import React from "react";
import { RiRobot2Line } from "react-icons/ri";
import { CiStethoscope } from "react-icons/ci";
import { TbClock24 } from "react-icons/tb";
// import AIChatFinal from "../AIChatFinal";

const Features = [
  {
    title: "Smart Symptom Analysis",
    description:
      "AI detects possible conditions & suggests treatments in India or abroad.",
    icon: <RiRobot2Line className="text-emerald-900 w-8 h-8" />,
  },
  {
    title: "Doctor Matching",
    description:
      "Verified specialists based on your symptoms, budget & travel needs.",
    icon: <CiStethoscope className="text-emerald-900 w-8 h-8" />,
  },
  {
    title: "Available Anytime",
    description:
      "24/7 medical assistance, even in emergencies, free consultation for new users.",
    icon: <TbClock24 className="text-emerald-900 w-8 h-8" />,
  },
];

const SymptomChecker = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-teal-500 text-black">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        AI-Powered Symptom Checker for Fast Medical Treatment in India
      </h2>
      <p className="text-center text-teal-100 mb-10 max-w-3xl mx-auto">
        Our AI health checker instantly analyzes your symptoms and connects you
        with top Indian hospitals, doctors, and affordable treatment packages,
        trusted by patients from 20+ countries.
      </p>

      {/* Layout */}
      <div className="grid md:grid-cols-3 gap-6 justify-center max-w-7xl mx-auto">
        {/* Chat Box */}
        <div className="md:col-span-2 bg-gradient-to-br from-white via-pink-100 to-purple-100 rounded-2xl shadow-lg overflow-hidden max-h-[90vh]">
          {/* <AIChatFinal /> */}
          AI Chat Component will be added soon
        </div>

        {/* Features */}
        <div className="flex flex-col gap-4">
          {Features.map((feature, i) => (
            <div
              key={i}
              className="flex gap-3 items-start p-5 rounded-2xl shadow-md bg-white"
            >
              {/* Icon */}
              <div className="flex-shrink-0">{feature.icon}</div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker;
