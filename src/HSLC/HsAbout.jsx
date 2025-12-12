import React from "react";
import { Award, Eye, Target } from "lucide-react";
import mary from "../assets/mary.avif";
import classroom from "../assets/class.avif";
import garden from "../assets/garden.avif";
import hall from "../assets/hall.avif";
import { Link, useNavigate } from "react-router-dom";

const webState = {
  state: "Don Bosco HSLC",
  from: "Classes I - XII",
  about:
    "A mission-driven school committed to academic excellence, character formation, and service to community.",
  image: hall,
  description2:
    "Our community values are rooted in respect, service, and the pursuit of knowledge. We blend strong academics with character formation and extracurricular opportunity.",
};

const missions = [
  {
    icon: <Target className="w-8 h-8 text-[var(--primary,#059669)]" />,
    title: "Our Educational Philosophy",
    description:
      "Mould lifelong learners through a progressive curriculum, inquiry-based teaching and a broad co-curricular programme.",
    image: garden,
  },
  {
    icon: <Eye className="w-8 h-8 text-[var(--primary,#059669)]" />,
    title: "Character & Leadership",
    description:
      "Develop responsible leaders grounded in values, empathy and a strong sense of civic duty.",
    image: classroom,
  },
  {
    icon: <Award className="w-8 h-8 text-[var(--primary,#059669)]" />,
    title: "Faith & Community",
    description:
      "Foster a compassionate community where faith, service and learning go hand-in-hand.",
    image: mary,
  },
];

const stats = [
  { label: "Students", value: "2000+" },
  { label: "Faculty", value: "50+" },
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

export default function HsAbout() {
  const navigate = useNavigate();
  return (
    <div className="text-gray-900">
      {/* Hero / Intro */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="inline-flex items-center rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary,#059669)]">
                  About {webState.state}
                </p>
                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {webState.state}
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl">{webState.about}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={()=>navigate('/admissions')} className="inline-flex items-center gap-2 rounded-full bg-[var(--primary,#059669)] px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition">
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
                  Established in 2003, Don Bosco HSLC started with a single goal: to offer quality
                  education to the community. Over the years we have grown into a thriving school
                  with a strong focus on academics, character building and community service.
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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary,#059669)] via-[var(--primary,#059669)] to-gray-200 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#059669)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] text-[var(--primary,#059669)] text-xs font-semibold mb-2">
                        2003
                      </div>
                      <h3 className="text-xl font-semibold mt-2 mb-2">Founded</h3>
                      <p className="text-gray-600 leading-relaxed">Started with the first cohort of students in a small campus, laying the foundation for excellence in education.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#059669)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] text-[var(--primary,#059669)] text-xs font-semibold mb-2">
                        2010
                      </div>
                      <h3 className="text-xl font-semibold mt-2 mb-2">Expanded Campus</h3>
                      <p className="text-gray-600 leading-relaxed">Added new science labs and the sports ground, expanding our facilities to support comprehensive learning and development.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#059669)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] text-[var(--primary,#059669)] text-xs font-semibold mb-2">
                        2020
                      </div>
                      <h3 className="text-xl font-semibold mt-2 mb-2">Modern Facilities</h3>
                      <p className="text-gray-600 leading-relaxed">Introduced smart classrooms and digital resources, embracing technology to enhance the learning experience for all students.</p>
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
              <Link to="/contact" className="inline-flex items-center bg-[var(--primary,#059669)] text-white px-6 py-2 rounded-full font-medium shadow hover:opacity-95 transition">
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
