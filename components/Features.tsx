"use client";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="bg-black text-white py-20 px-6">
      
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Our Features
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {[1,2,3].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 bg-white/5 rounded-xl backdrop-blur-md hover:scale-105 hover:shadow-blue-500/20 transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              Feature {item}
            </h3>
            <p className="text-gray-400">
              This is a sample feature description for your website.
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}