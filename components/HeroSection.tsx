"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0e0 e0e] pt-16">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/pork3.jpg')] bg-cover bg-center opacity-70" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0e0e0e] to-transparent" />

      {/* Red vertical accent bar */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-16 bottom-0 w-[3px] bg-[#235c38] origin-top z-20"
      />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 lg:px-14 w-full flex flex-col lg:flex-row items-center flex-1 gap-12 py-16">

        {/* Left — text */}
        <div className="flex-1 min-w-0">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#235c38] animate-pulse" />
            <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-medium">
              Premium Quality · Est. 1999
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-black leading-[0.95] tracking-tight"
            >
              <span
                className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent"
                style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.40)" }}
              >
                EXPLORE
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mt-1">
                The
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#235c38] mt-1">
                Tradition
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/50 text-sm md:text-base leading-relaxed mb-10 max-w-sm"
          >
            Andrews Premium — crafted with pride, delivered with passion.
            Better pork for a better future, straight from our facility to your table.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center gap-2 bg-[#235c38] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#1a4529] transition-colors duration-200 hover:gap-4"
            >
              Our Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="our-story"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              Our Story
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-5 text-white/40"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating ambient glow — static, no animation to avoid blur repaint jank */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#CC0000]/8 blur-[100px] pointer-events-none z-0" />
    </section>
  );
}
