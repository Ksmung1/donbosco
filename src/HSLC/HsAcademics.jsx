import React from "react";
import { BookOpen, FlaskConical, NotebookPen, BrainCircuit } from "lucide-react";
import library from "../assets/class3.avif";
import scienceLab from "../assets/lab.avif";
import classroom from "../assets/class.avif";
import computers from "../assets/computer.avif";
import teacher from "../assets/father.avif";


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

const curriculumHighlights = [
  {
    icon: <BookOpen className="w-8 h-8 text-[var(--primary,#059669)]" />,
    title: "Structured Curriculum",
    description:
      "Aligned with SEBA board standards, ensuring clarity, progression, and mastery of core concepts.",
    image: library,
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-[var(--primary,#059669)]" />,
    title: "Science & Practical Learning",
    description:
      "Hands-on experiments, lab sessions, demonstrations and inquiry-based science instruction.",
    image: scienceLab,
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-[var(--primary,#059669)]" />,
    title: "Competency-Based Learning",
    description:
      "Focus on understanding, application, reasoning, and higher-order thinking instead of rote study.",
    image: computers,
  },
];

const subjects = [
  "English",
  "Mathematics",
  "General Science",
  "Social Science",
  "MIL / Hindi",
  "Computer Science",
  "EVS (Lower Classes)",
  "Value Education",
];

const labs = [
  {
    name: "Science Laboratory",
    image: scienceLab,
    description: "Fully equipped Physics, Chemistry & Biology labs to support practical learning.",
  },
  {
    name: "Computer Laboratory",
    image: computers,
    description: "Modern systems with structured digital literacy and coding foundations.",
  },
  {
    name: "Library & Reading Room",
    image: library,
    description: "A quiet, resource-rich reading space with academic texts and reference materials.",
  },
];

const teachingMethods = [
  "Activity-based learning",
  "Demonstration and guided discovery",
  "Concept-based explanations",
  "Regular assessments and feedback",
  "Smart classrooms with digital tools",
  "Collaborative group learning",
];

const faculty = [
  {
    name: "Mrs. Anita Sharma",
    role: "Academic Coordinator",
    image: teacher,
    bio: "Guiding teachers and students with 15+ years of academic leadership experience.",
  },
  {
    name: "Mr. Ravi Kumar",
    role: "Science Faculty",
    image: teacher,
    bio: "Specialist in integrated science teaching with a passion for hands-on demonstrations.",
  },
];

export default function HsAcademics() {
  return (
    <div
      className="text-gray-900"
      style={{
        "--primary": themeColors.primary,
        "--primary-soft": themeColors.primarySoft,
        "--primary-shade": themeColors.primaryShade,
        "--neutral-text": themeColors.neutralText,
      }}
    >
      {/* HERO / INTRO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text */}
              <div>
                <p
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: "var(--primary-soft)",
                    color: "var(--primary)",
                  }}
                >
                  Academics
                </p>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {academicsState.title}
                </h1>

                <p className="mt-4" style={{ color: "var(--neutral-text)" }}>
                  {academicsState.tagline}
                </p>

                <p className="mt-2 text-gray-600 max-w-xl">{academicsState.description}</p>
              </div>

              {/* Image */}
              <div className="rounded-3xl overflow-hidden shadow-md">
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={academicsState.image}
                    alt="Academics overview"
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* CURRICULUM HIGHLIGHTS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Curriculum Highlights</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {curriculumHighlights.map((item) => (
                <article key={item.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="relative aspect-video">
                    <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                    <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-gray-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS OFFERED */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6">Subjects Offered</h2>

            <div className="flex flex-wrap gap-3">
              {subjects.map((subj) => (
                <span
                  key={subj}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: "#f3f4f6", color: "var(--neutral-text)" }}
                >
                  {subj}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES / LABS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-8">Learning Facilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {labs.map((lab) => (
                <div key={lab.name} className="rounded-2xl bg-white shadow-sm overflow-hidden">
                  <div className="aspect-video">
                    <img src={lab.image} alt={lab.name} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">{lab.name}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{lab.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEACHING METHODS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6">Teaching Approach</h2>

            <ul className="space-y-3">
              {teachingMethods.map((method, i) => (
                <li key={i} className="flex items-start gap-3">
                  <NotebookPen className="w-5 h-5 text-[var(--primary,#059669)] mt-1" />
                  <p className="text-gray-700">{method}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6">Faculty</h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {faculty.map((f) => (
                <div key={f.name} className="rounded-2xl bg-white p-6 shadow-sm flex gap-4 items-start">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img src={f.image} alt={f.name} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{f.name}</div>
                    <div className="text-sm text-gray-500">{f.role}</div>
                    <p className="mt-2 text-gray-600 text-sm">{f.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
