import { staffsData } from "../data/staffsData";
import { toppersData } from "../data/toppersData";
import { useState, useEffect, useRef } from "react";
import { Book, GraduationCap, Users } from "lucide-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import image from "../assets/ground.avif";
import image2 from "../assets/park.avif";
import image3 from "../assets/hall3.avif";

const stats = { students: "600+", staffs: "20+", years: "20+" };

const slides = {
    key: "building",
    label: "School",
    image: image,
    title: "Main Campus Building",
    description:
      "The main academic block with modern architecture, spacious corridors, and well-ventilated classrooms designed for focused learning.",
    state: "hs",
  }

const webState = {
  state: "Don Bosco HR",
  from: "Classes X-XII",
  description:
    "An inclusive learning environment focused on academic rigor and character development.",
  description2:
    "We nurture curiosity and build skills through a balanced curriculum, modern facilities and a caring community.",
};

const features = [
  {
    icon: <Book className="w-6 h-6" />,
    heading: "Quality Education",
    content: "Providing access to resources and diverse learning opportunities.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    heading: "Community Support",
    content: "Fostering unity, parent engagement and volunteerism.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    heading: "Empowering Students",
    content: "Equipping students to succeed academically and socially.",
  },
];

const HrHome = () => {
  const filteredStaffs = staffsData.filter((t) => t.state === "hs").slice(0, 6); // show up to 6
  const filteredToppers = toppersData
    .filter((t) => t.state === "hr")
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);

  const sorted = [...filteredToppers].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (b.percent || 0) - (a.percent || 0);
  });



  const primary = "var(--primary, #2563eb)";

  const [current, setCurrent] = useState(0);
  const [isZooming, setIsZooming] = useState(true);
  const zoomTimeoutRef = useRef(null);

  const goTo = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrent(index);
  };
  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  useEffect(() => {
    setIsZooming(true);
    if (zoomTimeoutRef.current) clearTimeout(zoomTimeoutRef.current);
    zoomTimeoutRef.current = setTimeout(() => {
      setIsZooming(false);
    }, 500);
    return () => clearTimeout(zoomTimeoutRef.current);
  }, [current]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  return (
    <div className="">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold">What We Offer</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              High-quality programs, a supportive community, and a focus on student success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((ftr, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 p-6 bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                role="article"
                aria-labelledby={`feature-${idx}`}
              >
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
                  <div className="text-green-500">{ftr.icon}</div>
                </div>
                <h3 id={`feature-${idx}`} className="text-lg font-semibold">
                  {ftr.heading}
                </h3>
                <p className="text-sm text-gray-600 flex-1">{ftr.content}</p>
                <div className="pt-2">
                  <button
                    className="text-sm font-medium inline-flex items-center gap-2 text-gray-700 hover:text-[var(--primary,#059669)]"
                    aria-label={`Learn more about ${ftr.heading}`}
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Welcome to <span className="text-[var(--primary,#059669)]">{webState.state}</span>
            </h1>
            <p className="mt-3 text-sm text-gray-600 font-medium">From: {webState.from}</p>
            <p className="mt-6 text-gray-700">{webState.description}</p>
            <p className="mt-3 text-gray-700">{webState.description2}</p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="/admissions"
                className="inline-block px-5 py-2 rounded-md bg-[var(--primary,#059669)] text-white font-semibold shadow-sm hover:shadow-md transition"
              >
                Admissions
              </a>
              <a
                href="/contact"
                className="inline-block px-5 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* carousel / visual */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div className="h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                    <img
                      src={slides.image}
                      alt={'Main Campus Building'}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover transform transition-transform duration-700 `}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                  </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold">{stats.students}</div>
              <div className="mt-2 uppercase text-xs text-gray-500 tracking-wide">Students</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold">{stats.staffs}</div>
              <div className="mt-2 uppercase text-xs text-gray-500 tracking-wide">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold">{stats.years}</div>
              <div className="mt-2 uppercase text-xs text-gray-500 tracking-wide">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-extrabold">Our Teachers</h2>
              <a href="/staff" className="text-sm text-gray-600 hover:text-[var(--primary,#059669)]">
                View all staff →
              </a>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {filteredStaffs.map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-3">
                    <div className="text-xs text-gray-500 uppercase font-semibold">{item.position}</div>
                    <div className="mt-1 font-medium">{item.name}</div>
                    {item.email && <div className="mt-1 text-xs text-gray-500">{item.email}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

 <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Toppers</h2>
            <p className="mt-1 text-sm text-gray-500">All rank-1 achievers — celebrated by year</p>
          </div>

          <div className="inline-flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft,rgba(5,150,105,0.08))] px-3 py-1 text-sm">
              <svg className="w-4 h-4 text-[var(--primary,#059669)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2l2.9 6.4L22 9.2l-5 4.1L18 22l-6-3.4L6 22l1-8.7L2 9.2l7.1-0.8L12 2z" fill="currentColor"/>
              </svg>
              <span className="text-xs text-[var(--primary,#059669)] font-medium">Top Achievers</span>
            </div>
          </div>
        </div>

        {/* Desktop table */}
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
              {sorted.map((t, i) => {
                const percent = Number(t.percent) || 0;
                const initials = (t.name || "")
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();

                return (
                  <tr key={`${t.name}-${t.year}-${i}`} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-white transition`}>
                    {/* Student */}
                    <td className="px-4 py-4 align-middle">
                      <div className="flex items-center gap-3">
                        {/* avatar or initials */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-700 font-semibold">
                          {t.image ? (
                            <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            initials
                          )}
                        </div>

                        <div>
                          <div className="text-sm font-medium text-gray-900">{t.name}</div>
                          <div className="text-xs text-gray-500">Rank: 1</div>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 align-middle w-40">
                      <div className="flex items-center gap-4">


                        <div>
                          <div className="text-sm font-medium text-gray-900">{percent}%</div>
                          <div className="text-xs text-gray-400">Excellent performance</div>
                        </div>
                      </div>
                    </td>

                    {/* Year */}
                    <td className="px-4 py-4 align-middle w-28">
                      <div className="text-sm font-medium text-gray-700">{t.year}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-3">
          {sorted.map((t, i) => {
            const percent = Number(t.percent) || 0;
            const initials = (t.name || "")
              .split(" ")
              .map((s) => s[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();

            return (
              <article key={`${t.name}-${t.year}-${i}`} className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition" aria-labelledby={`topper-${i}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700 overflow-hidden">
                      {t.image ? <img src={t.image} alt={t.name} className="w-full h-full object-cover"/> : initials}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 id={`topper-${i}`} className="text-sm font-medium text-gray-900">{t.name}</h3>
                        <div className="text-xs text-gray-500">Rank: 1</div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-extrabold" style={{ color: primary }}>{percent}%</div>
                        <div className="text-xs text-gray-400">{t.year}</div>
                      </div>
                    </div>

                    <p className="mt-3 text-sm md:font-md font-light text-gray-600">Congratulations on an outstanding achievement!</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
};

export default HrHome;
