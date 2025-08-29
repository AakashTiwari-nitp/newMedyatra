"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUsers, FaStar, FaCheckCircle } from "react-icons/fa";
import { countries } from "./Countrylist.js"; // your country list

export default function ConsultationForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    treatment: "",
    problem: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = "This field is required";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const url = process.env.NEXT_PUBLIC_FORM_URL;

    const formBody = new URLSearchParams(formData).toString();

    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody,
      });

      alert("Form submitted successfully! We will contact you soon.");
      setFormData({
        name: "",
        country: "",
        treatment: "",
        problem: "",
        phone: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      alert(
        "Submission failed. Please check your internet connection and try again."
      );
    }
  };

  const chipData = [
    { label: "10000+ patients served", icon: <FaUsers size={16} /> },
    { label: "4.9 ⭐ average rating", icon: <FaStar size={16} /> },
    { label: "Trusted by Hospitals", icon: <FaCheckCircle size={16} /> },
  ];

  return (
    <div className="relative text-black w-full max-w-lg mx-auto p-6 bg-white rounded-4xl shadow-lg border overflow-hidden border-gray-200">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-900 to-teal-500 rounded-t-2xl"></div>

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-900">
          Get Free Consultation
        </h2>
        <p className="text-gray-600 mt-2 text-sm max-w-md mx-auto">
          Fill out the form below and our medical experts will contact you
          within 24 hours
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-6"
      >
        {/* Patient Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Home Country */}
        <div>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl bg-white focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none ${
              errors.country ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Home Country</option>
            {countries.map((country, idx) => (
              <option key={idx} value={country.label}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">{errors.country}</p>
          )}
        </div>

        {/* Treatment Needed */}
        <div>
          <select
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl bg-white focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none ${
              errors.treatment ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Treatment Needed</option>
            <option value="IVF">IVF Treatment</option>
            <option value="Hair">Hair Transplant</option>
            <option value="Cosmetic">Cosmetic Surgery</option>
            <option value="Dental">Dental Treatment</option>
            <option value="Other">Other</option>
          </select>
          {errors.treatment && (
            <p className="text-red-500 text-sm mt-1">{errors.treatment}</p>
          )}
        </div>

        {/* Medical Problem */}
        <div>
          <textarea
            name="problem"
            rows="4"
            placeholder="Describe Current Medical Problem..."
            value={formData.problem}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none ${
              errors.problem ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.problem && (
            <p className="text-red-500 text-sm mt-1">{errors.problem}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number (with country code)"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          <p className="text-gray-500 text-sm mt-1">
            {errors.phone || "Example: +1 234 567 8900"}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-teal-900 to-teal-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
        >
          Submit Request
        </button>
      </form>

      {/* Chips */}
      {/* <div className="flex justify-center gap-3 mt-6 flex-wrap">
        {chipData.map((chip, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700"
          >
            {chip.icon}
            {chip.label}
          </div>
        ))}
      </div> */}

      {/* Footer */}
      <div className="text-center mt-4">
        <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-500 inline-block"></span>
          100% Confidential • No Spam • Quick Response
        </p>
      </div>
    </div>
  );
}
