"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="pt-0 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white min-h-[600px] flex items-center justify-center p-8 lg:p-12"
          >
            <div className="relative w-full min-h-[360px] h-full rounded-tr-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)] group">
              <Image
                src="/about.jpg"
                alt="Andrews Premium About"
                fill
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col justify-center px-10 py-16 lg:py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-black leading-tight mb-6"
            >
              <span className="text-gray-900">Crafted</span>{" "}
              <span className="text-[#235c38]">by Hand</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="w-10 h-1 bg-[#235c38] mb-6 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              className="text-gray-700 text-base leading-relaxed mb-4"
            >
              At Andrews Premium, every sausage is a testament to the craft. We source
              only the finest pork cuts from trusted farms, processed in our
              certified facility using recipes perfected over 25 years.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="text-gray-500 text-sm leading-relaxed mb-8"
            >
              Our strategy is simple: quality raw material, expert craftsmanship,
              and zero shortcuts. We believe that what goes into our products is just
              as important as what comes out — rich, flavourful, and safe for every
              family at every table.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              href="about"
              className="inline-block bg-[#235c38] text-white px-7 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#1a4529] hover:translate-x-1 transition-all duration-200 self-start touch-manipulation"
            >
              Read More
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
