"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative bg-black text-white py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500 blur-[120px] opacity-20"></div>

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center z-10"
      >
        Ready to Build Something Amazing?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-gray-400 text-center max-w-xl z-10"
      >
        Start your journey with us and create stunning digital experiences.
      </motion.p>

      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 px-8 py-3 bg-blue-500 rounded-full hover:scale-105 transition z-10"
      >
        Get Started 🚀
      </motion.button>

    </section>
  );
}