import React from 'react';
import { Star, Clock, Flame } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Dragon Roll Deluxe",
      description: "Premium sushi roll with fresh salmon, avocado, and our signature dragon sauce",
      price: "$18.99",
      image: "🍣",
      rating: 4.9,
      prepTime: "15 min",
      spiceLevel: 2
    },
    {
      id: 2,
      name: "Korean BBQ Fusion Bowl",
      description: "Marinated bulgogi beef with jasmine rice, kimchi, and Asian slaw",
      price: "$16.99",
      image: "🥩",
      rating: 4.8,
      prepTime: "20 min",
      spiceLevel: 3
    },
    {
      id: 3,
      name: "Thai Curry Ramen",
      description: "Rich coconut broth with fresh noodles, vegetables, and choice of protein",
      price: "$14.99",
      image: "🍜",
      rating: 4.7,
      prepTime: "18 min",
      spiceLevel: 4
    },
    {
      id: 4,
      name: "Vietnamese Spring Rolls",
      description: "Fresh rice paper rolls with herbs, shrimp, and peanut dipping sauce",
      price: "$12.99",
      image: "🥬",
      rating: 4.6,
      prepTime: "10 min",
      spiceLevel: 1
    },
    {
      id: 5,
      name: "Szechuan Stir Fry",
      description: "Wok-tossed vegetables and protein in authentic Szechuan peppercorn sauce",
      price: "$15.99",
      image: "🥘",
      rating: 4.8,
      prepTime: "12 min",
      spiceLevel: 5
    },
    {
      id: 6,
      name: "Mochi Ice Cream",
      description: "Traditional Japanese dessert with premium ice cream in soft mochi wrapper",
      price: "$8.99",
      image: "🍡",
      rating: 4.9,
      prepTime: "5 min",
      spiceLevel: 0
    }
  ];

  const renderSpiceLevel = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Flame 
        key={i} 
        size={12} 
        className={i < level ? 'text-red-500' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            Our Signature <span className="text-primary-600">Dishes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafted with authentic ingredients and modern techniques to bring you unforgettable flavors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                {/* Product details */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="text-golden-500" size={14} fill="currentColor" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock size={14} />
                    <span>{product.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderSpiceLevel(product.spiceLevel)}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
