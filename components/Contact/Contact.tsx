"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_i2jtupp",
        "template_w9kb4te",
        form.current,
        "C66DXc66Jn4UuZ8m2"
      )
      .then(() => {
        alert("✅ Message sent successfully!");

        form.current?.reset();
      })
      .catch((error) => {
        console.log(error);

        alert("❌ Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-cyan-400 text-xl" />
            <span>vaishnavivijay1506@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-cyan-400 text-xl" />
            <span>+91 9790960535</span>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-cyan-400 text-xl" />
            <a
              href="https://linkedin.com/in/vaishnavi-vijayakumar-b87797264"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-cyan-400 text-xl" />
            <a
              href="https://github.com/Vaishu242215"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <textarea
            rows={5}
            name="message"
            required
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-full text-black font-semibold transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}