"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] py-28 px-6 relative overflow-hidden">
      
      <div className="absolute top-6 left-6 z-20">
        <Image
          src="/logo.png" 
          alt="Dr. Serena Blake Logo"
          width={140}
          height={70}
          className="object-contain"
        />
      </div>

      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 opacity-10 pointer-events-none">
        <Image
          src="/decorative-shape.svg" 
          alt="Decorative Background"
          width={800}
          height={800}
        />
      </div>

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mt-10 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#1a3b3a] leading-snug mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Compassionate Therapy <br />
          for a Calmer, More Connected Life
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Dr. Serena Blake provides professional, personalized therapy to help
          individuals and couples heal, grow, and thrive — online or in person.
          With 8+ years of experience, she creates a warm, judgment-free space
          focused on your well-being.
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-block bg-white text-[#1a3b3a] border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Book a Free Consult
        </motion.a>
      </div>
    </section>
  );
}
