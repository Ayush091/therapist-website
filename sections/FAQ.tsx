"use client";
import { useState } from "react";

const faqs = [
  { q: "Do you accept insurance?", a: "No, but I provide a superbill for reimbursement." },
  { q: "Are online sessions available?", a: "Yes, I offer Zoom sessions Mon–Fri." },
  { q: "What is your cancellation policy?", a: "24-hour notice is required for all cancellations." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (index: number) => setOpen(open === index ? null : index);

  return (
    <section className="bg-white py-20 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left text-lg font-medium text-gray-800 bg-gray-50"
                onClick={() => toggle(index)}
              >
                {item.q}
              </button>
              {open === index && (
                <div className="px-6 py-4 text-gray-700 bg-white">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
