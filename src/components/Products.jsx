import React from "react";
import { Package, Truck, Shield, Star, Phone } from "lucide-react";

const Products = () => {
  const specialties = [
    {
      id: 1,
      title: "Premium Poultry",
      description:
        "Fresh halal-certified poultry including whole chicken, boneless cuts, wings, and specialty items like Country Chicken (Naatu Kodi) and Cornish Hen.",
      icon: <Package className="text-4xl text-accent-500" />,
      features: [
        "Boneless Thigh/Leg Meat",
        "Whole Chicken & Parts",
        "Specialty Cuts",
      ],
    },
    {
      id: 2,
      title: "Quality Meat Selection",
      description:
        "Bone-in and boneless goat and lamb cuts, including specialty items like lamb chops, kheema, and organs. Budget-friendly goat meat options available.",
      icon: <Shield className="text-4xl text-accent-500" />,
      features: ["Goat & Lamb", "HALAL Certified", "Custom Cuts Available"],
    },
    {
      id: 3,
      title: "Fresh Seafood",
      description:
        "Premium seafood selection including Golden Pomfret, fresh shrimp, boneless fillets, and specialty fish like Rohu and Korameenu.",
      icon: <Truck className="text-4xl text-accent-500" />,
      features: ["Golden Pomfret", "Fresh Shrimp", "Boneless Fillets"],
    },
  ];

  const productCategories = [
    {
      title: "POULTRY",
      items: [
        "Boneless Thigh /Leg Meat",
        "Boneless Breast",
        "Leg Quarters",
        "Drumsticks",
        "Whole Chicken",
        "Cornish Hen",
        "Country Chicken (Naatu Kodi)",
        "Rooster",
        "Jumbo Wings",
        "Split Wings",
        "Chicken Kheema(Ground)",
      ],
    },
    {
      title: "MEAT",
      items: [
        "Bone IN Goat",
        "Bone IN LAMB",
        "Bonesless LAMB",
        "Mutton Kheema",
        "Shank",
        "Lamb Chops",
        "Burnt Paaya Bones",
        "Trotter Bones (Nalli)",
        "Burnt Goat Head",
        "Organs (Any Kind)",
      ],
      specialNote:
        "Goat Meat - Any Size Available, Budget Friendly Options Available, Please call to discuss Options!",
    },
    {
      title: "SEA FOOD",
      items: [
        "Golden Pomfret",
        "Shrimp (Any Size)",
        "(peeled/Deveined)",
        "Boneless Tilapia Fillets",
        "Bonesless Swai Fillets",
        "Rohu",
        "Korameenu",
      ],
      specialNote: "We can get any Fish you are looking for..!!",
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
            HALAL certified and USDA approved meat products delivered fresh to
            your doorstep. We can beat your current prices with free delivery
            and discounted cut prices.
          </p>
        </div>

        {/* Product Categories with Special Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-bold text-dark-500 mb-6 text-center">
                {category.title}
              </h3>
              <div className="text-center space-y-2">
                {category.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-dark-400">
                    {item}
                  </p>
                ))}
                {/* Special Note - Differentiated */}
                {category.specialNote && (
                  <div className="mt-4 pt-4 border-t border-accent-200">
                    <p className="text-accent-600 font-semibold bg-accent-100 rounded-lg p-3 text-sm leading-relaxed">
                      {category.specialNote}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
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
            Delivering All Your Meat Needs Right to Your Doorstep!
          </h3>
          <p className="text-lg text-dark-400 max-w-2xl mx-auto mb-8">
            With locations in Detroit (20,000 SFT Warehouse), Dallas (15,000 SFT
            Warehouse), and our own slaughterhouse in Goldthwaite, TX, we ensure
            fresh, quality products reach you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-dark-500 mb-2">
                HALAL Certified
              </h4>
              <p className="text-dark-400 text-sm">
                All products meet Islamic dietary requirements
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-dark-500 mb-2">
                USDA Approved
              </h4>
              <p className="text-dark-400 text-sm">
                Meeting the highest food safety standards
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-dark-500 mb-2">
                Free Delivery
              </h4>
              <p className="text-dark-400 text-sm">
                Discounted prices with free delivery service
              </p>
            </div>
          </div>
        </div>

        {/* Modern Account Setup Section */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 shadow-xl border border-green-100">
          <div className="max-w-md mx-auto text-center">
            {/* Icon Circle */}
            <div className="bg-green-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Phone className="text-green-600" size={32} />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-display font-bold text-green-800 mb-4">
              Ready to Get Started?
            </h3>

            {/* Subtitle */}
            <p className="text-green-600 mb-6 text-lg">
              Contact us for account setup and personalized pricing
            </p>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-200 mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Phone className="text-green-600" size={18} />
                </div>
                <span className="text-green-700 font-medium">
                  Call/WhatsApp
                </span>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-green-800 mb-1">Kiran</p>
                <p className="text-xl text-green-600 font-semibold">
                  (732) 781-8102
                </p>
              </div>
            </div>

            {/* CTA Button with WhatsApp Integration */}
            <button
              onClick={() => window.open("https://wa.me/17327818102", "_blank")}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <Phone size={20} />
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
