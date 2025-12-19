import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Award,
  Users,
} from "lucide-react";
import { toppersData } from "../data/toppersData";
import gallery from "../data/gallery";
import { staffsData } from "../data/staffsData";
import { MdPlayArrow } from "react-icons/md";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { createSlidesData, createFacilitiesData } from "../data/academicsData";

const Academics = () => {
  const { state } = useOutletContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Helper function to resolve images from gallery
  const resolveImages = (prefixes = [], files = []) => {
    const loweredPrefixes = prefixes.map((p) => p.toLowerCase());
    const loweredFiles = files.map((f) => f.toLowerCase());

    return gallery
      .filter(({ file = "" }) => {
        const name = file.toLowerCase();
        if (loweredFiles.includes(name)) return true;
        return loweredPrefixes.some((prefix) => name.startsWith(prefix));
      })
      .map((g) => g.src);
  };

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

  // Create slides with school divisions - from data file
  const slides = createSlidesData(academicImages, resolveImages);

  const activeSlide = slides[currentIndex];
  const currentSection = sectionCodes[currentIndex];

  // Filter toppers for current section
  const filteredToppers = toppersData
    .filter((t) => {
      const topperState = t.state?.toLowerCase();
      return (
        topperState === currentSection ||
        (currentSection === "pb" && topperState === "jb") ||
        (currentSection === "jb" && topperState === "pb")
      );
    })
    .sort((a, b) => {
      const yearA = Number(a.year) || 0;
      const yearB = Number(b.year) || 0;
      if (yearB !== yearA) return yearB - yearA;
      const percentA = Number(a.percent) || 0;
      const percentB = Number(b.percent) || 0;
      return percentB - percentA;
    })
    .slice(0, 6);

  // Define all facilities with section assignments - from data file
  const allFacilities = createFacilitiesData();

  // Filter facilities for current section
  const currentFacilities = allFacilities.filter((facility) => {
    if (Array.isArray(facility.forSection)) {
      return facility.forSection.includes(currentSection);
    }
    return facility.forSection === currentSection;
  });

  // Filter teachers for current section
  // Handle both "pb" and "jb" for Junior Section
  const currentTeachers = staffsData.filter((teacher) => {
    // Handle if state is an array (multiple states)
    if (Array.isArray(teacher.state)) {
      return (
        teacher.state.includes(currentSection) ||
        (currentSection === "pb" && teacher.state.includes("jb")) ||
        (currentSection === "jb" && teacher.state.includes("pb"))
      );
    }
    // Handle single state, also map "jb" to "pb" and vice versa
    const teacherState = teacher.state?.toLowerCase();
    return (
      teacherState === currentSection ||
      (currentSection === "pb" && teacherState === "jb") ||
      (currentSection === "jb" && teacherState === "pb")
    );
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
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
                {slides.map((slide) => (
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
                            <div className="flex max-w-7xl  px-4 md:px-6 lg:px-8 mx-auto flex-col justify-center items-start text-white">
                              <h3 className="text-3xl md:text-5xl font-bold mb-3">
                                {slide.title}
                              </h3>
                              <p className="text-xl md:text-2xl text-blue-100 mb-2">
                                {slide.subtitle}
                              </p>
                              <p className="text-xs md:text-sm max-w-xl">
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
              {slides.map((_, index) => (
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

      {/* Facilities Section */}
      <section className="py-10 md:py-20 bg-white min-h-screen w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Facilities List */}
          <div className="space-y-24 w-full">
            {currentFacilities.map((facility, facilityIndex) => {
              const images = resolveImages(
                facility.imagePrefixes,
                facility.imageFiles
              ).slice(0, 2);
              const isEven = facilityIndex % 2 === 0;

              return (
                <div
                  key={facilityIndex}
                  className={`w-full ${isEven ? "lg:pr-12" : "lg:pl-12"}`}
                >
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 lg:gap-12 items-center`}
                  >
                    {/* Facility Info */}
                    <div className="flex-1 space-y-6">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-blue-800 rounded-full"></div>
                        <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">
                          Facility {facilityIndex + 1}
                        </span>
                      </div>
                      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        {(() => {
                          const nameParts = facility.name.split(" ");
                          const firstPart = nameParts[0];
                          const secondPart = nameParts.slice(1).join(" ");
                          return (
                            <>
                              {firstPart}{" "}
                              {secondPart && (
                                <span className="text-blue-600">
                                  {secondPart}
                                </span>
                              )}
                            </>
                          );
                        })()}
                      </h1>

                      <p className="text-lg md:text-xl text-blue-100 max-w-xl">
                        {facility.description}
                      </p>
                    </div>

                    {/* Facility Images */}
                    <div className="flex-1 w-full">
                      {images.length > 0 ? (
                        <div
                          className={`grid gap-4 ${
                            images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                          }`}
                        >
                          {images.map((src, idx) => (
                            <div
                              key={idx}
                              className={`group relative overflow-hidden rounded-md bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                                idx === 0 && images.length === 2
                                  ? "row-span-2 aspect-square"
                                  : "aspect-square"
                              }`}
                            >
                              <img
                                src={src}
                                alt={`${facility.name} ${idx + 1}`}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                                  <p className="text-sm font-semibold text-gray-900">
                                    {facility.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-16 text-center border-2 border-dashed border-gray-300">
                          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BookOpen className="w-10 h-10 text-blue-600" />
                          </div>
                          <p className="text-gray-600 font-medium">
                            Images coming soon
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-24 bg-gray-50 min-h-screen w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Faculty <span className="text-blue-800">Members</span>
            </h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mt-4"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Dedicated and experienced educators committed to student success
            </p>
          </div>

          {currentTeachers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentTeachers.map((teacher) => {
                // Handle multiple subjects if teacher has subjects array
                const subjects = Array.isArray(teacher.subject)
                  ? teacher.subject
                  : [];

                // Handle multiple states display
                const states = Array.isArray(teacher.state)
                  ? teacher.state
                  : [teacher.state];
                const stateDisplay = states
                  .map((s) => (s === "pb" ? "JB" : s.toUpperCase()))
                  .join(", ");

                return (
                  <div
                    key={teacher.id}
                    className="bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Teacher Image */}
                    <div className="relative grid grid-cols-2 md:grid-cols-1  overflow-hidden bg-gray-100">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full aspect-square object-cover transition-transform duration-300 hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/300x400?text=Teacher";
                        }}
                      />
                      <div className="relative">
                        <span className="bg-blue-800 absolute top-4 right-2 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {stateDisplay}
                        </span>
                        <div className="p-5">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {teacher.name}
                          </h3>
                          <p className="text-sm text-blue-800 font-semibold mb-3">
                            {teacher.position}
                          </p>

                          {/* Subjects */}
                          {subjects.length > 0 && (
                            <div className="mb-3">
                              <p className="text-xs text-gray-500 mb-1">
                                Subjects:
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {subjects.map((subject, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block text-[10px] font-bold bg-blue-100 rouned-full text-blue-800 p-1 rounded"
                                  >
                                    {subject}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Teacher Info */}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                No faculty members found for this section.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* TOPPERS SECTION */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 text-center ">
                {activeSlide.title}{" "}
                <span className="text-blue-700">Toppers</span>
              </h2>
              <p className="mt-1 text-center text-xs md:mt-3 md:text-sm text-gray-500">
                All rank-1 achievers — celebrated by year
              </p>
            </div>

            <div className="inline-flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm">
                <svg
                  className="w-4 h-4 text-blue-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2l2.9 6.4L22 9.2l-5 4.1L18 22l-6-3.4L6 22l1-8.7L2 9.2l7.1-0.8L12 2z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-xs text-blue-700 font-medium">
                  Top Achievers
                </span>
              </div>
            </div>
          </div>

          {/* Desktop table */}
          {filteredToppers.length > 0 ? (
            <div className="hidden md:block bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr className="text-sm text-gray-600">
                    <th className="px-4 py-3">Student</th>
                    <th className="px-4 py-3">Percent</th>
                    <th className="px-4 py-3">Year</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredToppers.map((t, i) => {
                    const percent = Number(t.percent) || 0;
                    const initials = (t.name || "")
                      .split(" ")
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase();

                    return (
                      <tr
                        key={`${t.name}-${t.year}-${i}`}
                        className={`${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-white transition`}
                      >
                        {/* Student */}
                        <td className="px-4 py-4 align-middle">
                          <div className="flex items-center gap-3">
                            {/* avatar or initials */}
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 font-semibold">
                              {t.image ? (
                                <img
                                  src={t.image}
                                  alt={t.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              ) : (
                                initials
                              )}
                            </div>

                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {t.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                Rank: 1
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Percent (large badge) */}
                        <td className="px-4 py-4 align-middle w-40">
                          <div className="flex items-center gap-4">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {percent}%
                              </div>
                              <div className="text-xs text-gray-400">
                                Excellent performance
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Year */}
                        <td className="px-4 py-4 align-middle w-28">
                          <div className="text-sm font-medium text-gray-700">
                            {t.year}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="hidden md:block bg-white border border-gray-100 rounded-lg shadow-sm p-12 text-center">
              <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                No toppers data available for this section.
              </p>
            </div>
          )}

          {/* Mobile stacked list */}
          {filteredToppers.length > 0 ? (
            <div className="md:hidden space-y-3">
              {filteredToppers.map((t, i) => {
                const percent = Number(t.percent) || 0;
                const initials = (t.name || "")
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();

                return (
                  <article
                    key={`${t.name}-${t.year}-${i}`}
                    className="p-3 py-2 bg-white rounded-lg border border-gray-100 shadow-md transition"
                    aria-labelledby={`topper-${i}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700 overflow-hidden">
                          {t.image ? (
                            <img
                              src={t.image}
                              alt={t.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            initials
                          )}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h3
                              id={`topper-${i}`}
                              className="text-xs font-medium text-gray-900"
                            >
                              {t.name}
                            </h3>
                            <div className="text-[10px] text-gray-500">
                              Rank: 1
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-xs font-bold">{percent}%</div>
                            <div className="text-[11px] font-semibold text-gray-400">
                              {t.year}
                            </div>
                          </div>
                        </div>

                        <p className="mt- text-[10px] md:font-md font-light text-gray-600">
                          Congratulations on an outstanding achievement!
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="md:hidden bg-white border border-gray-100 rounded-lg shadow-sm p-8 text-center">
              <Award className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-600">
                No toppers data available for this section.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Academics;
