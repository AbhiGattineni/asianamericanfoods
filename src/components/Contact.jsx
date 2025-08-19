import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent-400 opacity-10 rounded-full transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden-400 opacity-10 rounded-full transform translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get In <span className="text-accent-300">Touch</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Ready to partner with us? Contact our team for quality meat
            distribution solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-8">
              Contact <span className="text-accent-300">Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                <MapPin className="text-accent-300 mb-3" size={24} />
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-primary-200 text-sm">
                  123 Fusion Street
                  <br />
                  Downtown District
                  <br />
                  New York, NY 10001
                </p>
              </div>

              <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                <Phone className="text-accent-300 mb-3" size={24} />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-primary-200 text-sm">
                  (555) 123-FOOD
                  <br />
                  (555) 123-3663
                </p>
              </div>

              <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                <Mail className="text-accent-300 mb-3" size={24} />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-primary-200 text-sm">
                  info@asianamericanfoods.com
                </p>
              </div>

              <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                <Clock className="text-accent-300 mb-3" size={24} />
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <p className="text-primary-200 text-sm">
                  Mon-Fri: 8AM-6PM
                  <br />
                  Sat: 9AM-4PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-8">
              Send us a <span className="text-accent-300">Message</span>
            </h3>

            <form
              onSubmit={handleSubmit}
              className="bg-primary-800 rounded-2xl p-8 border border-primary-700"
            >
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-primary-700 border border-primary-600 text-white placeholder-primary-300 focus:border-golden-400 focus:outline-none transition-colors"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-lg bg-primary-700 border border-primary-600 text-white placeholder-primary-300 focus:border-golden-400 focus:outline-none transition-colors"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-4 rounded-lg bg-primary-700 border border-primary-600 text-white placeholder-primary-300 focus:border-golden-400 focus:outline-none transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-accent-400 hover:bg-accent-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary-700 text-center">
          <p className="text-primary-300">
            © 2024 Premium Meat Distribution. All rights reserved. Your trusted
            partner in quality meat distribution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
