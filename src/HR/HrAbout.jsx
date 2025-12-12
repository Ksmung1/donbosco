import React from "react";
import { Award, Eye, Target } from "lucide-react";
import mary from "../assets/mary.avif";
import classroom from "../assets/class2.avif";
import garden from "../assets/garden2.avif";
import hall from "../assets/hall2.avif";
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

const missions = [
  {
    icon: <Target className="w-8 h-8 text-[var(--primary,#2563eb)]" />,
    title: "Academic Excellence",
    description:
      "Rigorous curriculum aligned with board standards, preparing students for competitive examinations and higher studies.",
    image: garden,
  },
  {
    icon: <Eye className="w-8 h-8 text-[var(--primary,#2563eb)]" />,
    title: "Career Guidance",
    description:
      "Comprehensive career counseling and guidance to help students make informed decisions about their future paths.",
    image: classroom,
  },
  {
    icon: <Award className="w-8 h-8 text-[var(--primary,#2563eb)]" />,
    title: "Holistic Development",
    description:
      "Balancing academics with extracurricular activities, leadership opportunities, and character building.",
    image: mary,
  },
];

const stats = [
  { label: "Students", value: "600+" },
  { label: "Faculty", value: "20+" },
  { label: "Years", value: "20+" },
];

const leaders = [
  {
    name: "Fr. John Doe",
    title: "Headmaster",
    image: mary,
    bio: "Committed to holistic development and academic excellence, Fr. John leads the school with decades of educational leadership.",
  },
];

export default function HrAbout() {
  const navigate = useNavigate();
  return (
    <div className="text-gray-900">
      {/* Hero / Intro */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="inline-flex items-center rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary,#2563eb)]">
                  About {webState.state}
                </p>
                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {webState.state}
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl">{webState.about}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={()=>navigate('/admissions')} className="inline-flex items-center gap-2 rounded-full bg-[var(--primary,#2563eb)] px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition">
                    Visit Admissions
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                    Learn more
                  </button>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-md">
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={webState.image}
                    alt={`${webState.state} campus`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                  <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="mt-2 text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story / History */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div>
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Don Bosco HR was established to provide quality higher secondary education to students 
                  preparing for board examinations and higher studies. We focus on academic excellence, 
                  character formation, and career readiness.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">{webState.description2}</p>
              </div>
          </div>
          <div>
              <div className="rounded-3xl overflow-hidden shadow-md">
                <div className="relative aspect-video bg-gray-100">
                  <img src={hall} alt="School hall" className="object-cover w-full h-full" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Key milestones that shaped our growth and commitment to excellence</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary,#2563eb)] via-[var(--primary,#2563eb)] to-gray-200 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#2563eb)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] text-[var(--primary,#2563eb)] text-xs font-semibold mb-2">
                        2005
                      </div>
                      <h3 className="text-xl font-semibold mt-2 mb-2">HR Section Established</h3>
                      <p className="text-gray-600 leading-relaxed">Launched the Higher Secondary section to provide quality education for Classes X-XII.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#2563eb)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] text-[var(--primary,#2563eb)] text-xs font-semibold mb-2">
                        2012
                      </div>
                      <h3 className="text-xl font-semibold mt-2 mb-2">Enhanced Facilities</h3>
                      <p className="text-gray-600 leading-relaxed">Upgraded laboratories and added specialized facilities for science and commerce streams.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#2563eb)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(37,99,235,0.12))] text-[var(--primary,#2563eb)] text-xs font-semibold mb-2">
                        2021
                      </div>
                      <h3 className="text-xl font-semibold mt-2 mb-2">Career Guidance Program</h3>
                      <p className="text-gray-600 leading-relaxed">Introduced comprehensive career counseling and guidance services to help students make informed decisions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Missions</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {missions.map((m, i) => (
                <article key={m.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="relative aspect-video md:aspect-[4/3]">
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
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
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
              <Link to="/contact" className="inline-flex items-center bg-[var(--primary,#2563eb)] text-white px-6 py-2 rounded-full font-medium shadow hover:opacity-95 transition">
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

