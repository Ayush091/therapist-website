"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Feel more in control with CBT and mindfulness strategies that help reduce daily stress, calm the mind, and create emotional balance.",
    image: "/anxiety.jpg",
  },
  {
    title: "Relationship Counseling",
    description:
      "Deepen connection, improve communication, and work through recurring conflicts with supportive, guided counseling for couples and individuals.",
    image: "/relationship.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from past experiences in a safe and structured space that honors your pace and needs — with trauma-informed care that empowers.",
    image: "/trauma.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f8f9fa] py-24 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-[#1a3b3a] mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Services Offered
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-[1.05rem] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
