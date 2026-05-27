// Contact.jsx - Updated Light Theme
import React from "react";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch for wholesale pricing and account setup
          </p>
        </div>

        <div className="mb-12">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Get In Touch
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Phone className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Call or WhatsApp
                    </p>
                    <a
                      href="tel:+17327818102"
                      className="text-teal-600 font-bold text-2xl hover:text-teal-700 block"
                    >
                      (732) 781-8102
                    </a>
                    <div className="mt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <MessageCircle className="text-teal-600" size={16} />
                        <span>SMS</span>
                      </div>
                      <a
                        href="tel:+13252695223"
                        className="text-teal-600 font-bold text-2xl hover:text-teal-700 block"
                      >
                        325-269-5223
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Mail className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600 text-sm">
                      info@aafoods.us
                      <br />
                      dallas@aafoods.us
                      <br />
                      gw@aafoods.us
                    </p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-teal-100 md:col-span-2 xl:col-span-1">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">
                      Our Locations
                    </h4>
                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                      <address className="not-italic">
                        <strong className="text-gray-900">Detroit:</strong>{" "}
                        23985 Industrial Park Dr, Farmington Hills, MI 48335
                        <br />
                        <Phone
                          className="inline-block text-teal-600 mr-1"
                          size={14}
                        />
                        <a
                          href="tel:+17327818102"
                          className="font-semibold text-teal-700 hover:text-teal-800"
                        >
                          (732) 781-8102
                        </a>
                      </address>
                      <address className="not-italic">
                        <strong className="text-gray-900">Dallas:</strong> 818
                        Metromedia Pl, Dallas, TX 75247
                        <br />
                        <Phone
                          className="inline-block text-teal-600 mr-1"
                          size={14}
                        />
                        <a
                          href="tel:+14694188075"
                          className="font-semibold text-teal-700 hover:text-teal-800"
                        >
                          (469) 418-8075
                        </a>
                      </address>
                      <address className="not-italic">
                        <strong className="text-gray-900">Plant:</strong> 1110 E
                        Front St, Goldthwaite, TX 76844
                        <br />
                        <Phone
                          className="inline-block text-teal-600 mr-1"
                          size={14}
                        />
                        <a
                          href="tel:+13252695223"
                          className="font-semibold text-teal-700 hover:text-teal-800"
                        >
                          325-269-5223
                        </a>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Serving USA Badge */}
            <div className="bg-teal-500 rounded-xl p-6 text-center text-white mt-8">
              <p className="text-lg font-bold">Serving the Entire USA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-teal-200 text-center">
        <p className="text-gray-600 text-sm mb-3">
          <a
            href="/privacy-policy"
            className="text-teal-700 font-semibold hover:text-teal-800"
          >
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a
            href="/privacy-policy"
            className="text-teal-700 font-semibold hover:text-teal-800"
          >
            SMS Terms
          </a>
        </p>
        <p className="text-gray-600 text-sm">
          © 2024 Asian American Foods. All Rights Reserved. | HALAL Certified |
          USDA Approved
        </p>
      </div>
    </section>
  );
};

export default Contact;
