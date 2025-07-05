"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email || !formData.email.includes("@"))
      newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Please share what brings you here";
    if (!formData.time) newErrors.time = "Preferred contact time is required";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("https://formspree.io/f/mwpbjela}", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          time: "",
          agree: false,
        });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      toast.error("Error submitting form.");
    }
  };

  return (
    <section className="bg-[#eaf5f6] py-20 px-6" id="contact">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center text-slate-800 mb-10"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-6"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Name */}
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          {/* Phone */}
          <InputField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />

          {/* Email */}
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            type="email"
          />

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              What brings you here?
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3"
            />
            {errors.message && <ErrorText text={errors.message} />}
          </div>

          {/* Time */}
          <InputField
            label="Preferred time to reach you"
            name="time"
            value={formData.time}
            onChange={handleChange}
            error={errors.time}
          />

          {/* Agree */}
          <div className="flex items-start">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2 mt-1"
            />
            <label className="text-gray-700 text-sm">
              I agree to be contacted by Dr. Serena Blake
            </label>
          </div>
          {errors.agree && <ErrorText text={errors.agree} />}

          <button
            type="submit"
            className="w-full bg-[#7daebd] hover:bg-[#6ba3b4] text-white py-3 rounded-md font-medium transition"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}: any) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-sky-300"
      />
      {error && <ErrorText text={error} />}
    </div>
  );
}

function ErrorText({ text }: { text: string }) {
  return <p className="text-red-600 text-sm mt-1">{text}</p>;
}
