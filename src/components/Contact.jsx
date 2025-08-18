import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-golden-400 opacity-10 rounded-full transform -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-400 opacity-10 rounded-full transform translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Us */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About <span className="text-golden-400">Us</span>
              </h2>
              <p className="text-lg leading-relaxed text-primary-100 mb-6">
                Asian American Foods was born from a passion for bridging cultures through cuisine. Founded in 2020, 
                we've been dedicated to creating authentic Asian-American fusion dishes that honor traditional flavors 
                while embracing modern culinary innovation.
              </p>
              <p className="text-lg leading-relaxed text-primary-100 mb-8">
                Our team of experienced chefs brings together decades of culinary expertise from across Asia and America, 
                creating a unique dining experience that celebrates the best of both worlds.
              </p>
              
              {/* Mission & Values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                  <h4 className="font-semibold text-golden-400 mb-2 text-lg">Our Mission</h4>
                  <p className="text-primary-200 text-sm">
                    To create exceptional fusion cuisine that brings people together and celebrates cultural diversity.
                  </p>
                </div>
                <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                  <h4 className="font-semibold text-golden-400 mb-2 text-lg">Our Values</h4>
                  <p className="text-primary-200 text-sm">
                    Quality ingredients, authentic flavors, sustainable practices, and exceptional customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form & Info */}
          <div>
            <h3 className="text-3xl font-display font-bold mb-8">
              Get In <span className="text-golden-400">Touch</span>
            </h3>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                <MapPin className="text-golden-400 mb-3" size={24} />
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-primary-200 text-sm">
                  123 Fusion Street<br />
                  Downtown District<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                <Phone className="text-golden-400 mb-3" size={24} />
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-primary-200 text-sm">
                  (555) 123-FOOD<br />
                  (555) 123-3663
                </p>
              </div>
              
              <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                <Mail className="text-golden-400 mb-3" size={24} />
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-primary-200 text-sm">
                  info@asianamericanfoods.com<br />
                  orders@asianamericanfoods.com
                </p>
              </div>
              
              <div className="bg-primary-800 rounded-xl p-6 border border-primary-700">
                <Clock className="text-golden-400 mb-3" size={24} />
                <h4 className="font-semibold mb-2">Hours</h4>
                <p className="text-primary-200 text-sm">
                  Mon-Thu: 11AM-10PM<br />
                  Fri-Sat: 11AM-11PM<br />
                  Sunday: 12PM-9PM
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-primary-800 rounded-2xl p-8 border border-primary-700">
              <h4 className="text-xl font-semibold mb-6 text-golden-400">Send us a message</h4>
              
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
                  className="w-full bg-golden-500 hover:bg-golden-600 text-primary-900 font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
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
            © 2024 Asian American Foods. All rights reserved. Made with ❤️ for food lovers everywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
