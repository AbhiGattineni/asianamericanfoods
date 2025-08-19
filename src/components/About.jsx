import React from "react";
import { Target, Heart, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards in meat quality and safety, ensuring every product meets industry regulations.",
      icon: <Award className="text-4xl text-primary-600" />,
    },
    {
      id: 2,
      title: "Reliable Delivery",
      description:
        "Our efficient distribution network ensures timely delivery to all our customers across the region.",
      icon: <Target className="text-4xl text-primary-600" />,
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description:
        "We prioritize building long-term relationships with our clients through exceptional service and support.",
      icon: <Heart className="text-4xl text-primary-600" />,
    },
    {
      id: 4,
      title: "Industry Expertise",
      description:
        "Our team brings decades of experience in meat distribution and food service industry.",
      icon: <Users className="text-4xl text-primary-600" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-primary-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            About <span className="text-primary-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium Meat Distribution was established with a commitment to
            delivering the highest quality meats to restaurants, retailers, and
            food service providers. Founded in 2020, we've built a reputation
            for reliability, quality, and exceptional customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-6">
              Our <span className="text-primary-600">Story</span>
            </h3>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Premium Meat Distribution was established with a commitment to
                delivering the highest quality meats to restaurants, retailers,
                and food service providers. Founded in 2020, we've built a
                reputation for reliability, quality, and exceptional customer
                service.
              </p>
              <p className="text-lg leading-relaxed">
                Our team of experienced professionals brings together decades of
                industry expertise, ensuring that every delivery meets the
                highest standards of quality and safety in the meat distribution
                industry.
              </p>
              <p className="text-lg leading-relaxed">
                We understand that quality meat is the foundation of great food
                service, and we take pride in being the trusted partner that
                restaurants and retailers rely on for their meat supply needs.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div>
            <h3 className="text-3xl font-display font-bold text-gray-800 mb-6">
              Mission & <span className="text-primary-600">Values</span>
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-semibold text-primary-600 mb-2 text-lg">
                  Our Mission
                </h4>
                <p className="text-gray-600">
                  To provide the highest quality meat products with reliable
                  distribution services that exceed customer expectations.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-semibold text-primary-600 mb-2 text-lg">
                  Our Vision
                </h4>
                <p className="text-gray-600">
                  To be the leading meat distribution partner known for quality,
                  reliability, and exceptional service in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-6">{value.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
