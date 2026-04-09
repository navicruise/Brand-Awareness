"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="relative h-screen flex flex-col justify-center items-center bg-black text-white px-4 overflow-hidden">      
      <motion.h1 
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-center"
      >
        My First Website 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400 text-center"
      >
        Built using Next.js
      </motion.p>

    </section>
  );
}