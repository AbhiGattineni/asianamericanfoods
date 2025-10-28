// Hero.jsx - Fixed React Hook Warning
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/asianamericanfoods/images/chicken.jpg",
      category: "Poultry • Halal Certified",
      title: "Premium Halal Chicken",
      subtitle:
        "Supplying air-chilled, hand-slaughtered poultry with strict cold-chain controls for restaurant, retail, and institutional partners.",
      tagline:
        "From farm to fork, trusted by national brands and local kitchens alike.",
      highlights: ["Custom cuts", "Same-day dispatch", "Temperature monitored"],
    },

    {
      image: "/asianamericanfoods/images/fish.jpg",
      category: "Seafood • Fresh & Frozen",
      title: "Fresh Seafood",
      subtitle:
        "Premium seafood program featuring Atlantic, Pacific, and specialty imports—curated for wholesalers, retailers, and food service groups.",
      tagline:
        "Consistent quality with dock-to-door refrigeration and compliance.",
      highlights: ["Sushi-grade options", "IQF processing", "Nationwide reach"],
    },
    {
      image: "/asianamericanfoods/images/chicken.jpg",
      category: "Goat & Lamb • USDA Approved",
      title: "Quality Goat & Lamb",
      subtitle:
        "Sourcing grass-fed goat and lamb, Zabiha Halal processed and precision trimmed to meet your culinary standards across North America.",
      tagline:
        "Reliability, traceability, and flavor in every wholesale delivery.",
      highlights: ["Whole & primal", "Traceable sourcing", "Expert butchers"],
    },
    {
      image: "/asianamericanfoods/images/fish.jpg",
      category: "Seafood • Fresh & Frozen",
      title: "Fresh Seafood",
      subtitle:
        "Premium seafood program featuring Atlantic, Pacific, and specialty imports—curated for wholesalers, retailers, and food service groups.",
      tagline:
        "Consistent quality with dock-to-door refrigeration and compliance.",
      highlights: ["Sushi-grade options", "IQF processing", "Nationwide reach"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]); // Added slides.length to dependencies

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
      <div className="relative h-full flex items-center justify-center px-4 z-10">
        <div className="w-full max-w-5xl">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl text-center flex flex-col items-center min-h-[420px] md:min-h-[480px]">
            <div className="w-full space-y-6 md:space-y-8 flex-1 flex flex-col justify-center">
              {/* Category Badge */}
              <div className="flex items-center justify-center gap-3 text-xs md:text-sm uppercase tracking-[0.35em] text-teal-200 min-h-[20px]">
                <span className="h-2 w-2 rounded-full bg-teal-400"></span>
                <span>{slides[currentSlide].category}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight md:leading-[1.1] min-h-[3.5rem] md:min-h-[4.5rem] flex items-center justify-center">
                {slides[currentSlide].title}
              </h1>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto min-h-[4.5rem] md:min-h-[5.5rem] flex items-center justify-center">
                {slides[currentSlide].subtitle}
              </p>

              {/* Tagline */}
              <p className="text-sm md:text-base text-teal-100 tracking-[0.3em] uppercase min-h-[1.5rem] flex items-center justify-center">
                {slides[currentSlide].tagline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mt-8 w-full max-w-xl">
              <a
                href="#products"
                className="bg-white/90 text-gray-900 font-semibold text-lg px-10 py-4 rounded-xl hover:bg-white transition-all shadow-xl"
              >
                View Products
              </a>
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
