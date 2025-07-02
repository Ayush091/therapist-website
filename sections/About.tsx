// sections/About.tsx

import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-white px-6" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/dr-serena.jpg"
            alt="Dr. Serena Blake"
            width={600}
            height={800}
            className="rounded-xl shadow-lg w-full object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Dr. Serena Blake</h2>
          <p className="text-lg leading-relaxed mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're navigating anxiety, relationship challenges, or healing from trauma,
            Dr. Blake creates a safe and supportive space—both in-person and online—for you to heal,
            grow, and thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
