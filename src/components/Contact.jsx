// Contact.jsx - Updated Light Theme
import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch for wholesale pricing and account setup
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Phone className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600 text-sm mb-2">Call or WhatsApp</p>
                    <a 
                      href="tel:+17327818102" 
                      className="text-teal-600 font-bold text-2xl hover:text-teal-700"
                    >
                      (732) 781-8102
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Mail className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600 text-sm">
                      info@aafoods.us<br />
                      dallas@aafoods.us<br />
                      gw@aafoods.us
                    </p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Our Locations</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Detroit:</strong> Farmington Hills, MI<br />
                      <strong>Dallas:</strong> Dallas, TX<br />
                      <strong>Plant:</strong> Goldthwaite, TX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Serving USA Badge */}
            <div className="bg-teal-500 rounded-xl p-6 text-center text-white mt-6">
              <p className="text-lg font-bold">📍 Serving the Entire USA</p>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-teal-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div> */}

        </div>

      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-teal-200 text-center">
        <p className="text-gray-600 text-sm">
          © 2024 Asian American Foods. All Rights Reserved. | HALAL Certified | USDA Approved
        </p>
      </div>
    </section>
  );
};

export default Contact;
