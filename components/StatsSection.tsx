"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Pork Sourcing", desc: "Hand-selected cuts from certified farms" },
  { num: "02", title: "Processing", desc: "ISO-certified facility with HACCP controls" },
  { num: "03", title: "Seasoning", desc: "Proprietary herb and spice blends" },
  { num: "04", title: "Quality Check", desc: "Microbiological and sensory testing" },
  { num: "05", title: "Packaging", desc: "Vacuum-sealed for peak freshness" },
  { num: "06", title: "Distribution", desc: "Cold-chain delivery nationwide" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-white">
      {/* Background food image */}
      <div className="absolute inset-0 bg-[url('/process-bg.jpg')] bg-cover bg-center opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black">
            Our <span className="text-[#235c38]">Process</span>
          </h2>
          <div className="w-10 h-1 bg-[#235c38] mt-3" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              style={{ willChange: "transform" }}
              className="text-center group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="w-14 h-14 bg-[#CC0000] text-white font-black text-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_8px_24px_rgba(204,0,0,0.35)] transition-shadow duration-300"
              >
                {step.num}
              </motion.div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
