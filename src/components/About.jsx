// About.jsx - Updated Light Theme
import React from "react";
import { MapPin, Package, Award } from "lucide-react";

const About = () => {
  const locations = [
    {
      icon: "🏭",
      title: "Texas Slaughter House",
      location: "Goldthwaite, TX",
      description: "USDA Approved Facility",
    },
    {
      icon: "📦",
      title: "Detroit Distribution",
      location: "Farmington Hills, MI",
      description: "20,000 SFT Warehouse",
    },
    {
      icon: "🏢",
      title: "Dallas Distribution",
      location: "Dallas, TX",
      description: "15,000 SFT Warehouse",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-teal-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium HALAL certified meat supplier serving restaurants and stores
            across the United States
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-16 border border-teal-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Asian American Foods is a trusted HALAL certified and USDA
                approved meat processing and distribution company. Ensuring the
                highest quality and authenticity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With strategic distribution centers in Detroit and Dallas, we
                serve over 100 commercial customers nationwide, delivering
                fresh, premium products with competitive pricing and exceptional
                service.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-50 rounded-lg p-6 text-center border border-teal-100">
                <Package className="text-teal-600 mx-auto mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">100+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6 text-center border border-teal-100">
                <Award className="text-teal-600 mx-auto mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">USDA</p>
                <p className="text-sm text-gray-600">Approved</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6 text-center border border-teal-100">
                <MapPin className="text-teal-600 mx-auto mb-2" size={32} />
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Locations</p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6 text-center border border-teal-100">
                <span className="text-teal-600 text-3xl mb-2 block">🇺🇸</span>
                <p className="text-2xl font-bold text-gray-900">USA</p>
                <p className="text-sm text-gray-600">Nationwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm text-center border border-teal-100 hover:shadow-md transition-all"
            >
              <div className="text-5xl mb-4">{location.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {location.title}
              </h3>
              <p className="text-teal-600 font-semibold mb-1">
                {location.location}
              </p>
              <p className="text-gray-600 text-sm">{location.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">We Serve The Entire USA</h3>
          <p className="text-lg mb-8 text-teal-50">
            From coast to coast, delivering premium HALAL certified products to
            businesses nationwide
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium border border-white/30">
              Zabiha Halal Certified
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium border border-white/30">
              USDA Approved Plant
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium border border-white/30">
              Custom Cut Available
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium border border-white/30">
              Free Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
