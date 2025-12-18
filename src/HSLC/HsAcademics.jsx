import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, NotebookPen } from "lucide-react";
import library from "../assets/class3.avif";
import classroom from "../assets/class.avif";
import computers from "../assets/computer.avif";
import teacher from "../assets/father.avif";
import galleryData from "../data/gallery";


const themeColors = {
  primary: "#38695aff", 
  primarySoft: "rgba(5,150,105,0.08)", 
  primaryShade: "#047857",
  neutralText: "#374151",
};

const academicsState = {
  title: "HSLC Academics",
  tagline: "A strong academic foundation built on discipline, curiosity, and guided learning.",
  image: classroom,
  description:
    "Our academic programme is structured to help students excel in board examinations while also nurturing analytical thinking, creativity, and problem-solving.",
};

const findImageSrc = (file) => galleryData.find((g) => g.file === file)?.src;
const resolveImages = (files = []) => files.map(findImageSrc).filter(Boolean);

const subjectImageMap = {
  Physics: ["lab18.avif", "lab19.avif", "lab20.avif", "lab21.avif", "lab22.avif", "lab23.avif"],
  Chemistry: ["lab2.avif", "lab3.avif", "lab4.avif", "lab10.avif", "lab11.avif"],
  Biology: ["lab12.avif", "lab13.avif", "lab14.avif", "lab15.avif"],
  Mathematics: ["class8.avif", "class9.avif", "class10.avif", "class11.avif"],
  "Computer Science": ["computer.avif", "computer2.avif", "computer3.avif", "computer4.avif"],
  History: ["hall.avif", "hall2.avif", "hall3.avif"],
  "Political Science": ["hall4.avif", "hall5.avif", "hall6.avif"],
  Geography: ["ground.avif", "ground2.avif", "ground3.avif", "ground4.avif"],
  Economics: ["class6.avif", "class7.avif", "class8.avif"],
  "English Literature": ["class3.avif", "class4.avif", "class5.avif"],
  Accountancy: ["lab2.avif", "lab3.avif", "lab4.avif", "computer.avif"],
  "Business Studies": ["class9.avif", "class10.avif", "class11.avif"],
  Informatics: ["computer2.avif", "computer3.avif", "computer4.avif"],
};

const academicStreams = [
  {
    id: "science",
    name: "Science Stream",
    summary: "Build a strong base for medical, engineering, and research pathways.",
    accentBorder: "border-emerald-500",
    accentTone: "text-emerald-700",
    chipTone: "bg-emerald-50 text-emerald-700",
    slides: [],
    subjects: [
      { name: "Physics", teachers: [{ name: "Mr. Ravi Kumar", image: teacher }], images: resolveImages(subjectImageMap.Physics) },
      { name: "Chemistry", teachers: [{ name: "Mrs. Anita Sharma", image: teacher }], images: resolveImages(subjectImageMap.Chemistry) },
      { name: "Biology", teachers: [{ name: "Mr. Ravi Kumar", image: teacher }], images: resolveImages(subjectImageMap.Biology) },
      { name: "Mathematics", teachers: [{ name: "Mrs. Anita Sharma", image: teacher }], images: resolveImages(subjectImageMap.Mathematics) },
      { name: "Computer Science", teachers: [{ name: "Mr. Ravi Kumar", image: teacher }], images: resolveImages(subjectImageMap["Computer Science"]) },
    ],
  },
  {
    id: "arts",
    name: "Arts",
    summary: "Grow critical thinking, communication, and civic awareness skills.",
    accentBorder: "border-indigo-500",
    accentTone: "text-indigo-700",
    chipTone: "bg-indigo-50 text-indigo-700",
    slides: [],
    subjects: [
      { name: "History", teachers: [{ name: "Ms. Priya Sen", image: teacher }], images: resolveImages(subjectImageMap.History) },
      { name: "Political Science", teachers: [{ name: "Mr. Arjun Das", image: teacher }], images: resolveImages(subjectImageMap["Political Science"]) },
      { name: "Geography", teachers: [{ name: "Ms. Priya Sen", image: teacher }], images: resolveImages(subjectImageMap.Geography) },
      { name: "Economics", teachers: [{ name: "Mr. Arjun Das", image: teacher }], images: resolveImages(subjectImageMap.Economics) },
      { name: "English Literature", teachers: [{ name: "Ms. Priya Sen", image: teacher }], images: resolveImages(subjectImageMap["English Literature"]) },
    ],
  },
  {
    id: "commerce",
    name: "Commerce ",
    summary: "Understand finance, trade, and business management fundamentals.",
    accentBorder: "border-amber-500",
    accentTone: "text-amber-700",
    chipTone: "bg-amber-50 text-amber-700",
    slides: [],
    subjects: [
      { name: "Accountancy", teachers: [{ name: "Mr. Sanjay Kapoor", image: teacher }], images: resolveImages(subjectImageMap.Accountancy) },
      { name: "Business Studies", teachers: [{ name: "Ms. Neha Rao", image: teacher }], images: resolveImages(subjectImageMap["Business Studies"]) },
      { name: "Economics", teachers: [{ name: "Ms. Neha Rao", image: teacher }], images: resolveImages(subjectImageMap.Economics) },
      { name: "Mathematics", teachers: [{ name: "Mr. Sanjay Kapoor", image: teacher }], images: resolveImages(subjectImageMap.Mathematics) },
      { name: "Informatics Practices", teachers: [{ name: "Ms. Neha Rao", image: teacher }], images: resolveImages(subjectImageMap.Informatics) },
    ],
  },
];



