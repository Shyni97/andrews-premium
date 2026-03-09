"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial =
    direction === "left"
      ? { opacity: 0, x: -40 }
      : direction === "right"
      ? { opacity: 0, x: 40 }
      : { opacity: 0, y: 25 };
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />

      {/* ── SMALL PAGE HEADER ── */}
      <div className="pt-16 bg-white px-6  border-b border-gray-100">
        
      </div>

      

      {/* ── US ON THE MAP ── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — contact details */}
          <FadeIn direction="left">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-black text-gray-900 text-sm mb-1">Office</p>
                <p className="text-gray-500 text-xs leading-relaxed">(+234) 0 000 0000</p>
                <p className="text-gray-500 text-xs">(+234) 0 000 0000</p>
                <p className="text-[#e91d26] text-xs mt-1">info@andrewspremium.com</p>
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm mb-1">Production Facility</p>
                <p className="text-gray-500 text-xs leading-relaxed">(+234) 0 000 0000</p>
                <p className="text-gray-500 text-xs">(+234) 0 000 0000</p>
                <p className="text-[#CC0000] text-xs mt-1">production@andrewspremium.com</p>
              </div>
              <div className="sm:col-span-2">
                <p className="font-black text-gray-900 text-sm mb-1">Customer Service</p>
                <p className="text-gray-500 text-xs">(+234) 799 000 000</p>
                <p className="text-[#CC0000] text-xs mt-1">customerservice@andrewspremium.com</p>
              </div>
            </div>
          </FadeIn>

          {/* Right — food image */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
              <Image src="/img3.jpg" alt="Andrews Premium" fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── GET IN TOUCH heading ── */}
      <section className="pt-16 pb-4 text-center px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Get in <span className="text-[#CC0000]">touch</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Let&apos;s Talk Quality Food</p>
        </FadeIn>
      </section>

      {/* ── LET'S CONNECT FORM ── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <FadeIn direction="left">
            <h3 className="text-base font-black text-gray-900 mb-6">Let&apos;s connect</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#235c38] transition-colors"
                />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#235c38] transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#235c38] transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#235c38] transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#235c38] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#235c38] text-white py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#1a4529] transition-colors duration-200"
              >
                Contact Us
              </button>
            </form>
          </FadeIn>

          {/* Right food image */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative h-100 w-full overflow-hidden rounded-lg shadow-lg">
              <Image src="/img2.jpg" alt="Andrews Premium Food" fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

