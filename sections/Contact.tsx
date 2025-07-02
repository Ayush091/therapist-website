"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim() || !formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "This field is required";
    if (!formData.time.trim()) newErrors.time = "This field is required";
    if (!formData.agree) newErrors.agree = "You must agree before submitting";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // You can add actual submission logic here (e.g., API)
    }
  };

  return (
    <section className="py-20 bg-gray-100 px-6" id="contact">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Book a Free Consult
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid gap-6">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full mt-1 p-3 border border-gray-300 rounded"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                className="w-full mt-1 p-3 border border-gray-300 rounded"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">What brings you here?</label>
              <textarea
                name="message"
                rows={4}
                className="w-full mt-1 p-3 border border-gray-300 rounded"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">
                Preferred time to reach you
              </label>
              <input
                type="text"
                name="time"
                className="w-full mt-1 p-3 border border-gray-300 rounded"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time}</p>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                className="mt-1"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label>I agree to be contacted.</label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-sm">{errors.agree}</p>
            )}

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
