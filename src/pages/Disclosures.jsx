import React from "react";
import { FileText, Shield } from "lucide-react";
import { disclosures } from "../data/disclosuresData";
import { getIcon } from "../utils/iconMapper";

const Disclosures = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/50 to-blue-800/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <FileText className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Legal Disclosures
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              School <span className="text-blue-200">Disclosures</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive information about our school's recognition,
              management, facilities, and compliance with educational
              regulations.
            </p>
            <div className="w-24 h-1 bg-blue-200 mx-auto mt-4"></div>
          </div>
        </div>
      </section>

      {/* Disclosures Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {disclosures.map((disclosure) => (
              <div
                key={disclosure.id}
                className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
                    {getIcon(disclosure.iconName, "w-6 h-6")}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {disclosure.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {disclosure.items.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 last:border-0 pb-3 last:pb-0"
                    >
                      <div className="text-sm font-semibold text-gray-700 mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-600">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All information provided in this disclosure section is
                  accurate as of the current academic year. For the most
                  up-to-date information or clarification on any matter, please
                  contact the school administration directly.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This disclosure is published in compliance with the Right to
                  Information Act and State Education Department guidelines. The
                  school reserves the right to update this information as and
                  when required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need More Information?
            </h2>
            <p className="text-gray-600">
              For detailed information or clarification on any disclosure,
              please contact us
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors text-center"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors text-center"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclosures;
