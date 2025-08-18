import React from 'react';
import { Quote, Star } from 'lucide-react';

const Customers = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Food Blogger",
      content: "The fusion of traditional Asian flavors with modern American cuisine is absolutely phenomenal. Best dining experience in the city!",
      rating: 5,
      avatar: "👩🏻‍💼"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Restaurant Critic",
      content: "Asian American Foods has redefined what fusion cuisine can be. Every dish tells a story of cultural harmony.",
      rating: 5,
      avatar: "👨🏿‍💼"
    },
    {
      id: 3,
      name: "Lisa Park",
      role: "Local Foodie",
      content: "I've been coming here for months and every visit surprises me with new flavors and perfect execution. Highly recommended!",
      rating: 5,
      avatar: "👩🏻‍🦳"
    }
  ];

  const partners = [
    { name: "DoorDash", logo: "🚗" },
    { name: "Uber Eats", logo: "🛵" },
    { name: "Grubhub", logo: "📱" },
    { name: "Postmates", logo: "📦" },
    { name: "Local Markets", logo: "🏪" },
    { name: "Food Network", logo: "📺" }
  ];

  return (
    <section id="customers" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Customer Reviews */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
              What Our <span className="text-primary-600">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <Quote className="absolute top-4 right-4 text-primary-200" size={32} />
                
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} className="text-golden-500" size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partners & Logos */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Our <span className="text-primary-600">Partners</span>
            </h3>
            <p className="text-lg text-gray-600">
              Available through your favorite delivery platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl mb-2">{partner.logo}</div>
                  <p className="font-medium text-gray-700 text-sm">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
