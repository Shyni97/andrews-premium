"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* ── reusable fade-in wrapper ── */
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
      ? { opacity: 0, x: -50 }
      : direction === "right"
      ? { opacity: 0, x: 50 }
      : { opacity: 0, y: 30 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── star rating row ── */
function Stars({ count = 4 }: { count?: number }) {
  return (
    <div className="flex gap-1 mt-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <div className="font-sans antialiased bg-white">
      <Navbar />

      {/* ── HERO BANNER ── */}
      <div className="relative pt-16 min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.jpg" alt="About Andrews Premium" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-[#235c38] text-xs font-bold tracking-[0.3em] uppercase mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">About Us</h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Welcome to Andrews Premium. We believe in better meat for a better future.
          </p>
        </div>
      </div>

      {/* ── SECTION 1: About Us — images left, text right ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Images */}
          <FadeIn direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image src="/img1.jpg" alt="Andrews Premium Product" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md mt-8">
                <Image src="/img2.jpg" alt="Andrews Premium Sausage" fill className="object-cover" />
              </div>
              <div className="col-span-2">
                <Stars count={4} />
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" delay={0.15}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              About <span className="text-[#235c38]">Us</span>
            </h2>
            <div className="w-10 h-1 bg-[#235c38] mb-6" />
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              What started as a small-scale butchery to fill the market demand for Premium Quality Sausage Products
              catering to the local hospitality sector has evolved into one of Nigeria&apos;s leading processed meat
              producers serving retail, institutional, and food-service customers for over two decades at a
              competitive price.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              With the commissioning of our first production facility designed to meet international quality and food
              safety standards, along with the latest in food processing technology, Andrews Premium stands at the
              leading frontier of modern meat sourcing practice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: Company Overview — text left, image right ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <FadeIn direction="left">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Andrews <span className="text-[#235c38]">Premium</span>
            </h2>
            <div className="w-10 h-1 bg-[#235c38] mb-6" />
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Andrews Premium is a dedicated food brand focused on producing the very best in Premium Sausage Products
              since 1998 — producing over 5 million packs annually under the guidance of an ISO 22000 certified team
              committed to strict quality controls and world-class food safety standards.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Based on this strategic direction, Andrews Premium has maintained a leading market position across
              the country by following dynamic, trustworthy, and quality-first strategies — offering Hotdogs,
              Frankfurts, Smokewurst, and a growing range of specialty smoked products.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              NAFDAC registered and farm-to-fork traceable — because every pack matters.
            </p>
          </FadeIn>

          {/* Image right with overlay badge */}
          <FadeIn direction="right" delay={0.15}>
            <div className="relative pb-6 pl-6">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image src="/about.jpg" alt="Andrews Premium Facility" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-40 h-28 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <Image src="/andrew1.png" alt="Andrews Product" fill className="object-cover" />
              </div>
              <Stars count={5} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: From Farm To Table — images left, text right ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Images */}
          <FadeIn direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                <Image src="/img7.jpg" alt="Farm sourcing" fill className="object-cover" />
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden shadow-md mt-8">
                <Image src="/img8.jpg" alt="Production" fill className="object-cover" />
              </div>
              <div className="col-span-2">
                <Stars count={4} />
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn direction="right" delay={0.15}>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              From Farm{" "}
              <span className="text-[#235c38]">To Table</span>
            </h2>
            <div className="w-10 h-1 bg-[#235c38] mb-6" />
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              In 2003 we introduced the first internationally standardised sausage production line to the Nigerian
              market and have since successfully expanded our range — all while pushing the torch of promoting over
              20 award-winning international sausage flavours and over three decades of expertise.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              From the moment we select our pork cuts to the final vacuum-sealed pack on your shelf, every step is
              monitored for safety, hygiene, and flavour. That is the Andrews Premium promise.
            </p>
            <a
              href="/products"
              className="inline-block bg-[#CC0000] text-white px-7 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#aa0000] transition-colors duration-200"
            >
              View Products
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 4: Meet the Owner ── */}
      <section className="relative overflow-hidden">
        {/* Background split: top ~60% orange, bottom ~40% white */}
        <div className="absolute inset-0 flex flex-col">
          <div className="bg-amber-500" style={{ flex: "0 0 60%" }} />
          <div className="bg-white" style={{ flex: "0 0 40%" }} />
        </div>
      </section>

      <Footer />
    </div>
  );
}