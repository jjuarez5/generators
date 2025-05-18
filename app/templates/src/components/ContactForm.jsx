import React from 'react';

const ContactForm = () => (
  <section id="contact" className="synthwave-bg py-16 px-4 sm:px-6 text-white">
    <div className="max-w-lg mx-auto text-center bg-black bg-opacity-70 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4" name="contact" method="post">
        <input type="text" placeholder="Your Name" name="contactName" className="w-full p-3 border border-white rounded bg-transparent text-white placeholder-white" />
        <input type="email" placeholder="Your Email" name="contactEmail" className="w-full p-3 border border-white rounded bg-transparent text-white placeholder-white" />
        <input type="tel" placeholder="xxx-xxx-xxxx" name="contactPhone" className="w-full p-3 border border-white rounded bg-transparent text-white placeholder-white" />
        <textarea placeholder="Your Message" className="w-full p-3 border border-white rounded bg-transparent text-white placeholder-white h-32" />
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
