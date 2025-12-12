import React from 'react'
import { Calendar, FileText, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { FaRupeeSign } from 'react-icons/fa';

const webState = {
  state: "Admissions",
  title: "Admissions HSLC",
  from: "Classes I - XII",
  about: "View admission details and monthly fees structure.",
  description2: "Our community values are rooted in respect, service, and the pursuit of knowledge. We blend strong academics with character formation and extracurricular opportunity.",
};

const admissionProcess = [
  {
    step: "1",
    title: "Application Form",
    description: "Fill out the admission form available online or at the school office.",
  },
  {
    step: "2",
    title: "Document Submission",
    description: "Submit required documents including birth certificate, previous school records, and photographs.",
  },
  {
    step: "3",
    title: "Assessment/Interview",
    description: "Students may be required to take an assessment test or attend an interview session.",
  },
  {
    step: "4",
    title: "Admission Confirmation",
    description: "Upon selection, complete fee payment and receive admission confirmation.",
  },
];

const classAdmissions = [
  { class: "I - V", age: "6-10 years", seats: "30 per class", requirements: "Birth certificate, Previous school records" },
  { class: "VI - VIII", age: "11-13 years", seats: "35 per class", requirements: "Transfer certificate, Previous year marksheet" },
  { class: "IX - X", age: "14-15 years", seats: "40 per class", requirements: "Transfer certificate, Class VIII marksheet" },
  { class: "XI - XII", age: "16-17 years", seats: "45 per class", requirements: "HSLC marksheet, Transfer certificate" },
];

const feeStructure = [
  { class: "I - V", admission: "₹2,000", monthly: "₹1,500", annual: "₹18,000", other: "₹3,000" },
  { class: "VI - VIII", admission: "₹2,500", monthly: "₹1,800", annual: "₹21,600", other: "₹4,000" },
  { class: "IX - X", admission: "₹3,000", monthly: "₹2,000", annual: "₹24,000", other: "₹5,000" },
  { class: "XI - XII", admission: "₹3,500", monthly: "₹2,200", annual: "₹26,400", other: "₹6,000" },
];

const requiredDocuments = [
  "Birth Certificate (original + 2 copies)",
  "Previous school Transfer Certificate",
  "Previous year mark sheets",
  "Passport size photographs (4 copies)",
  "Aadhaar card copy (student & parents)",
  "Caste certificate (if applicable)",
  "Medical certificate",
];

const importantDates = [
  { event: "Admission Open", date: "March 1, 2025" },
  { event: "Last Date for Application", date: "April 30, 2025" },
  { event: "Assessment/Interview", date: "May 10-15, 2025" },
  { event: "Result Declaration", date: "May 20, 2025" },
  { event: "Fee Payment Deadline", date: "June 5, 2025" },
  { event: "Academic Session Begins", date: "June 15, 2025" },
];

const HsAdmissions = () => {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <p className="inline-flex items-center rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary,#059669)]">
                {webState.state}
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                {webState.title}
              </h1>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{webState.about}</p>
            </div>
          </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to secure admission for your child
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionProcess.map((process, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-[var(--primary,#059669)]">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class-wise Admission Details */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Class-wise Admission Details</h2>
              <p className="text-gray-600">Admission information for all classes</p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Class
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Age Group
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Available Seats
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Requirements
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {classAdmissions.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-semibold text-gray-900">{item.class}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">{item.age}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">{item.seats}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600">{item.requirements}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <FaRupeeSign className="w-8 h-8 text-[var(--primary,#059669)]" />
                <h2 className="text-3xl font-bold">Fee Structure</h2>
              </div>
              <p className="text-gray-600">Transparent and affordable fee structure for all classes</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[var(--primary,#059669)]">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Class
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Admission Fee
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Monthly Fee
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Annual Fee
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-white uppercase tracking-wider">
                        Other Charges
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-gray-900">{fee.class}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="text-sm font-medium text-gray-900">{fee.admission}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="text-sm font-medium text-gray-900">{fee.monthly}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="text-sm font-medium text-gray-900">{fee.annual}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="text-sm font-medium text-gray-900">{fee.other}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>Note:</strong> Other charges include library fee, laboratory fee, sports fee, and development fund. 
                  Fees are subject to revision. Please contact the school office for the most current fee structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents & Important Dates */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Required Documents */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-[var(--primary,#059669)]" />
                  <h2 className="text-2xl font-bold">Required Documents</h2>
                </div>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--primary,#059669)] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Dates */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-[var(--primary,#059669)]" />
                  <h2 className="text-2xl font-bold">Important Dates</h2>
                </div>
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200 last:border-0">
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">{item.event}</div>
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-8 text-center">Contact for Admissions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[var(--primary,#059669)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                    <p className="text-gray-600 text-sm">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[var(--primary,#059669)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">admissions@donbosco.edu</p>
                    <p className="text-gray-600 text-sm">info@donbosco.edu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--primary,#059669)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600 text-sm">Don Bosco School</p>
                    <p className="text-gray-600 text-sm">City, State - PIN Code</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-[var(--primary,#059669)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition">
                  <Phone className="w-4 h-4" />
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HsAdmissions;
