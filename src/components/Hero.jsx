import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-golden-50 relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-golden-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Logo/Brand - Using your actual logo from public folder */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-100 overflow-hidden">
            <img 
              src="/aaf-logo.png" 
              alt="Asian American Foods Logo" 
              className="w-full h-full object-contain p-4"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-800 mb-4">
            Asian American
            <span className="block text-primary-600">Foods</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
            Authentic flavors, modern cuisine. Bringing you the finest Asian-American fusion experience.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => document.getElementById('products').scrollIntoView()}
            className="btn-primary"
          >
            Explore Menu
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView()}
            className="btn-secondary"
          >
            Contact Us
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="mx-auto text-gray-400 cursor-pointer hover:text-primary-600 transition-colors" 
            size={32}
            onClick={() => document.getElementById('products').scrollIntoView()}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
