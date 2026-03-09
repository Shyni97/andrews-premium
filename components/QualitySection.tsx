"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function QualitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="quality" ref={ref} className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xl font-black text-gray-900 inline-block">
            Overview{" "}
            <span className="text-[#235c38]">Andrews Premium</span>
          </p>
          <div className="w-10 h-[3px] bg-[#235c38] mt-1" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Who We Are</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We grow our crops naturally. We are a fast-growing agricultural technology company
              passionate about ensuring food security. We leverage our technology to improve
              productivity &amp; sales to promote food security for you and your family.
            </p>
            {/* Factory image */}
            <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.14)] bg-gray-200 aspect-[4/3] relative group">
              <div className="absolute inset-0 bg-[url('/pork2.jpg')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-600 ease-out" />
            </div>
          </motion.div>

          {/* Why Us */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Why Us</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We grow our crops naturally. We are a fast-growing agricultural technology company
              passionate about ensuring food security. We leverage our technology to improve
              productivity &amp; sales to promote food security for you and your family.
            </p>

            {/* Main image with floating small image */}
            <div className="relative">
              {/* Large main image */}
              <div className="rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.14)] bg-gray-200 aspect-[4/3] relative group">
                <div className="absolute inset-0 bg-[url('/porkNav.jpg')] bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-600 ease-out" />
              </div>

              {/* Floating small image — top right overlap */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="absolute -top-6 -right-6 w-[38%] aspect-square rounded-2xl overflow-hidden shadow-[0_10px_32px_rgba(0,0,0,0.18)] bg-gray-300 border-4 border-white z-10"
              >
                <div className="absolute inset-0 bg-[url('/pork5.jpg')] bg-cover bg-center" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-1 text-gray-400">
                  <svg className="w-7 h-7 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] opacity-30">Small</span>
                </div>
              </motion.div>
            </div>

            {/* Yellow pill Read More */}
            <div className="mt-8 flex justify-end">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-3 bg-[#e47f24] text-gray-900 pl-6 pr-2 py-2 rounded-full font-bold text-sm hover:bg-[#c56a1f] transition-colors duration-200"
              >
                Read More
                <span className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
