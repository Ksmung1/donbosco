import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Calendar,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  DollarSign,
} from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";
import gallery from "../data/gallery";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { createAdmissionData } from "../data/admissionsData";

const Admissions = () => {
  const { state } = useOutletContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Get academic-related images from gallery
  const academicImages = gallery.filter((item) => {
    const fileName = item.file?.toLowerCase() || "";
    return (
      fileName.includes("class") ||
      fileName.includes("lab") ||
      fileName.includes("computer") ||
      fileName.includes("library")
    );
  });

  // Map slide index to section code
  const sectionCodes = ["hs", "hr", "pb"]; // hs = Higher Secondary, hr = High School, pb = Junior Section

  // Admission data for each section - created from data file
  const admissionData = createAdmissionData(academicImages);

  const activeSlide = admissionData[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % admissionData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + admissionData.length) % admissionData.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Full-Width Slide Carousel */}
      <section className="relative bg-white overflow-hidden">
        <div className="w-full">
          {/* Full-Width Slide Carousel */}
          <div className="relative">
            <div
              className="relative w-full overflow-hidden touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className={`flex transition-transform duration-500 ease-in-out ${
                  isDragging ? "transition-none" : ""
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {admissionData.map((slide) => (
                  <div key={slide.id} className="w-full shrink-0">
                    <div className="relative overflow-hidden shadow-2xl bg-white">
                      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                        {slide.image ? (
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                            <BookOpen className="w-16 h-16 text-blue-600" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/10 to-transparent"></div>

                        <div className="absolute inset-0 flex items-center z-10">
                          <div className="w-full">
                            <div className="flex  px-4 md:px-6 lg:px-8 max-w-7xl mx-auto flex-col justify-center items-start text-white">
                              <h3 className="text-3xl md:text-5xl font-bold mb-3">
                                {slide.title} Admissions
                              </h3>
                              <p className="text-xl md:text-2xl text-blue-100 mb-2">
                                {slide.subtitle}
                              </p>
                              <p className="text-lg md:text-xl text-blue-100 max-w-xl">
                              {slide.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 z-20 items-center justify-between px-4 md:px-8">
              <button
                onClick={prevSlide}
                className="group relative w-5 h-5 md:w-10 md:h-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border-2 border-gray-100  overflow-hidden"
                aria-label="Previous slide"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-white opacity-0  transition-opacity duration-300"></div>
                <div className="absolute inset-0  transition-colors duration-300"></div>
                <AiFillCaretLeft className="relative w-6 md:w-7 h-6 md:h-7 text-white  group-hover:scale-110 transition-all duration-300" />
              </button>
              <button
                onClick={nextSlide}
                className="group relative w-5 h-5 md:w-10 md:h-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center border-2 border-gray-100 overflow-hidden"
                aria-label="Next slide"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-white opacity-0  transition-opacity duration-300"></div>
                <div className="absolute inset-0  transition-colors duration-300"></div>
                <AiFillCaretRight className="relative w-6 md:w-7 h-6 md:h-7 text-white  group-hover:scale-110 transition-all duration-300" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {admissionData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-blue-200"
                      : "w-2 bg-blue-400/50 hover:bg-blue-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Admission <span className="text-blue-800">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to secure admission for your child
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeSlide.admissionProcess.map((process, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-800">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class-wise Admission Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Class-wise Admission{" "}
              <span className="text-blue-800">Details</span>
            </h2>
            <p className="text-lg text-gray-600">
              Admission information for all classes
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-blue-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Class
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Age Group
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Available Seats
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Requirements
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {activeSlide.classAdmissions.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-gray-900">
                            {item.class}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">
                            {item.age}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600">
                            {item.seats}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-600">
                            {item.requirements}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <FaRupeeSign className="w-8 h-8 text-blue-800" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Fee <span className="text-blue-800">Structure</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Transparent and affordable fee structure for all classes
            </p>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-800">
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
                  {activeSlide.feeStructure.map((fee, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          {fee.class}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {fee.admission}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {fee.monthly}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {fee.annual}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {fee.other}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Other charges include library fee,
                laboratory fee, sports fee, and development fund. Fees are
                subject to revision. Please contact the school office for the
                most current fee structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents & Important Dates */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Required Documents */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-blue-800" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Required Documents
                  </h2>
                </div>
                <ul className="space-y-3">
                  {activeSlide.requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-800 mt-0.5 shrink-0" />
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
                  <Calendar className="w-8 h-8 text-blue-800" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Important Dates
                  </h2>
                </div>
                <div className="space-y-4">
                  {activeSlide.importantDates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200 last:border-0"
                    >
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">
                          {item.event}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {item.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
