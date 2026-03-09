"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "Our Story", href: "/our-story" },
];
const contactItems = [
  "info@andrewspremium.com",
  "+234 800 000 0000",
  "Lagos, Nigeria",
  "Mon – Fri: 8am – 5pm",
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer ref={ref} className="bg-gradient-to-b from-[#235c38] to-[#1a4529] text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/20"
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 relative flex-shrink-0">
              <Image
                src="/andrew2.png"
                alt="Andrews Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
              <div>
                <p className="font-black text-white text-lg leading-none">ANDREWS</p>
                <p className="text-white/60 text-[9px] tracking-[0.2em] uppercase">Premium</p>
              </div>
            </div>
            <p className="text-white/70 text-sm font-bold italic mb-5">
              &ldquo;We Make, You Eat&rdquo;
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {["f", "in", "tw", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 bg-white/10 hover:bg-[#e47f24] hover:text-black border border-white/20 flex items-center justify-center text-white text-xs font-bold transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactItems.map((item) => (
                <li key={item} className="text-white/60 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col">
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">
              Order Today
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Become a stockist or place a bulk order. Get in touch and we will
              have you sorted within 24 hours.
            </p>
            <a
              href="#contact"
              className="bg-[#E8B800] text-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#d4a800] transition-colors duration-200 text-center self-start"
            >
              Order Now
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Andrews Premium Foods Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a key={item} href="#" className="text-white/40 text-xs hover:text-white/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
