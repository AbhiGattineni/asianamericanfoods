// Hero.jsx - Fixed Stats Card Size
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/asianamericanfoods/images/chicken.jpg",
      title: "Premium Halal Chicken",
      subtitle: "Fresh poultry delivered nationwide",
      category: "Poultry"
    },
    {
      image: "/asianamericanfoods/images/goat.jpg",
      title: "Quality Goat & Lamb",
      subtitle: "Slaughtered the Texas way",
      category: "Meat"
    },
    {
      image: "/asianamericanfoods/images/fish.jpg",
      title: "Fresh Seafood",
      subtitle: "Premium quality fish and shrimp",
      category: "Seafood"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen pt-20">
      {/* Full Screen Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="max-w-5xl w-full">
          {/* Category Badge */}
          <span className="inline-block bg-teal-500 px-6 py-2 rounded-full text-white text-sm font-semibold mb-6">
            {slides[currentSlide].category}
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            {slides[currentSlide].subtitle}
          </p>

          {/* Tagline */}
          <p className="text-lg text-gray-300 mb-10">
            Premium HALAL Certified • USDA Approved • Nationwide Delivery
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+17327818102"
              className="bg-teal-500 text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-teal-600 transition-all shadow-xl"
            >
              Call: (732) 781-8102
            </a>
            <a
              href="#products"
              className="bg-white text-gray-900 font-bold text-lg px-10 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              View Products
            </a>
          </div>

          {/* Stats - Fixed Width Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-h-[100px] flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-white mb-1 whitespace-nowrap">100+</p>
              <p className="text-gray-200 text-sm whitespace-nowrap">Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-h-[100px] flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-white mb-1 whitespace-nowrap">3</p>
              <p className="text-gray-200 text-sm whitespace-nowrap">Locations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-h-[100px] flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-white mb-1 whitespace-nowrap">USA</p>
              <p className="text-gray-200 text-sm whitespace-nowrap">Nationwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-h-[100px] flex flex-col items-center justify-center">
              <p className="text-3xl font-bold text-white mb-1 whitespace-nowrap">USDA</p>
              <p className="text-gray-200 text-sm whitespace-nowrap">Approved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
      >
        <ChevronLeft className="text-gray-800" size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-20"
      >
        <ChevronRight className="text-gray-800" size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-12" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
