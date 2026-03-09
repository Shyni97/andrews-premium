"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const categories = [
  { name: "Ceylon Pepper Bacon", desc: "Spiced with Ceylon pepper perfection", image: "/pro1.jpeg" },
  { name: "Pork Bacon Ends", desc: "Premium bacon cuts for any meal", image: "/pro2.jpeg" },
  { name: "British Back Bacon", desc: "Traditional back bacon excellence", image: "/pro3.jpeg" },
  { name: "Pork Chops", desc: "Premium cuts ready to cook", image: "/pro4.jpeg" },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Product{" "}
              Our <span className="text-[#235c38]">Categories</span>
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="products"
            className="bg-[#E8B800] text-black px-6 py-2.5 font-bold text-sm uppercase tracking-wide hover:bg-[#d4a800] transition-colors duration-200 hidden sm:inline-block"
          >
            See More
          </motion.a>
        </div>

        {/* 4 product cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.18)" }}
              className="group relative overflow-hidden bg-gray-100 cursor-pointer rounded-sm"
              style={{ willChange: "transform" }}
            >
              {/* Image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-100 relative overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain p-4 scale-100 group-hover:scale-110 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300" />
                {/* Category name slides up on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-black text-base tracking-wide text-center px-3">{cat.name}</p>
                  <div className="mt-2 w-8 h-[2px] bg-[#CC0000]" />
                </div>
              </div>

              {/* Red bottom bar that slides up */}
              <div className="absolute bottom-[56px] left-0 right-0 h-[3px] bg-[#CC0000] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Label */}
              <div className="px-4 py-3 bg-white border-t border-gray-100">
                <p className="font-bold text-gray-900 text-sm">{cat.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile order button */}
        <div className="mt-6 sm:hidden text-center">
          <a href="#contact" className="bg-[#E8B800] text-black px-6 py-2.5 font-bold text-sm uppercase tracking-wide inline-block">
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
