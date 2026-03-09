"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" ref={ref} className="py-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left – stacked images with badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white flex items-center justify-center p-8 lg:p-12 min-h-[480px] lg:min-h-[560px]"
          >
            <div className="relative w-full h-full min-h-[420px] flex flex-col rounded-tr-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
              {/* Top image */}
              <div className="flex-1 bg-gray-200 relative overflow-hidden border-b-2 border-white group">
                <Image
                  src="/img3.jpg"
                  alt="Andrews Premium Products"
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>
              {/* Bottom image */}
              <div className="flex-1 bg-gray-300 relative overflow-hidden group">
                <Image
                  src="/img2.jpg"
                  alt="Andrews Premium Quality"
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                />
              </div>
            </div>
            {/* Badge overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              className="absolute top-1/2 left-12 -translate-y-1/2 bg-[#235c38] text-white p-5 shadow-2xl z-20 text-center min-w-[110px]"
            >
              <p className="text-3xl font-black leading-none">+25</p>
              <p className="text-[10px] font-bold tracking-wide text-white/80 mt-1 leading-snug">
                Years<br />Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Right – text */}
          <div className="flex flex-col justify-center px-10 py-16 lg:py-20">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#235c38] text-xs font-bold tracking-[0.3em] uppercase mb-4"
            >
              About Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
            >
              From Kitchen
              <br />
              to Table
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              className="text-gray-600 text-sm leading-relaxed mb-4"
            >
              We are a family-focused meat processing company committed to quality,
              safety, and an unmatched eating experience. Every Andrews Premium
              product is made to the highest standards — not just for compliance,
              but because we believe every family deserves the best.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.48, ease: "easeOut" }}
              className="text-gray-500 text-sm leading-relaxed mb-8"
            >
              We maintain high-quality production standards, adhere to all
              regulatory requirements, and invest continuously in our people,
              processes, and products to deliver something you can always trust.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              href="#contact"
              className="inline-block bg-[#CC0000] text-white px-7 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#aa0000] hover:translate-x-1 transition-all duration-200 self-start touch-manipulation"
            >
              Read More
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
