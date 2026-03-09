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
      : { opacity: 0, y: 30 };
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

const timeline = [
  {
    year: "1998",
    title: "Where It All Began",
    body: "Andrews Premium was founded in Lagos by the Andrews family with a single smokehouse, a handful of recipes, and an unshakeable belief in quality pork.",
    img: "/img1.jpg",
    imgLeft: false,
  },
  {
    year: "2002",
    title: "Growing Our Craft",
    body: "We expanded our range of smoked and cured products, refining our proprietary spice blends and building deeper relationships with certified local farms.",
    img: "/img2.jpg",
    imgLeft: true,
  },
  {
    year: "2004",
    title: "First Retail Distribution",
    body: "Our Classic Pork Sausage hit supermarket shelves across Lagos State for the first time, quickly becoming a household staple at a competitive price.",
    img: "/img3.jpg",
    imgLeft: false,
  },
  {
    year: "2008",
    title: "Factory Expansion",
    body: "Growing demand led us to commission a new, larger processing facility equipped with cold-chain technology and modern food safety infrastructure.",
    img: "/img7.jpg",
    imgLeft: true,
  },
  {
    year: "2014",
    title: "ISO 22000 Certification",
    body: "Andrews Premium became one of the first indigenous Nigerian meat processors to achieve ISO 22000 food safety management certification.",
    img: "/img8.jpg",
    imgLeft: false,
  },
  {
    year: "2024",
    title: "Today & Beyond",
    body: "With over 5 million packs sold annually across 20+ states, we continue to innovate our product range while staying true to the craft our founders believed in.",
    img: "/about.jpg",
    imgLeft: true,
  },
];

export default function OurStoryPage() {
  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <div className="relative pt-16 min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.jpg" alt="Our Story" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-[#235c38] text-xs font-bold tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">Our Story</h1>
        </div>
      </div>

      {/* ── VISION & MISSION ── */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Label */}
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-10">
              Vision &amp; <span className="text-[#e91d26]">Mission</span>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Our Vision */}
            <FadeIn direction="left">
              <h2 className="text-2xl font-black text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                To be the most trusted processed meat brand in West Africa — known for uncompromising quality,
                farm-to-fork traceability, and products that bring families together at the table.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We envision a future where every Nigerian household reaches for Andrews Premium by name,
                confident in the safety, flavour, and value in every pack.
              </p>
            </FadeIn>

            {/* Our Mission */}
            <FadeIn direction="right" delay={0.1}>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Our Mission</h2>
              <div className="flex gap-6 items-start">
                <div className="flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    To produce premium quality pork sausage products using certified raw materials,
                    world-class food safety standards, and recipes perfected over 25 years.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We are committed to fair pricing, consistent innovation, and building lasting trust with
                    every retailer, caterer, and family we serve.
                  </p>
                </div>
                <div className="relative w-28 h-28 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <Image src="/img1.jpg" alt="Mission" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-2xl font-black text-gray-900 mb-16">Our Story</h2>
          </FadeIn>

          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative flex items-stretch min-h-[220px]">
                  {/* Year badge on the center line */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 z-20 bg-[#CC0000] text-white text-xs font-black px-3 py-1 rounded-sm shadow">
                    {item.year}
                  </div>

                  {item.imgLeft ? (
                    <>
                      {/* Image — left */}
                      <FadeIn direction="left" delay={0.05} className="w-1/2 pr-10 pt-16 pb-8">
                        <div className="relative w-full h-44 overflow-hidden shadow-md">
                          <Image src={item.img} alt={item.title} fill className="object-cover" />
                        </div>
                      </FadeIn>
                      {/* Text box — right */}
                      <FadeIn direction="right" delay={0.1} className="w-1/2 pl-10 pt-16 pb-8">
                        <div className="bg-gray-100 rounded-sm p-6 h-44 flex flex-col justify-center">
                          <h3 className="font-black text-gray-900 text-base mb-2">{item.title}</h3>
                          <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
                        </div>
                      </FadeIn>
                    </>
                  ) : (
                    <>
                      {/* Text box — left */}
                      <FadeIn direction="left" delay={0.05} className="w-1/2 pr-10 pt-16 pb-8">
                        <div className="bg-gray-100 rounded-sm p-6 h-44 flex flex-col justify-center">
                          <h3 className="font-black text-gray-900 text-base mb-2">{item.title}</h3>
                          <p className="text-gray-500 text-xs leading-relaxed">{item.body}</p>
                        </div>
                      </FadeIn>
                      {/* Image — right */}
                      <FadeIn direction="right" delay={0.1} className="w-1/2 pl-10 pt-16 pb-8">
                        <div className="relative w-full h-44 overflow-hidden shadow-md">
                          <Image src={item.img} alt={item.title} fill className="object-cover" />
                        </div>
                      </FadeIn>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

