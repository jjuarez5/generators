import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => (
  <section
    id="contact"
    className="bg-white py-24 px-4 sm:px-6 text-white border-t border-gray-200"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto bg-indigo-700 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/10"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
      <form
        className="space-y-6"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* Hidden inputs for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <input
          type="text"
          name="contactName"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <input
          type="email"
          name="contactEmail"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <input
          type="tel"
          name="contactPhone"
          placeholder="xxx-xxx-xxxx"
          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-white text-indigo-700 font-semibold hover:bg-blue-100 transition"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  </section>
);

export default ContactForm;
