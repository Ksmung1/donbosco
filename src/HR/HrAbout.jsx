import React from "react";
import { Award, Eye, Target } from "lucide-react";
import mary from "../assets/mary.avif";
import classroom from "../assets/class2.avif";
import garden from "../assets/garden2.avif";
import hall from "../assets/hall2.avif";
import hall2 from "../assets/hall2.avif";
import ground from "../assets/ground.avif";
import lab18 from "../assets/lab18.avif";
import { Link, useNavigate } from "react-router-dom";

const webState = {
  state: "Don Bosco HR",
  from: "Classes X - XII",
  about:
    "An inclusive learning environment focused on academic rigor and character development for higher secondary students.",
  image: hall,
  description2:
    "We nurture curiosity and build skills through a balanced curriculum, modern facilities and a caring community that prepares students for higher education and life.",
};

const themeColors = {
  primary: "#1d4ed8",
  primarySoft: "rgba(37,99,235,0.12)",
  neutralText: "#1f2937",
};

const missions = [
  {
    icon: <Target className="w-8 h-8 text-(--primary,#1d4ed8)" />,
    title: "Academic Excellence",
    description:
      "Rigorous curriculum aligned with board standards, preparing students for competitive examinations and higher studies.",
    image: garden,
  },
  {
    icon: <Eye className="w-8 h-8 text-(--primary,#1d4ed8)" />,
    title: "Career Guidance",
    description:
      "Comprehensive career counseling and guidance to help students make informed decisions about their future paths.",
    image: classroom,
  },
  {
    icon: <Award className="w-8 h-8 text-(--primary,#1d4ed8)" />,
    title: "Holistic Development",
    description:
      "Balancing academics with extracurricular activities, leadership opportunities, and character building.",
    image: mary,
  },
]

const leaders = [
  {
    name: "Fr. John Doe",
    title: "Headmaster",
    image: mary,
    bio: "Committed to holistic development and academic excellence, Fr. John leads the school with decades of educational leadership.",
  },
];

const timelineEntries = [
  {
    year: "2005",
    title: "HR Section Established",
    description: "Launched the Higher Secondary section to provide quality education for Classes X-XII.",
    image: hall,
  },
  {
    year: "2012",
    title: "Enhanced Facilities",
    description: "Upgraded laboratories and added specialized facilities for science and commerce streams.",
    image: ground,
  },
  {
    year: "2021",
    title: "Career Guidance Program",
    description: "Introduced comprehensive career counseling and guidance services to help students make informed decisions.",
    image: lab18,
  },
];

const storyKeyframes = `
@keyframes storyFade {
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
`;

export default function HrAbout() {
  const navigate = useNavigate();
  return (
    <div
      className="text-gray-900"
      style={{
        "--primary": themeColors.primary,
        "--primary-soft": themeColors.primarySoft,
        "--neutral-text": themeColors.neutralText,
      }}
    >
      <style>{storyKeyframes}</style>
      {/* Hero / Intro */}
      <section className="bg-white py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p
                className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ background: "var(--primary-soft)", color: "var(--primary)" }}
              >
                About Us {webState.state}
              </p>

              <h1 className="mt-4 text-3xl max-w-md md:text-5xl font-extrabold tracking-tight">
                About <br />
                Don Bosco HR
              </h1>

              <p className="mt-4 text-xs text-gray-600 max-w-2xl">{webState.about}</p>
              <p className="mt-3 text-xs text-gray-600 max-w-2xl">{webState.description2}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  className="inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white shadow bg-(--primary,#1d4ed8) hover:opacity-95 transition"
                  onClick={() => navigate("/admissions")}
                >
                  Visit Admissions
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                  Learn more
                </button>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-md">
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={webState.image}
                  alt="Administration"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scroll through our milestones — like turning the pages of our story.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--primary,#1d4ed8) via-(--primary,#1d4ed8) to-gray-200" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-gray-50 via-gray-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-gray-50 via-gray-50 to-transparent" />

            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 md:mx-0 md:px-0">
              {timelineEntries.map((item, idx) => (
                <article
                  key={item.year}
                  className="min-w-[260px] sm:min-w-[320px] md:min-w-[420px] snap-center bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden"
                  style={{ animation: "storyFade 0.6s ease both", animationDelay: `${idx * 80}ms` }}
                >
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center px-3 py-1 rounded-full bg-(--primary-soft,rgba(37,99,235,0.12)) text-(--primary,#1d4ed8) text-xs font-semibold shadow">
                      Chapter {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="text-xs font-semibold text-(--primary,#1d4ed8) tracking-wide">{item.year}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="bg-gray-50 py-16 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Missions</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {missions.map((m) => (
                <article key={m.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="relative aspect-video md:aspect-4/3">
                    <img src={m.image} alt={m.title} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                    <div className="absolute left-4 bottom-4 bg-white/90 rounded-full p-3 shadow">
                      {m.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{m.title}</h3>
                    <p className="mt-3 text-gray-600">{m.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Leadership</h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {leaders.map((l) => (
                <div key={l.name} className="rounded-2xl bg-gray-50 p-6 shadow-sm flex gap-4 items-start">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                    <img src={l.image} alt={l.name} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{l.name}</div>
                    <div className="text-sm text-gray-500">{l.title}</div>
                    <p className="mt-2 text-gray-600 text-sm">{l.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities gallery (small) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[hall, classroom, garden, mary].map((src, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden bg-white shadow-sm">
                  <div className="aspect-video">
                    <img src={src} alt={`Facility ${idx + 1}`} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-2xl font-bold">Plan a Visit</h2>
            <p className="mt-3 text-gray-600">Schedule a campus tour or contact admissions to learn more about enrollment and programmes.</p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center bg-(--primary,#1d4ed8) text-white px-6 py-2 rounded-full font-medium shadow hover:opacity-95 transition">
                Contact Us
              </Link>
              <Link to="/admissions" className="inline-flex items-center border border-gray-200 px-6 py-2 rounded-full text-gray-700 hover:bg-gray-50 transition">
                Admissions Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

