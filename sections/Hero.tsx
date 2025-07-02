// sections/Hero.tsx
export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-indigo-100 to-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Compassionate Therapy for a Calmer, Connected Life
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Dr. Serena Blake helps individuals and couples heal, grow, and thrive — in person and online.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-base px-6 py-3 rounded-lg transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
