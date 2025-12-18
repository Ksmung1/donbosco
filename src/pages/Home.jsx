import React, { useState, useEffect, useRef } from "react";
import image from "../assets/school.avif";
import fatherImg from "../assets/father3.avif";
import HsHome from "../HSLC/HsHome";
import { useOutletContext } from "react-router-dom";
import HrHome from "../HR/HrHome";
import JbHome from "../JB/JbHome";
import Slider from "../components/Slider";

const informations = [
  {
    id: 1,
    date: "2025-12-07",
    time: "03:00 P.M",
    title: "Information for all Classes ",
    content:
      "An orientation session on SWAYAM and NPTEL online courses was organized for the I MBA students to familiarize them with the vast learning opportunities offered through these national digital education platforms..",
    image: image,
  },
];

const THEME = {
  hs: { color: "#059669", soft: "rgba(5,150,105,0.12)", circle: "rgba(5,150,105,0.55)" }, // green
  hr: { color: "#2563eb", soft: "rgba(37,99,235,0.12)", circle: "rgba(37,99,235,0.55)" }, // blue
  jb: {
    color: "#f97316", // vibrant orange - perfect for kids section
    soft: "rgba(249,115,22,0.12)",
    circle: "rgba(249,115,22,0.55)",
  }
  
};

function useApplyTheme(stateKey) {
  useEffect(() => {
    const t = THEME[stateKey] || THEME.hs;
    const root = document.documentElement;
    root.style.setProperty("--primary", t.color);
    root.style.setProperty("--primary-soft", t.soft);
    root.style.setProperty("--primary-circle", t.circle);
    root.setAttribute("data-theme", stateKey);
  }, [stateKey]);
}

function useImageLoaded(src) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!src) {
      setLoaded(true);
      return;
    }
    setLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setLoaded(true);
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  return loaded;
}

const Home = () => {
  const {state, setState, states} = useOutletContext()
 console.log(state)

  const [openDetailsId, setOpenDetailsId] = useState(null);



  useApplyTheme(state);


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-700">
      {/* Slider */}
      <Slider state={state} setState={setState} states={states} />

      {/* Information */}
      <section
        className="relative w-full bg-gray-100 py-10  md:py-24 text-gray-900 overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 w-[100px] h-[100px] rounded-full blur-3xl opacity-40"
          style={{
            background: "var(--primary-circle)",
            transition: "background 700ms ease, opacity 500ms ease",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, var(--primary-soft) 0%, rgba(255,255,255,1) 70%)",
            transition: "background 700ms ease",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
            <h2 className="text-2xl md:text-5xl  font-extrabold">School <span className="text-(--primary,#059669)">Information</span></h2>
            <p className="mt-2 text-xs md:text-md text-gray-600 max-w-2xl mx-auto">
              High-quality programs, a supportive community, and a focus on student success.
            </p>
          </div>


            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {informations.map((info) => {
                const loaded = useImageLoaded(info.image);

                return (
                  <article
                    key={info.id}
                    className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg bg-white transition-shadow duration-300 flex flex-col"
                    aria-labelledby={`info-${info.id}`}
                  >
                    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                      {!loaded && (
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url('${info.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "blur(8px) saturate(.8)",
                            transform: "scale(1.03)",
                          }}
                          aria-hidden
                        />
                      )}

                      <img
                        src={info.image}
                        alt={info.title}
                        loading="lazy"
                        decoding="async"
                        className={`w-full  aspect-video object-cover block transition-opacity duration-700 ${
                          loaded ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      <span
                        className="absolute bottom-2 left-2 text-xs font-semibold text-white px-2 py-1 rounded"
                        style={{ background: "rgba(0,0,0,0.45)" }}
                      >
                        {info.date}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col gap-2">
                      <h3 id={`info-${info.id}`} className="font-semibold text-md">
                        {info.title}
                      </h3>

                      <div className="text-sm text-gray-600">
                        {openDetailsId === info.id ? (
                          <>
                            <p>{info.content}</p>
                            <button
                              onClick={() => setOpenDetailsId(null)}
                              className="mt-2 text-sm underline text-(--primary)"
                              style={{ transition: "color 400ms ease" }}
                            >
                              Show less
                            </button>
                          </>
                        ) : (
                          <>
                            <p>
                              {info.content.slice(0, 110)}
                              {info.content.length > 110 ? "..." : ""}
                            </p>
                            <button
                              onClick={() => setOpenDetailsId(info.id)}
                              className="mt-2 text-sm font-medium"
                              style={{ color: "var(--primary)", transition: "color 400ms ease" }}
                            >
                              Read more
                            </button>
                          </>
                        )}
                      </div>


                    </div>
                  </article>
                );
              })}
            </div>
          </div>
      </section>

      {/* HS / HR / JB Contents */}
      <section className="">
        <div>
          {state === "hs" ? (
            <HsHome />
          ) : state === "hr" ? (
            <HrHome/>
          ) : state === "jb" ? (
            <JbHome/>
          ) : (
            <HsHome />
          )}
        </div>


      </section>

      {/* Fathers Message */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">

            <h2 className="mt-3 text-2xl md:text-5xl text-left font-extrabold">
              Principal's <span className="text-(--primary,#059669)">Message</span>
            </h2>
          </div>

          <div className="flex md:flex-row flex-col gap-10 items-center">
            <div className="relative">
              <div className="relative w-full md:w-120 overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-gray-50">
                <img
                  src={fatherImg}
                  alt="Father's portrait"
                  className="w-full h-full object-cover "
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="space-y-4">
              {/* <p className="text-base leading-relaxed text-gray-800">Dear Friends</p> */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-gray-800">
                “Education is not just the transfer of knowledge—it is an invitation to grow in character, kindness, and purpose.
                At Don Bosco, we walk with every child so they discover their gifts and serve others with joy.”
              </blockquote>
              <div className="h-px bg-linear-to-r from-(--primary,#059669) via-(--primary-soft,rgba(5,150,105,0.1)) to-transparent" />
              <div>
                <p className="text-base md:text-lg font-semibold text-gray-900">Rev. Fr. Stephen Baite</p>
                <p className="text-sm text-gray-600">Principal, Don Bosco</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
