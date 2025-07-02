// sections/Services.tsx
import Image from "next/image";

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn practical tools to manage overwhelming thoughts and emotions. Dr. Blake uses evidence-based approaches to help you feel more grounded and in control.",
    image: "/anxiety.jpg",
  },
  {
    title: "Relationship Counseling",
    description:
      "Strengthen communication, rebuild trust, and deepen emotional connection. Ideal for couples navigating conflict, distance, or life transitions.",
    image: "/relationship.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from painful past experiences in a safe, supportive space. Dr. Blake integrates mindfulness and trauma-informed techniques at your pace.",
    image: "/trauma.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Therapy Services
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
