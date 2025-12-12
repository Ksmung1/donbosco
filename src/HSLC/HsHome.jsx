import { staffsData } from "../data/staffsData";
import { toppersData } from "../data/toppersData";
import { useState, useEffect, useRef } from "react";
import { Book, GraduationCap, Users } from "lucide-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import image from "../assets/ground.avif";
import image2 from "../assets/park.avif";
import image3 from "../assets/hall3.avif";
import { Link } from "react-router-dom";

/* ---------- Data & constants (kept from your original) ---------- */
const stats = { students: "500+", staffs: "10+", years: "20+" };

const slides = 
  {
    key: "building",
    label: "School",
    image: image,
    title: "Main Campus Building",
    description:
      "The main academic block with modern architecture, spacious corridors, and well-ventilated classrooms designed for focused learning.",
    state: "hs",
  }

const webState = {
  state: "Don Bosco HSLC",
  from: "Classes I - XII",
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

/* ---------- component ---------- */
const HsHome = () => {
  // data filtered for HS (keeps original approach)
  const filteredStaffs = staffsData.filter((t) => t.state === "hs").slice(0, 6); // show up to 6
  const filteredToppers = toppersData
    .filter((t) => t.state === "hs")
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);

  const sorted = [...filteredToppers].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (b.percent || 0) - (a.percent || 0);
  });


  const primary = "var(--primary, #059669)";

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
      <section className="py-5 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-5xl font-extrabold">What We <span className="text-[var(--primary,#059669)]">Offer</span></h2>
            <p className="mt-2 text-xs md:text-md text-gray-600 max-w-2xl mx-auto">
              High-quality programs, a supportive community, and a focus on student success.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((ftr, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 p-4 md:p-6 bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                role="article"
                aria-labelledby={`feature-${idx}`}
              >
                <div className="  flex items-center justify-left gap-2 ">
                  <div className="text-green-500">{ftr.icon}</div>
                  <h3 id={`feature-${idx}`} className="text-md md:text-lg font-semibold">
                  {ftr.heading}
                </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-600 flex-1">{ftr.content}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:py-24 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <h1 className=" text-2xl md:text-5xl font-extrabold text-center md:text-left leading-tight">
              Welcome to <br className="hidden md:block" /><span className="uppercase text-[var(--primary,#059669)]">Don Bosco HSLC</span>
            </h1>
            <div className="max-w-md">
            <p className="m text-sm text-center md:text-left text-gray-600 font-medium">From: Classes I - XII</p>
            <p className="mt-3 text-justify text-sm md:text-lg text-gray-700">An inclusive learning environment focused on academic rigor and character development.</p>
            <p className="mt-2 text-justify text-sm md:text-lg text-gray-700">We nurture curiosity and build skills through a balanced curriculum, modern facilities and a caring community.</p>

            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              <Link to="/admissions"
              title="Admissions"
                className="inline-block px-2 md:px-5 py-2 rounded-md bg-[var(--primary,#059669)] text-white font-semibold shadow-sm hover:shadow-md transition"
              >
                Admissions
              </Link>
              <Link to="/contact"
                href="/contact"
                title="contact"
                className="inline-block px-5 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
              >
                Contact
              </Link>
            </div>
          </div>


          <div className="relative overflow-hidden shadow-lg">
                  <div className="aspect-video flex items-center  overflow-hidden">
                    <img
                      src={slides.image}
                      alt={'Main Campus Building'}
                      className={` object-cover rounded-xl w-full h-full items-center transform transition-transform duration-700 `}
                    />
                  </div>

          </div>
        </div>
      </section>

      <section className="md:py-24 py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 md:gap-6 text-center">
            <div>
              <div className="text-2xl md:text-5xl font-extrabold">{stats.students}</div>
              <div className="mt-2 md:mt-4 uppercase text-[10px] md:text-sm text-gray-500 tracking-wide">Students</div>
            </div>
            <div>
              <div className="text-2xl md:text-5xl font-extrabold">{stats.staffs}</div>
              <div className="mt-2 md:mt-4 uppercase text-[10px] md:text-sm text-gray-500 tracking-wide">Faculty Members</div>
            </div>
            <div>
              <div className="text-2xl md:text-5xl font-extrabold">{stats.years}</div>
              <div className="mt-2 md:mt-4 uppercase text-[10px] md:text-sm text-gray-500 tracking-wide">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-24 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center flex-col justify-between mb-6">
              <h2 className="text-2xl md:text-5xl font-extrabold">Our <span className="text-[var(--primary,#059669)]">Teachers</span></h2>
              <Link to="/staff" className="text-xs mt-1 md:mt-2 md:text-sm text-gray-600 hover:text-(--primary,#059669)">
                View all staff →
              </Link>
            </div>

            <div className="grid gap-2 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {filteredStaffs.map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                      <div className="text-[10px] md:text-xs text-white/90 uppercase font-semibold mb-0.5 md:mb-1">
                        {item.position}
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-white">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>

 <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 text-center ">Board <span className="text-[var(--primary,#059669)]">Toppers</span></h2>
            <p className="mt-1 text-center text-xs md:mt-3 md:text-sm text-gray-500">All rank-1 achievers — celebrated by year</p>
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

                    {/* Percent (large badge) */}
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

        {/* Mobile stacked list */}
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
              <article key={`${t.name}-${t.year}-${i}`} className="p-3 py-2 bg-white rounded-lg border border-gray-100 shadow-md transition" aria-labelledby={`topper-${i}`}>
                <div className="flex items-center gap-2">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700 overflow-hidden">
                      {t.image ? <img src={t.image} alt={t.name} className="w-full h-full object-cover"/> : initials}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 id={`topper-${i}`} className="text-xs font-medium text-gray-900">{t.name}</h3>
                        <div className="text-[10px] text-gray-500">Rank: 1</div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-bold" style={{ color: primary }}>{percent}%</div>
                        <div className="text-[11px] font-semibold text-gray-400">{t.year}</div>
                      </div>
                    </div>

                    <p className="mt- text-[10px] md:font-md font-light text-gray-600">Congratulations on an outstanding achievement!</p>
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

export default HsHome;
