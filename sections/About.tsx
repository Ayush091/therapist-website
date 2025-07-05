"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#eaf6f6] py-24 px-6" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl border-[6px] border-white shadow-md overflow-hidden w-[300px] h-[400px] relative">
            <Image
              src="/dr-serena.jpg"
              alt="Dr. Serena Blake"
              fill
              priority
              quality={90}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#fef3c7] text-[#92400e] text-xs px-3 py-1 rounded-full mb-4 font-medium tracking-wide">
            About Dr. Serena Blake – Licensed Clinical Psychologist
          </span>

          <h2 className="text-4xl font-semibold text-[#1a3b3a] mb-6 leading-tight">
            Hi, I’m Dr. Serena Blake
          </h2>

          <p className="text-gray-700 text-[1.1rem] leading-relaxed mb-5">
            With over <span className="font-semibold">8 years of experience</span> in individual and couples therapy,
            I help clients reduce anxiety, heal trauma, and build stronger relationships using
            evidence-based care with a warm, supportive approach.
          </p>

          <p className="text-gray-700 text-[1.1rem] leading-relaxed">
            Whether you meet in-person at my cozy Maplewood Drive office or connect online, you'll find a calm and safe space
            to feel seen, heard, and supported.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
