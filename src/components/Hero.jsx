import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-golden-50 relative overflow-hidden pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-500 rounded-full opacity-10"></div>
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-accent-500 rounded-full opacity-10"></div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <img
            src="/AAF-home.png"
            alt="Asian American Foods Logo"
            className="w-full h-64 max-h-64 object-contain p-4"
          />
          <h1 className="text-5xl md:text-7xl font-display font-bold text-dark-500 mb-4">
            Asian American
            <span className="block text-accent-500">Foods</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-400 mb-8 font-light leading-relaxed">
            We Slaughter Our Own Goats, the Texas Way and in Texas. 
            HALAL Certified Slaughter House • USDA Approved Plant
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById("products").scrollIntoView()}
            className="btn-primary"
          >
            View Products
          </button>
          <button
            onClick={() => document.getElementById("contact").scrollIntoView()}
            className="btn-secondary"
          >
            Contact Us
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ChevronDown
            className="mx-auto text-dark-300 cursor-pointer hover:text-accent-500 transition-colors"
            size={32}
            onClick={() => document.getElementById("products").scrollIntoView()}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
