"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const socialLinks = [
  { label: "f", href: "#", color: "bg-[#1877F2]" },
  { label: "ig", href: "#", color: "bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]" },
  { label: "—", href: "#", color: "bg-[#333]" },
];

export default function DividerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/divider.jpg"
          alt="Andrews Premium Divider"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Centered animated content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="h-[2px] w-12 bg-[#CC0000] mx-auto mb-6 origin-center"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[#235c38] text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          Our Promise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
        >
          Quality You Can{" "}
          <span className="text-[#E8B800]">Taste</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/60 text-base mt-5 max-w-xl mx-auto leading-relaxed"
        >
          Over 25 years of crafting premium pork products — every bite tells
          the story of our commitment to excellence.
        </motion.p>
        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 mt-8 border border-white/30 text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors duration-200"
        >
          Explore Products
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>

      {/* Torn paper edge — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "70px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 L0,38 C18,44 30,28 48,33 C66,38 72,20 90,24 C108,28 116,14 136,18 C156,22 162,8 182,12 C202,16 210,4 228,6 C246,8 256,0 274,2 C292,4 300,16 318,14 C336,12 344,2 362,4 C380,6 390,18 408,16 C426,14 432,2 452,4 C472,6 478,20 498,18 C518,16 524,4 544,6 C564,8 572,22 590,20 C608,18 616,6 636,8 C656,10 662,24 682,22 C702,20 710,8 730,10 C750,12 756,26 776,24 C796,22 802,10 822,12 C842,14 850,28 868,26 C886,24 894,12 912,14 C930,16 938,30 958,28 C978,26 984,12 1004,14 C1024,16 1032,32 1050,30 C1068,28 1076,14 1096,16 C1116,18 1122,34 1142,32 C1162,30 1168,16 1188,18 C1208,20 1216,36 1234,34 C1252,32 1260,18 1280,20 C1300,22 1308,38 1326,36 C1344,34 1352,20 1372,22 C1392,24 1408,40 1440,38 L1440,80 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Floating right social bar */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20">
        {socialLinks.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            whileHover={{ scale: 1.15, x: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`w-8 h-8 ${s.color} flex items-center justify-center text-white text-[11px] font-bold hover:opacity-90 transition-opacity duration-200`}
          >
            {s.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}

