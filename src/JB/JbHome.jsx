import { staffsData } from "../data/staffsData";
import { toppersData } from "../data/toppersData";
import { useState, useEffect, useRef } from "react";
import { Book, GraduationCap, Users } from "lucide-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import image from "../assets/ground3.avif";
import image2 from "../assets/park2.avif";
import image3 from "../assets/hall4.avif";
import { Link } from "react-router-dom";

const stats = { students: "300+", staffs: "15+", years: "20+" };

const slides = 
  {
    key: "building",
    label: "School",
    image: image,
    title: "Main Campus Building",
    description:
      "A vibrant and safe learning environment designed for young children with colorful classrooms, play areas, and child-friendly facilities.",
    state: "jb",
  }

const webState = {
  state: "Don Bosco JB",
  from: "Pre-Primary & Primary",
  description:
    "A nurturing learning environment designed for young children, focusing on play-based learning and foundational skills.",
  description2:
    "We create a joyful and safe space where children learn through exploration, play, and guided activities that build confidence and curiosity.",
};

const features = [
  {
    icon: <Book className="w-6 h-6" />,
    heading: "Play-Based Learning",
    content: "Learning through play, exploration, and hands-on activities that make education fun.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    heading: "Holistic Development",
    content: "Focusing on physical, emotional, social, and cognitive development.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    heading: "Safe & Nurturing",
    content: "Creating a secure, caring environment where every child feels valued.",
  },
];

const JbHome = () => {
  const filteredStaffs = staffsData.filter((t) => t.state === "pb" || t.state === "jb").slice(0, 6);
  const filteredToppers = toppersData
    .filter((t) => t.state === "pb" || t.state === "jb")
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);

  const sorted = [...filteredToppers].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (b.percent || 0) - (a.percent || 0);
  });

  const primary = "var(--primary, #f97316)";

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
            <h2 className="text-2xl md:text-5xl font-extrabold">What We <span className="text-[var(--primary,#f97316)]">Offer</span></h2>
            <p className="mt-2 text-xs md:text-md text-gray-600 max-w-2xl mx-auto">
              A joyful learning environment with play-based activities, creative exploration, and foundational skill development.
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
                <div className="flex items-center justify-left gap-2">
                  <div className="text-[var(--primary,#f97316)]">{ftr.icon}</div>
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
            <h1 className="text-2xl md:text-5xl font-extrabold text-center md:text-left leading-tight">
              Welcome to <br className="hidden md:block" /><span className="uppercase text-[var(--primary,#f97316)]">{webState.state}</span>
            </h1>
            <div className="max-w-md">
              <p className="text-sm text-center md:text-left text-gray-600 font-medium">From: {webState.from}</p>
              <p className="mt-3 text-justify text-sm md:text-lg text-gray-700">{webState.description}</p>
              <p className="mt-2 text-justify text-sm md:text-lg text-gray-700">{webState.description2}</p>
            </div>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              <Link
                to="/admissions"
                className="inline-block px-2 md:px-5 py-2 rounded-md bg-[var(--primary,#f97316)] text-white font-semibold shadow-sm hover:shadow-md transition"
              >
                Admissions
              </Link>
              <Link
                to="/contact"
                className="inline-block px-2 md:px-5 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden shadow-lg">
            <div className="aspect-video flex items-center overflow-hidden">
              <img
                src={slides.image}
                alt={'Main Campus Building'}
                className="object-cover rounded-xl w-full h-full items-center transform transition-transform duration-700"
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
              <div className="mt-2 md:mt-4 uppercase text-[10px] md:text-sm text-gray-500 tracking-wide">Teachers</div>
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
              <h2 className="text-2xl md:text-5xl font-extrabold">Our <span className="text-[var(--primary,#f97316)]">Teachers</span></h2>
              <Link to="/staff" className="text-xs mt-1 md:mt-2 md:text-sm text-gray-600 hover:text-[var(--primary,#f97316)]">
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
    </div>
  );
};

export default JbHome;

