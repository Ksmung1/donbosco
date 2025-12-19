import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import gallery from "../data/gallery";
import StateSwitcher from "./StateSwitcher";

// Helper function to get image from gallery by filename
const getImageFromGallery = (filename) => {
  const image = gallery.find(
    (item) =>
      item.file?.toLowerCase() === filename.toLowerCase() ||
      item.file?.toLowerCase().includes(filename.toLowerCase())
  );
  return image?.src || null;
};

/**
 * Group slides by "state" so each state has its own set of slides.
 * You can extend/fine-tune these arrays to have any number of slides per state.
 */
// Note: video import needs to remain as direct import since it's not in gallery
import video from "../assets/compressed.mp4";

const slidesByState = {
  hs: [
    {
      key: "building-hs",
      label: "School",
      image:
        getImageFromGallery("school-copy.avif") ||
        getImageFromGallery("school"),
      video: video,
      title: "Main Campus Building",
      description:
        "The main academic block with modern architecture, spacious corridors, and well-ventilated classrooms designed for focused learning.",
    },
    {
      key: "classroom-hs",
      label: "Classroom",
      image: getImageFromGallery("class.avif") || getImageFromGallery("class"),
      title: "Smart Classroom",
      description:
        "Technology-enabled classrooms with interactive boards, flexible seating, and engaging teaching tools for an immersive learning experience.",
    },
  ],
  hr: [
    {
      key: "classroom-hr",
      label: "Classroom",
      image: getImageFromGallery("park3.avif") || getImageFromGallery("park"),
      title: "Smart Classroom",
      description:
        "Technology-enabled classrooms with interactive boards, flexible seating, and engaging teaching tools for an immersive learning experience.",
    },
    {
      key: "ground-hr",
      label: "Playground",
      image:
        getImageFromGallery("ground2.avif") || getImageFromGallery("ground"),
      title: "Outdoor Activity Area",
      description:
        "Open spaces for extracurricular activities and informal gatherings that complement academic life.",
    },
  ],
  jb: [
    {
      key: "playground-jb",
      label: "Playground",
      image:
        getImageFromGallery("students.avif") || getImageFromGallery("students"),
      title: "Sports & Playground",
      description:
        "Expansive playground with football, basketball, athletics track, and dedicated zones for younger kids to play safely.",
    },
    {
      key: "building-jb",
      label: "School",
      image: getImageFromGallery("lab.avif") || getImageFromGallery("lab"),
      title: "Main Campus Building",
      description:
        "The main academic block with modern architecture, spacious corridors, and well-ventilated classrooms designed for focused learning.",
    },
  ],
};

const schoolName = "Don Bosco School";

const Slider = ({ state, states, setState }) => {
  // currentSlides is derived from the `state` prop
  const currentSlides = slidesByState[state];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isZooming, setIsZooming] = useState(true);
  const [isStateChanging, setIsStateChanging] = useState(false);
  const timeoutRef = useRef(null);
  const zoomTimeoutRef = useRef(null);
  const stateChangeTimeoutRef = useRef(null);
  const prevStateRef = useRef(state);

  const goTo = (index) => {
    if (!currentSlides.length) return;
    if (index < 0) index = currentSlides.length - 1;
    if (index >= currentSlides.length) index = 0;
    setCurrent(index);
  };

  const goPrev = () => goTo(current - 1);
  const goNext = () => goTo(current + 1);

  // smooth state change with fade-out/fade-in
  useEffect(() => {
    if (prevStateRef.current !== state && prevStateRef.current !== null) {
      // State changed - trigger smooth transition
      setIsStateChanging(true);
      setCurrent(0); // Reset to first slide immediately

      if (stateChangeTimeoutRef.current)
        clearTimeout(stateChangeTimeoutRef.current);

      // Wait for fade-out, then fade in new slides
      stateChangeTimeoutRef.current = setTimeout(() => {
        setIsStateChanging(false);
      }, 600); // Half of 1500ms transition for smooth crossfade

      prevStateRef.current = state;
    } else {
      // Initial load - no transition needed
      prevStateRef.current = state;
      setCurrent(0);
    }

    return () => {
      if (stateChangeTimeoutRef.current)
        clearTimeout(stateChangeTimeoutRef.current);
    };
  }, [state]);

  // opacity transition effect remains tied to `current`
  useEffect(() => {
    setIsTransitioning(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 200);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // zoom effect on image change
  useEffect(() => {
    setIsZooming(true);
    if (zoomTimeoutRef.current) clearTimeout(zoomTimeoutRef.current);

    zoomTimeoutRef.current = setTimeout(() => {
      setIsZooming(false);
    }, 600);

    return () => clearTimeout(zoomTimeoutRef.current);
  }, [current]);

  return (
    <div className="">
      {/* SLIDER */}
      <section className="w-full bg-blue-100 text-gray-900">
        <div className="relative mx-auto">
          {/* MAIN SLIDE AREA */}
          <div className="relative h-[620px]">
            {currentSlides.map((slide, index) => {
              const isActive = index === current && !isStateChanging;
              // During state change, show first slide (index 0) with relative positioning to maintain height
              const shouldMaintainHeight = isStateChanging && index === 0;
              const imgScale =
                isActive && isZooming ? "scale-105" : "scale-100";

              return (
                <article
                  key={slide.key}
                  className={`transition-opacity duration-[1500ms] ease-out ${
                    isActive
                      ? "opacity-100 relative z-10"
                      : shouldMaintainHeight
                      ? "opacity-0 relative z-0 pointer-events-none"
                      : "absolute inset-0 pointer-events-none opacity-0"
                  }`}
                >
                  <div className="relative h-[620px]  overflow-hidden">
                    {/* IMAGE */}
                    {slide.video && (
                      <video
                        src={slide.video}
                        autoPlay
                        muted
                        loop
                        className="h-full w-full object-cover  object-top transform transition-transform duration-[1000ms] ease-out ${imgScale}"
                      ></video>
                    )}{" "}
                    {
                      <img
                        src={slide.image}
                        alt={slide.label}
                        className={`h-full w-full object-cover  object-bottom transform transition-transform duration-[1000ms] ease-out ${imgScale}`}
                      />
                    }
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    <div
                      className={`absolute w-full mx-auto  flex inset-0 flex-col justify-center px-6 md:px-10 lg:px-20  text-white transform transition-all duration-[1200ms] ease-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <header className="space-y-2 max-w-xl -bottom-30">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                          {schoolName}
                        </p>
                        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                          {slide.title}
                        </h1>
                      </header>

                      <div className="mt-4 space-y-2 text-sm max-w-xl">
                        <h3 className="font-medium text-white/85">Overview</h3>
                        <p className="text-white/80">{slide.description}</p>
                      </div>

                      <div className="mt-5">
                        <Link
                          to="/about"
                          className="inline-flex items-center rounded-full bg-blue-500/95 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/30 hover:bg-blue-600 transition"
                        >
                          Learn more
                        </Link>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={goPrev}
                        className="flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-sm hover:bg-gray-100 hover:scale-[1.1] cursor-pointer transition"
                      >
                        <FaAngleLeft />
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        className="flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-800 shadow-sm hover:bg-gray-100 hover:scale-[1.1] cursor-pointer transition"
                      >
                        <FaAngleRight />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <StateSwitcher state={state} setState={setState} states={states} />
        </div>
      </section>
    </div>
  );
};

export default Slider;
