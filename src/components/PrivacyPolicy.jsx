import React from "react";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="pt-20 bg-gradient-to-b from-white to-teal-50 min-h-screen">
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold mb-8"
          >
            <ArrowLeft size={18} />
            Back to Contact
          </a>

          <div className="bg-white border border-teal-100 rounded-2xl shadow-sm p-8 md:p-12">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
              Asian American Foods
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-5">
                <div className="flex items-center gap-2 text-teal-700 font-bold mb-2">
                  <MessageCircle size={20} />
                  SMS Business Line
                </div>
                <a
                  href="tel:+13252695223"
                  className="text-2xl font-black text-gray-900 hover:text-teal-700"
                >
                  325-269-5223
                </a>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <div className="flex items-center gap-2 text-gray-700 font-bold mb-2">
                  <Phone size={20} />
                  General Business Line
                </div>
                <a
                  href="tel:+17327818102"
                  className="text-2xl font-black text-gray-900 hover:text-teal-700"
                >
                  (732) 781-8102
                </a>
              </div>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  SMS Privacy Policy & Terms of Service
                </h2>
                <p>
                  By providing your phone number to Asian American Foods, you
                  agree to receive text messages from us regarding your
                  wholesale inquiries, order confirmations, and delivery
                  updates. Message and data rates may apply. Message frequency
                  varies. You can reply STOP at any time to opt-out of future
                  messaging.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Privacy Protection
                </h2>
                <p>
                  Mobile information shared for SMS consent will not be shared
                  with third parties or affiliates for marketing or promotional
                  purposes. This excludes text messaging originator opt-in data
                  and consent; this information will not be shared with any
                  third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Business Locations
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-1">
                      Detroit / Farmington Hills
                    </h3>
                    <p>23985 Industrial Park Dr, Farmington Hills, MI 48335</p>
                    <a
                      href="tel:+17327818102"
                      className="text-teal-700 font-semibold hover:text-teal-800"
                    >
                      (732) 781-8102
                    </a>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-1">Dallas</h3>
                    <p>818 Metromedia Pl, Dallas, TX 75247</p>
                    <a
                      href="tel:+14694188075"
                      className="text-teal-700 font-semibold hover:text-teal-800"
                    >
                      (469) 418-8075
                    </a>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-1">
                      Plant / Goldthwaite
                    </h3>
                    <p>1110 E Front St, Goldthwaite, TX 76844</p>
                    <a
                      href="tel:+13252695223"
                      className="text-teal-700 font-semibold hover:text-teal-800"
                    >
                      325-269-5223
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
