// Products.jsx - Light Theme
import React from "react";
import {
  Drumstick,
  Award,
  Waves,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";

const Products = () => {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-teal-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Premium HALAL Certified Wholesale
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We supply high-quality meat and seafood to restaurants, retailers,
            and food service providers across the USA. All products are HALAL
            certified, USDA approved, and delivered with strict temperature
            control.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Poultry */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 border border-teal-200">
                <Drumstick
                  className="text-teal-600"
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Poultry</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed flex-grow">
              Air-chilled, hand-slaughtered poultry processed in our
              USDA-approved facility. Available as whole birds,
              portion-controlled cuts, or custom specifications for your menu.
            </p>
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">Zabiha Halal Certified</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">
                  Whole & Portioned Options
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">Custom Cuts Available</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">
              Chicken • Cornish Hen • Country Chicken • Wings & Cuts
            </p>
          </div>

          {/* Meat */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 border border-teal-200">
                <Award className="text-teal-600" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Meat</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed flex-grow">
              Grass-fed goat and lamb, Zabiha Halal processed with expert
              fabrication. We offer whole primals, boxed cuts, and custom trim
              programs for restaurants and retailers nationwide.
            </p>
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">Zabiha Halal Processed</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">Whole & Primal Cuts</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">Custom Grind Programs</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">
              Goat • Lamb • Kheema • Chops & Organs
            </p>
          </div>

          {/* Seafood */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-teal-100 to-teal-50 border border-teal-200">
                <Waves className="text-teal-600" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Seafood</h3>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed flex-grow">
              Fresh and frozen seafood sourced from Atlantic and Pacific
              suppliers. IQF processed, sushi-grade options available with
              dock-to-door cold chain logistics.
            </p>
            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">Sushi-Grade Options</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">IQF Processing</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-600 font-bold">✓</span>
                <p className="text-sm text-gray-700">Fresh & Frozen Stock</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">
              Pomfret • Shrimp • Fillets • Fresh Fish
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-20">
          <div className="bg-white border border-teal-100 rounded-2xl p-8 md:p-12 shadow-lg max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              <div className="text-center">
                <CheckCircle2
                  className="text-teal-600 mx-auto mb-3"
                  size={40}
                  strokeWidth={1.5}
                />
                <p className="font-bold text-gray-900">HALAL Certified</p>
                <p className="text-xs text-gray-600 mt-1">Zabiha Approved</p>
              </div>
              <div className="text-center">
                <Award
                  className="text-teal-600 mx-auto mb-3"
                  size={40}
                  strokeWidth={1.5}
                />
                <p className="font-bold text-gray-900">USDA Approved</p>
                <p className="text-xs text-gray-600 mt-1">Inspection Ready</p>
              </div>
              <div className="text-center">
                <Drumstick
                  className="text-teal-600 mx-auto mb-3"
                  size={40}
                  strokeWidth={1.5}
                />
                <p className="font-bold text-gray-900">USA Delivery</p>
                <p className="text-xs text-gray-600 mt-1">
                  Temperature Controlled
                </p>
              </div>
              <div className="text-center">
                <Waves
                  className="text-teal-600 mx-auto mb-3"
                  size={40}
                  strokeWidth={1.5}
                />
                <p className="font-bold text-gray-900">100+ Customers</p>
                <p className="text-xs text-gray-600 mt-1">
                  Nationwide Partners
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-teal-50 to-white rounded-2xl p-12 shadow-lg border border-teal-100 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Get Wholesale Pricing
          </h3>

          <div className="bg-white rounded-xl p-10 mb-10 text-center border-2 border-teal-200">
            <p className="text-gray-600 text-sm mb-3 font-medium">
              Contact Us for Wholesale Pricing
            </p>
            <a
              href="tel:+17327818102"
              className="text-4xl md:text-5xl font-black text-teal-600 hover:text-teal-700 transition-colors block"
            >
              (732) 781-8102
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="tel:+17327818102"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-teal-600 transition-all shadow-md text-base md:text-lg flex-1 sm:flex-none"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://wa.me/17327818102"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-600 transition-all shadow-md text-base md:text-lg flex-1 sm:flex-none"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