const fadeKeyframes = `
@keyframes fadeSlide {
  from { opacity: 0.35; transform: scale(1.01); }
  to { opacity: 1; transform: scale(1); }
}
`;

export default function HsAcademics() {
  const [activeStreamId, setActiveStreamId] = useState(academicStreams[0].id);
  const [slideIndex, setSlideIndex] = useState(0);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);

  const activeStream = academicStreams.find((stream) => stream.id === activeStreamId) || academicStreams[0];
  const activeSubjects = activeStream.subjects || [];
  const selectedSubject = activeSubjects[selectedSubjectIndex] || activeSubjects[0];
  const selectedSubjectName = selectedSubject?.name;

  const subjectSlides =
    (selectedSubject?.images || []).map((imgSrc) => ({
      image: imgSrc,
      label: `${selectedSubject?.name} Lab`,
    })) || [];
  const baseSlides = activeStream.slides || [];
  const slidesToUse = subjectSlides.length > 0 ? subjectSlides : baseSlides;

  const activeSlide = slidesToUse[slideIndex] || slidesToUse[0];
  const activeImage = activeSlide?.image || slidesToUse[0]?.image || classroom;
  const canSlide = slidesToUse.length > 1;
  const selectedTeachers = selectedSubject?.teachers || [];

  useEffect(() => {
    setSlideIndex(0);
    setSelectedSubjectIndex(0);
  }, [activeStreamId]);

  useEffect(() => {
    if (slideIndex >= slidesToUse.length) {
      setSlideIndex(0);
    }
  }, [slidesToUse.length, slideIndex]);

  useEffect(() => {
    setSlideIndex(0);
  }, [selectedSubjectIndex]);

  const changeSlide = (direction) => {
    if (!canSlide) return;
    setSlideIndex((prev) => {
      const lastIndex = slidesToUse.length - 1;
      if (direction === "next") {
        return prev === lastIndex ? 0 : prev + 1;
      }
      return prev === 0 ? lastIndex : prev - 1;
    });
  };

  return (
    <div
      className="text-gray-900 mt-2 md:mt-7 mb-60"
      style={{
        "--primary": themeColors.primary,
        "--primary-soft": themeColors.primarySoft,
        "--primary-shade": themeColors.primaryShade,
        "--neutral-text": themeColors.neutralText,
      }}
    >
      <style>{fadeKeyframes}</style>
      {/* HERO / INTRO */}
      <section className="bg-white w-full">
        <div className="relative pb-120 md:pb-70">
          <div className="relative h-[360px] sm:h-[460px] md:h-[600px] overflow-hidden">
            <div
              key={activeSlide?.label || slideIndex}
              className="h-full w-full relative"
              style={{ animation: "fadeSlide 0.7s ease-in-out" }}
            >
              <img
                src={activeImage}
                alt={`${activeStream.name} visual`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/35 to-transparent" />
            </div>

            <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-4 md:px-6">
              <button
                type="button"
                onClick={() => changeSlide("prev")}
                className="inline-flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/60 text-gray-800 shadow-md hover:bg-white transition"
              >
                <ChevronLeft/>
              </button>
              <button
                type="button"
                onClick={() => changeSlide("next")}
                className="inline-flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/60 text-gray-800 shadow-md hover:bg-white transition"
              >
                <ChevronRight/>
              </button>
            </div>

            <div className="absolute max-w-7xl mx-auto inset-x-0 top-0 px-3 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-12 flex flex-col gap-2 sm:gap-3 text-white">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                {academicsState.title}
              </p>
              <div className="text-base md:text-lg font-semibold">{activeSlide?.label}</div>
            </div>
          </div>

          <div className="absolute left-1/2 md:w-2/3 w-[90%] -translate-x-1/2 bottom-0 md:bottom-4">
            <div className="rounded-md bg-white  shadow-md border border-gray-100 overflow-hidden">
              <div className="p-3 md:p-4 border-b border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
                  {academicStreams.map((stream) => {
                    const isActive = stream.id === activeStreamId;
                    return (
                      <button
                        key={stream.id}
                        type="button"
                        onClick={() => setActiveStreamId(stream.id)}
                        className={`w-full rounded-sm border px-4 py-3 text-left transition-all ${stream.accentBorder} ${
                          isActive
                            ? "bg-white shadow-md"
                            : "bg-gray-50 hover:bg-white"
                        }`}
                      >
                        <div className={`text-sm font-bold ${isActive ? stream.accentTone : "text-gray-700"}`}>
                          {stream.name}
                        </div>
                        {/* <p className={`text-xs mt-1 leading-relaxed whitespace-normal ${isActive ? "text-gray-600" : "text-gray-500"}`}>
                          {stream.summary}
                        </p> */}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 pb-5 md:px-10 flex flex-col gap-4 md:gap-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-wide text-gray-500">Stream overview</p>
                    <h3 className="text-lg font-semibold text-gray-900">{activeStream.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{activeStream.summary}</p>
                  </div>

                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Key subjects in this stream</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {activeSubjects.map((subject, idx) => {
                      const isSelected = idx === selectedSubjectIndex;
                      return (
                        <button
                          type="button"
                          key={subject.name}
                          onClick={() => setSelectedSubjectIndex(idx)}
                          className={`rounded-sm px-3 py-2 text-xs font-semibold border transition ${
                            isSelected
                              ? "bg-gray-900 text-white border-gray-900"
                              : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                          }`}
                        >
                          {subject.name}
                        </button>
                      );
                    })}
                  </div>
                  {selectedTeachers.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500">
                        {selectedTeachers.length > 1 ? "Teachers" : "Teacher"} for {selectedSubject?.name}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedTeachers.map((teacher, i) => (
                          <div
                            key={i}
                            className="flex text-xs p-2  items-center gap-2 font-medium text-gray-700 shadow-sm"
                          >
                            <div className="w-10 h-10 flex items-center overflow-hidden rounded-full">
                            <img className="aspect-square scale-[6] object-cover w-full h-full" src={teacher.image} alt={teacher.name} />
                            </div>
                            <div className="text-xs font-medium text-gray-700">
                              {teacher.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </div>
  );
}
