import React from 'react';

const ContactForm = () => (
<section id="contact" className="bg-gray-100 py-16 px-4 sm:px-6">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4" name='contact' method='post'>
        <input type="text" placeholder="Your Name" name="contactName" className="w-full p-3 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" name="contactEmail" className="w-full p-3 border border-gray-300 rounded" />
        <input type="tel" placeholder="xxx-xxx-xxxx" name="contactPhone" className="w-full p-3 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded h-32" />
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
