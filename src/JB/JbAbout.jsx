import React from "react";
import { Award, Eye, Target } from "lucide-react";
import mary from "../assets/mary2.avif";
import classroom from "../assets/class5.avif";
import garden from "../assets/garden2.avif";
import hall from "../assets/hall3.avif";
import { Link, useNavigate } from "react-router-dom";

const webState = {
  state: "Don Bosco JB",
  from: "Pre-Primary & Primary",
  about:
    "A nurturing learning environment designed for young children, focusing on play-based learning, creativity, and foundational skills.",
  image: hall,
  description2:
    "We create a joyful and safe space where children learn through exploration, play, and guided activities that build confidence and curiosity.",
};

const missions = [
  {
    icon: <Target className="w-8 h-8 text-[var(--primary,#f97316)]" />,
    title: "Play-Based Learning",
    description:
      "Learning through play, exploration, and hands-on activities that make education fun and engaging for young minds.",
    image: garden,
  },
  {
    icon: <Eye className="w-8 h-8 text-[var(--primary,#f97316)]" />,
    title: "Holistic Development",
    description:
      "Focusing on physical, emotional, social, and cognitive development to build well-rounded individuals.",
    image: classroom,
  },
  {
    icon: <Award className="w-8 h-8 text-[var(--primary,#f97316)]" />,
    title: "Safe & Nurturing",
    description:
      "Creating a secure, caring environment where every child feels valued, respected, and encouraged to grow.",
    image: mary,
  },
];

const stats = [
  { label: "Students", value: "300+" },
  { label: "Teachers", value: "15+" },
  { label: "Years", value: "20+" },
];

const leaders = [
  {
    name: "Fr. John Doe",
    title: "Headmaster",
    image: mary,
    bio: "Committed to creating a joyful learning environment where every child can thrive and discover their potential.",
  },
];

export default function JbAbout() {
  const navigate = useNavigate();
  return (
    <div className="text-gray-900">
      {/* Hero / Intro */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
              <div>
                <p className="inline-flex items-center rounded-full bg-[var(--primary-soft,rgba(249,115,22,0.12))] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--primary,#f97316)]">
                  About {webState.state}
                </p>
                <h1 className="mt-4 text-2xl md:text-5xl font-extrabold tracking-tight">
                  {webState.state}
                </h1>
                <p className="mt-4 text-xs md:text-md text-gray-600 max-w-xl">{webState.about}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={()=>navigate('/admissions')} className="inline-flex items-center gap-2 rounded-full bg-[var(--primary,#f97316)] px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-white shadow hover:opacity-95 transition">
                    Visit Admissions
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
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
      <section className="bg-gray-50 py-5 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm text-center">
                  <div className="text-2xl md:text-5xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="mt-2 text-xs md:text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story / History */}
      <section className="bg-white py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <div>
                <h2 className="text-2xl md:text-5xl font-extrabold">Our Story</h2>
                <p className="mt-4 text-xs md:text-md text-gray-600 leading-relaxed">
                  Don Bosco JB was established to provide quality early childhood education in a nurturing and 
                  stimulating environment. We focus on play-based learning, creativity, and building strong 
                  foundations for future learning.
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
      <section className="bg-gray-50 py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-extrabold mb-3">Our Journey</h2>
            <p className="text-xs md:text-md text-gray-600 max-w-2xl mx-auto">Key milestones that shaped our growth and commitment to excellence</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary,#f97316)] via-[var(--primary,#f97316)] to-gray-200 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#f97316)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(249,115,22,0.12))] text-[var(--primary,#f97316)] text-xs font-semibold mb-2">
                        2004
                      </div>
                      <h3 className="text-md md:text-xl font-semibold mt-2 mb-2">JB Section Established</h3>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Launched the Junior Basic section to provide quality early childhood education.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#f97316)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(249,115,22,0.12))] text-[var(--primary,#f97316)] text-xs font-semibold mb-2">
                        2015
                      </div>
                      <h3 className="text-xl font-semibold mt-2 mb-2">Enhanced Play Areas</h3>
                      <p className="text-gray-600 leading-relaxed">Added dedicated play areas, activity rooms, and child-friendly facilities.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-0 w-4 h-4 rounded-full bg-[var(--primary,#f97316)] border-4 border-white shadow-lg z-10 hidden md:block"></div>
                
                {/* Content card */}
                <div className="ml-0 md:ml-16 flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--primary-soft,rgba(249,115,22,0.12))] text-[var(--primary,#f97316)] text-xs font-semibold mb-2">
                        2022
                      </div>
                      <h3 className="text-xl font-semibold mt-2 mb-2">Modern Learning Tools</h3>
                      <p className="text-gray-600 leading-relaxed">Introduced interactive learning tools and digital resources for enhanced early education.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="bg-gray-50 py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Our Missions</h2>
            <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
              {missions.map((m, i) => (
                <article key={m.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="relative aspect-video md:aspect-[4/3]">
                    <img src={m.image} alt={m.title} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                    <div className="absolute left-4 bottom-4 bg-white/90 rounded-full p-3 shadow">
                      {m.icon}
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <h3 className="text-md md:text-xl font-semibold">{m.title}</h3>
                    <p className="mt-3 text-xs md:text-sm text-gray-600">{m.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-5 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Leadership</h2>

            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {leaders.map((l) => (
                <div key={l.name} className="rounded-2xl bg-gray-50 p-4 md:p-6 shadow-sm flex gap-4 items-start">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img src={l.image} alt={l.name} className="object-cover w-full h-full" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <div className="text-sm md:text-lg font-semibold">{l.name}</div>
                    <div className="text-xs md:text-sm text-gray-500">{l.title}</div>
                    <p className="mt-2 text-xs md:text-sm text-gray-600">{l.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities gallery (small) */}
      <section className="bg-gray-50 py-5 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-center md:text-left">Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
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
      <section className="bg-white py-5 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold">Plan a Visit</h2>
            <p className="mt-3 text-xs md:text-md text-gray-600">Schedule a campus tour or contact admissions to learn more about enrollment and programmes.</p>

            <div className="mt-6 flex items-center justify-center gap-3 md:gap-4">
              <Link to="/contact" className="inline-flex items-center bg-[var(--primary,#f97316)] text-white px-2 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium shadow hover:opacity-95 transition">
                Contact Us
              </Link>
              <Link to="/admissions" className="inline-flex items-center border border-gray-200 px-2 md:px-6 py-2 rounded-full text-xs md:text-sm text-gray-700 hover:bg-gray-50 transition">
                Admissions Info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

