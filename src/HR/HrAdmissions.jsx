import React from 'react'
import { Calendar, FileText, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { FaRupeeSign } from 'react-icons/fa';

const webState = {
  state: "Admissions",
  title: "Admissions HR",
  from: "Classes X - XII",
  about: "View admission details and monthly fees structure for Higher Secondary section.",
  description2: "We welcome students who are committed to academic excellence and personal growth.",
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
    description: "Submit required documents including HSLC marksheet, transfer certificate, and photographs.",
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
  { class: "X", age: "15-16 years", seats: "40 per class", requirements: "Class IX marksheet, Transfer certificate" },
  { class: "XI", age: "16-17 years", seats: "45 per class", requirements: "HSLC marksheet, Transfer certificate" },
  { class: "XII", age: "17-18 years", seats: "45 per class", requirements: "Class XI marksheet, Transfer certificate" },
];

const feeStructure = [
  { class: "X", admission: "₹3,000", monthly: "₹2,000", annual: "₹24,000", other: "₹5,000" },
  { class: "XI", admission: "₹3,500", monthly: "₹2,200", annual: "₹26,400", other: "₹6,000" },
  { class: "XII", admission: "₹3,500", monthly: "₹2,200", annual: "₹26,400", other: "₹6,000" },
];

const requiredDocuments = [
  "HSLC/Class IX marksheet (original + 2 copies)",
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

const HrAdmissions = () => {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-24">
            <div className="text-center">
              <p className="inline-flex items-center rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary,#2563eb)]">
                {webState.state}
              </p>
              <h1 className="mt-4 text-2xl md:text-5xl font-extrabold tracking-tight">
                {webState.title}
              </h1>
              <p className="mt-4 text-xs md:text-md text-gray-600 max-w-2xl mx-auto">{webState.about}</p>
            </div>
          </div>
      </section>

      {/* Admission Process */}
      <section className="bg-gray-50 py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-5xl font-extrabold mb-4">Admission Process</h2>
              <p className="text-xs md:text-md text-gray-600 max-w-2xl mx-auto">
                Follow these simple steps to secure admission for your child
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {admissionProcess.map((process, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] flex items-center justify-center mb-3 md:mb-4">
                    <span className="text-lg md:text-xl font-bold text-[var(--primary,#2563eb)]">{process.step}</span>
                  </div>
                  <h3 className="text-md md:text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class-wise Admission Details */}
      <section className="bg-white py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-5xl font-extrabold mb-4">Class-wise Admission Details</h2>
              <p className="text-xs md:text-md text-gray-600">Admission information for all classes</p>
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
      <section className="bg-gray-50 py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <FaRupeeSign className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary,#2563eb)]" />
                <h2 className="text-2xl md:text-5xl font-extrabold">Fee Structure</h2>
              </div>
              <p className="text-xs md:text-md text-gray-600">Transparent and affordable fee structure for all classes</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[var(--primary,#2563eb)]">
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
      <section className="bg-white py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {/* Required Documents */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary,#2563eb)]" />
                  <h2 className="text-xl md:text-2xl font-extrabold">Required Documents</h2>
                </div>
                <ul className="space-y-2 md:space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary,#2563eb)] mt-0.5 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Dates */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-[var(--primary,#2563eb)]" />
                  <h2 className="text-xl md:text-2xl font-extrabold">Important Dates</h2>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-start justify-between gap-4 pb-3 md:pb-4 border-b border-gray-200 last:border-0">
                      <div className="flex-1">
                        <div className="text-xs md:text-sm font-semibold text-gray-900">{item.event}</div>
                      </div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium">{item.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center">Contact for Admissions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary,#2563eb)]" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold mb-1">Phone</h3>
                    <p className="text-xs md:text-sm text-gray-600">+91 98765 43210</p>
                    <p className="text-xs md:text-sm text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary,#2563eb)]" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold mb-1">Email</h3>
                    <p className="text-xs md:text-sm text-gray-600">admissions@donbosco.edu</p>
                    <p className="text-xs md:text-sm text-gray-600">info@donbosco.edu</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[var(--primary,#2563eb)]" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold mb-1">Address</h3>
                    <p className="text-xs md:text-sm text-gray-600">Don Bosco School</p>
                    <p className="text-xs md:text-sm text-gray-600">City, State - PIN Code</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-8 text-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-[var(--primary,#2563eb)] px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold text-white shadow-md hover:opacity-95 transition">
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

export default HrAdmissions;

