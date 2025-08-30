"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // for smooth marquee animation

const reviewImages = [
  "/treatmentExperience/1.webp",
  "/treatmentExperience/2.webp",
  "/treatmentExperience/3.webp",
  "/treatmentExperience/4.webp",
];

// duplicate for infinite loop effect
const allImages = [...reviewImages, ...reviewImages];

const TreatmentExperience = () => {
  const [carouselHeight, setCarouselHeight] = useState(600);

  useEffect(() => {
    const getHeight = () => {
      if (window.innerWidth < 600) return 400;
      if (window.innerWidth < 900) return 500;
      return 600;
    };
    setCarouselHeight(getHeight());
    window.addEventListener("resize", () => setCarouselHeight(getHeight()));
    return () => window.removeEventListener("resize", () => setCarouselHeight(getHeight()));
  }, []);

  return (
    <section
      className="py-10 text-white"
      style={{
        backgroundColor: "#111",
        backgroundImage: "url(/treatmentExperience/background.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      {/* Heading */}
      <h2 className="text-center font-extrabold mb-6 text-3xl md:text-5xl drop-shadow-lg leading-tight">
        Ensuring Best Treatment Experience
      </h2>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="relative w-full overflow-hidden rounded-3xl shadow-xl"
          style={{ height: `${carouselHeight}px`, maxHeight: "80vh" }}
        >
          <motion.div
            className="flex gap-6 items-center h-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {allImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Review ${i + 1}`}
                className="h-full w-auto rounded-2xl object-cover"
              />
            ))}
          </motion.div>

          {/* Gradient edge fade */}
          {/* <div className="pointer-events-none absolute inset-0 flex justify-between">
            <div className="w-32 h-full bg-gradient-to-r from-black/60 to-transparent" />
            <div className="w-32 h-full bg-gradient-to-l from-black/60 to-transparent" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TreatmentExperience;
