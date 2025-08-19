import React from "react";
import { Package, Truck, Shield, Star } from "lucide-react";

const Products = () => {
  const specialties = [
    {
      id: 1,
      title: "Premium Meat Selection",
      description:
        "We offer a comprehensive selection of high-quality meats including beef, pork, poultry, and specialty cuts sourced from trusted suppliers and local farms.",
      icon: <Package className="text-4xl text-accent-500" />,
      features: ["Beef & Pork", "Poultry & Game", "Specialty Cuts"],
    },
    {
      id: 2,
      title: "Quality Assurance",
      description:
        "All our meats meet the highest industry standards with proper certification, traceability, and strict quality control processes.",
      icon: <Shield className="text-4xl text-accent-500" />,
      features: ["USDA Certified", "HACCP Compliant", "Quality Guaranteed"],
    },
    {
      id: 3,
      title: "Reliable Distribution",
      description:
        "Our efficient distribution network ensures timely delivery to restaurants, retailers, and food service providers across the region.",
      icon: <Truck className="text-4xl text-accent-500" />,
      features: ["Fast Delivery", "Cold Chain", "Flexible Scheduling"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-500 mb-4">
            Our <span className="text-accent-500">Products</span>
          </h2>
          <p className="text-xl text-dark-400 max-w-3xl mx-auto">
            We are a leading meat distributor providing premium quality meats to
            restaurants, retailers, and food service providers with reliable
            delivery and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-dark-100 text-center p-8"
            >
              <div className="flex justify-center mb-6">{specialty.icon}</div>
              <h3 className="text-2xl font-semibold text-dark-500 mb-4">
                {specialty.title}
              </h3>
              <p className="text-dark-400 mb-6 leading-relaxed">
                {specialty.description}
              </p>
              <div className="space-y-2">
                {specialty.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 text-sm text-dark-300"
                  >
                    <Star
                      className="text-golden-500"
                      size={12}
                      fill="currentColor"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-display font-bold text-dark-500 mb-6">
            Trusted Meat Distribution Partner
          </h3>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto mb-8">
            With years of experience in the meat industry, we understand the
            importance of quality, reliability, and service. Our commitment to
            excellence makes us the preferred choice for meat distribution
            across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-dark-500 mb-2">
                Restaurant Supply
              </h4>
              <p className="text-dark-400 text-sm">
                Premium cuts for fine dining establishments
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-dark-500 mb-2">
                Retail Distribution
              </h4>
              <p className="text-dark-400 text-sm">
                Quality meats for grocery stores and markets
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-dark-500 mb-2">Food Service</h4>
              <p className="text-dark-400 text-sm">
                Bulk supply for institutions and caterers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
