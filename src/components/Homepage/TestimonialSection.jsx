"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Patients Served" },
  { value: "4.9/5", label: "Satisfaction Rating" },
  { value: "30+", label: "Cities Covered" },
  { value: "500+", label: "Verified Doctors" },
];

const reviewImages = [
  "/reviews_post/1.webp",
  "/reviews_post/2.webp",
  "/reviews_post/3.webp",
  "/reviews_post/4.webp",
  "/reviews_post/5.webp",
];

// duplicate for infinite loop
const allImages = [...reviewImages, ...reviewImages];

const TestimonialsSection = () => {
  const [carouselHeight, setCarouselHeight] = useState(300);

  useEffect(() => {
    const getHeight = () => {
      if (window.innerWidth < 600) return 200;
      if (window.innerWidth < 900) return 250;
      return 300;
    };
    setCarouselHeight(getHeight());
    window.addEventListener("resize", () => setCarouselHeight(getHeight()));
    return () =>
      window.removeEventListener("resize", () =>
        setCarouselHeight(getHeight())
      );
  }, []);

  return (
    <section
      className="py-10 text-white"
      style={{
        backgroundColor: "#52C7BE",
        backgroundImage: "url('/testimonial background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold drop-shadow-sm">
                {item.value}
              </div>
              <div className="text-sm md:text-base font-semibold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Headline */}
        <h2 className="text-center font-extrabold mb-6 text-2xl md:text-3xl drop-shadow-lg leading-snug">
          Globally Trusted by Thousands of Patients
        </h2>

        {/* Google Review Banner */}
        <div className="text-center mb-6">
          <img
            src="/google review.webp"
            alt="Google Review"
            className="mx-auto h-[120px] md:h-[100px] object-contain"
          />
        </div>

        {/* Carousel */}
        <div className="relative max-w-full mx-auto mb-6">
          <div
            className="overflow-hidden rounded-2xl shadow-lg w-full"
            style={{ height: `${carouselHeight}px`, maxHeight: "300px" }}
          >
            <motion.div
              className="flex gap-4 h-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {allImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Review ${idx + 1}`}
                  className="h-full w-auto rounded-lg object-cover"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
