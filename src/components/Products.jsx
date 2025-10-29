// Products.jsx - Light Colors
import React from "react";
import { Phone } from "lucide-react";

const Products = () => {
  const categories = [
    {
      name: "Poultry",
      items: ["Chicken", "Cornish Hen", "Country Chicken", "Wings & Cuts"]
    },
    {
      name: "Meat", 
      items: ["Goat", "Lamb", "Kheema", "Chops & Organs"]
    },
    {
      name: "Seafood",
      items: ["Pomfret", "Shrimp", "Fillets", "Fresh Fish"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Premium HALAL Certified Wholesale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-teal-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-400">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-gray-600">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-8 text-gray-600 font-medium">
            <span>✓ HALAL Certified</span>
            <span>✓ USDA Approved</span>
            <span>✓ USA Delivery</span>
            <span>✓ 100+ Customers</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-lg border border-teal-100 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Get Wholesale Pricing
          </h3>
          
          <div className="bg-teal-50 rounded-xl p-8 mb-8 text-center">
            <Phone className="text-teal-600 mx-auto mb-3" size={32} />
            <p className="text-gray-600 text-sm mb-2">Call or WhatsApp</p>
            <a 
              href="tel:+17327818102" 
              className="text-4xl font-bold text-gray-900 hover:text-teal-600 transition-colors"
            >
              (732) 781-8102
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17327818102"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white font-bold px-10 py-4 rounded-lg hover:bg-teal-600 transition-all"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="https://wa.me/17327818102"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-10 py-4 rounded-lg hover:bg-green-600 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
