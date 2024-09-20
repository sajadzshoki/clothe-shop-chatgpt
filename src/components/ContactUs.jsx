import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to a backend or service.
    alert('Form submitted!'); // For now, just an alert
  };

  return (
    <section className="contact-us bg-gray-100 py-12 px-4"id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
              placeholder="example@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Type your message here..."
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
