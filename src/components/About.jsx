import React from "react";
import { Target, Heart, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "HALAL Certification",
      description:
        "We maintain strict HALAL standards throughout our slaughter and processing operations, ensuring compliance with Islamic dietary laws.",
      icon: <Award className="text-4xl text-accent-500" />,
    },
    {
      id: 2,
      title: "USDA Approved Facility",
      description:
        "Our plant meets all USDA requirements for food safety and quality, ensuring the highest standards in meat processing.",
      icon: <Target className="text-4xl text-accent-500" />,
    },
    {
      id: 3,
      title: "Direct Distribution",
      description:
        "With warehouses in Detroit and Dallas, plus our own slaughterhouse, we control the entire supply chain from farm to table.",
      icon: <Heart className="text-4xl text-accent-500" />,
    },
    {
      id: 4,
      title: "Texas Tradition",
      description:
        "We slaughter our own goats the Texas way, combining traditional methods with modern safety and quality standards.",
      icon: <Users className="text-4xl text-accent-500" />,
    },
  ];

  const retailLocations = [
    "Farmington Hills, MI",
    "Troy, MI",
    "Jacksonville, FL",
    "Naperville, IL",
    "Columbus, OH",
    "Cincinnati, OH",
    "Austin, TX",
    "St. Louis, MO",
    "Indianapolis, IN",
    "Schaumburgh, IL"
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-primary-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-500 mb-4">
            About <span className="text-accent-500">AAF</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-3xl mx-auto">
            Asian American Foods (AAF) is a HALAL certified, USDA approved meat processing and distribution company. 
            We slaughter our own goats the Texas way, ensuring quality and authenticity in every product.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-3xl font-display font-bold text-dark-500 mb-6">
              Our <span className="text-accent-500">Story</span>
            </h3>
            <div className="space-y-6 text-dark-400">
              <p className="text-lg leading-relaxed">
                Asian American Foods operates with a commitment to providing authentic, 
                high-quality HALAL meat products to communities across the United States. 
                Our Texas-based operations combine traditional methods with modern processing standards.
              </p>
              <p className="text-lg leading-relaxed">
                With our own USDA approved slaughterhouse in Goldthwaite, Texas, and distribution 
                centers in Detroit (20,000 SFT) and Dallas (15,000 SFT), we maintain complete 
                control over our supply chain to ensure freshness and quality.
              </p>
              <p className="text-lg leading-relaxed">
                We specialize in goat, lamb, poultry, and seafood, offering budget-friendly options 
                and custom cuts to meet diverse customer needs. Our motto "We can beat your current 
                prices" reflects our commitment to providing value without compromising quality.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div>
            <h3 className="text-3xl font-display font-bold text-dark-500 mb-6">
              Mission & <span className="text-accent-500">Values</span>
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-dark-100">
                <h4 className="font-semibold text-accent-500 mb-2 text-lg">
                  Our Mission
                </h4>
                <p className="text-dark-400">
                  To provide authentic, HALAL-certified meat products with reliable delivery 
                  services, maintaining the highest standards of quality and religious compliance.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-dark-100">
                <h4 className="font-semibold text-accent-500 mb-2 text-lg">
                  Our Vision
                </h4>
                <p className="text-dark-400">
                  To be the leading provider of HALAL meat products in America, known for 
                  quality, authenticity, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-dark-100 text-center"
            >
              <div className="flex justify-center mb-6">{value.icon}</div>
              <h4 className="text-xl font-semibold text-dark-500 mb-4">
                {value.title}
              </h4>
              <p className="text-dark-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Retail Partner Locations */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-lg border border-blue-200">
          <h3 className="text-3xl font-display font-bold text-dark-500 mb-8 text-center">
            Our Retail <span className="text-blue-600">Partner Locations</span>
          </h3>
          <div className="text-center mb-8">
            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏪</span>
            </div>
            <h4 className="text-xl font-semibold text-blue-800 mb-4">Famous Meats Chain</h4>
            <p className="text-blue-600 mb-8">
              Find AAF products at these retail locations across the United States
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {retailLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-blue-500 mb-2">📍</div>
                <p className="text-sm font-medium text-dark-500">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
