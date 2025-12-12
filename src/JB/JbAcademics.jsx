import React from "react";
import { BookOpen, FlaskConical, NotebookPen, BrainCircuit } from "lucide-react";
import library from "../assets/class6.avif";
import scienceLab from "../assets/lab3.avif";
import classroom from "../assets/class5.avif";
import computers from "../assets/computer3.avif";
import teacher from "../assets/father3.avif";

const themeColors = {
  primary: "#f97316", 
  primarySoft: "rgba(249,115,22,0.12)", 
  primaryShade: "#ea580c",
  neutralText: "#374151",
};

const academicsState = {
  title: "JB Academics",
  tagline: "Play-based learning and foundational skills development for young children.",
  image: classroom,
  description:
    "Our JB academic programme focuses on learning through play, exploration, and hands-on activities that build foundational skills in a joyful environment.",
};

const curriculumHighlights = [
  {
    icon: <BookOpen className="w-8 h-8 text-[var(--primary,#f97316)]" />,
    title: "Play-Based Curriculum",
    description:
      "Learning through play, stories, songs, and interactive activities that make education fun and engaging.",
    image: library,
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-[var(--primary,#f97316)]" />,
    title: "Creative Activities",
    description:
      "Art, craft, music, and movement activities that develop creativity, motor skills, and self-expression.",
    image: scienceLab,
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-[var(--primary,#f97316)]" />,
    title: "Foundation Building",
    description:
      "Building strong foundations in language, numeracy, and social skills through age-appropriate activities.",
    image: computers,
  },
];

const subjects = [
  "Language Development",
  "Numeracy Skills",
  "Environmental Studies",
  "Art & Craft",
  "Music & Movement",
  "Physical Education",
  "Storytelling",
  "Value Education",
];

const labs = [
  {
    name: "Activity Room",
    image: scienceLab,
    description: "Dedicated space for hands-on activities, experiments, and creative projects.",
  },
  {
    name: "Play Area",
    image: computers,
    description: "Safe and engaging play areas with age-appropriate toys and equipment.",
  },
  {
    name: "Library Corner",
    image: library,
    description: "Cozy reading corner with picture books, storybooks, and interactive learning materials.",
  },
];

const teachingMethods = [
  "Play-based learning activities",
  "Storytelling and role-play",
  "Hands-on experiments and exploration",
  "Music, dance, and movement",
  "Art and craft projects",
  "Group activities and peer interaction",
];

const faculty = [
  {
    name: "Mrs. Anita Sharma",
    role: "Early Childhood Coordinator",
    image: teacher,
    bio: "Experienced educator specializing in early childhood development and play-based learning.",
  },
  {
    name: "Mr. Ravi Kumar",
    role: "Activity Coordinator",
    image: teacher,
    bio: "Passionate about creative activities and holistic development of young children.",
  },
];

export default function JbAcademics() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
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

                <h1 className="mt-4 text-2xl md:text-5xl font-extrabold tracking-tight">
                  {academicsState.title}
                </h1>

                <p className="mt-4 text-xs md:text-md" style={{ color: "var(--neutral-text)" }}>
                  {academicsState.tagline}
                </p>

                <p className="mt-2 text-xs md:text-md text-gray-600 max-w-xl">{academicsState.description}</p>
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
      <section className="bg-gray-50 py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Curriculum Highlights</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
              {curriculumHighlights.map((item) => (
                <article key={item.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="relative aspect-video">
                    <img src={item.image} alt={item.title} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                    <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-md md:text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-xs md:text-sm text-gray-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS OFFERED */}
      <section className="bg-white py-5 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Learning Areas</h2>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {subjects.map((subj) => (
                <span
                  key={subj}
                  className="px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium"
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
      <section className="bg-gray-50 py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center md:text-left">Learning Facilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {labs.map((lab) => (
                <div key={lab.name} className="rounded-2xl bg-white shadow-sm overflow-hidden">
                  <div className="aspect-video">
                    <img src={lab.image} alt={lab.name} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="font-semibold text-md md:text-lg">{lab.name}</h3>
                    <p className="mt-2 text-xs md:text-sm text-gray-600">{lab.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEACHING METHODS */}
      <section className="bg-white py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Teaching Approach</h2>

            <ul className="space-y-2 md:space-y-3">
              {teachingMethods.map((method, i) => (
                <li key={i} className="flex items-start gap-3">
                  <NotebookPen className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary,#f97316)] mt-1 flex-shrink-0" />
                  <p className="text-xs md:text-sm text-gray-700">{method}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="bg-gray-50 py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Faculty</h2>

            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {faculty.map((f) => (
                <div key={f.name} className="rounded-2xl bg-white p-4 md:p-6 shadow-sm flex gap-4 items-start">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img src={f.image} alt={f.name} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <div className="text-sm md:text-lg font-semibold">{f.name}</div>
                    <div className="text-xs md:text-sm text-gray-500">{f.role}</div>
                    <p className="mt-2 text-xs md:text-sm text-gray-600">{f.bio}</p>
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

