import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StateSwitcher from '../components/StateSwitcher';
import { useState, useMemo } from 'react';
import ScrollToTop from '../pages/ScrollToTop';
import image from "../assets/donbosco.avif";
import image2 from "../assets/corridor.avif";
import image3 from "../assets/garden.avif";
import { Link } from 'react-router-dom';

const MainLayout = () => {
  const states = [
    { state: "hs", image: image, label: "HSLC" },
    { state: "hr", image: image2, label: "HR" },
    { state: "jb", image: image3, label: "JB" },
  ];
  const [state, setState] = useState("hs");
  const [showAdmissionNotice, setShowAdmissionNotice] = useState(true);

  const themeByState = {
    hs: { primary: "#059669", primarySoft: "rgba(5,150,105,0.08)", neutralText: "#374151" },
    hr: { primary: "#1d4ed8", primarySoft: "rgba(37,99,235,0.08)", neutralText: "#1f2937" },
    jb: { primary: "#d97706", primarySoft: "rgba(217,119,6,0.12)", neutralText: "#3f2a1c" },
  };

  const currentTheme = useMemo(() => themeByState[state] || themeByState.hs, [state]);

  const admissionNotice = {
    enabled: true,
    title: "Admissions 2026-2027",
    body: "Apply now for the upcoming session. Limited seats available. Click the botton below to  view admission process",
    cta: "Go to Admissions",
    href: "/admissions",
  };

  return (
      <div
        className="min-h-screen flex flex-col"
        style={{
          "--primary": currentTheme.primary,
          "--primary-soft": currentTheme.primarySoft,
          "--neutral-text": currentTheme.neutralText,
        }}
      >
        <Navbar />
        <ScrollToTop />
        <main className="">
          <Outlet context={{state, setState, states}}/>
        </main>
        <Footer />
        <StateSwitcher state={state} setState={setState} states={states} />
        {admissionNotice.enabled && showAdmissionNotice && (
          <div className="fixed bottom-4 right-4 z-40 max-w-[300px]">
            <div
              className="rounded-2xl border bg-white shadow-xl p-4 md:p-5"
              style={{
                borderColor: currentTheme.primarySoft,
                boxShadow: `0 10px 40px -12px ${currentTheme.primarySoft}`,
              }}
            >
              <div className="flex items-start gap-3">

                <div className="flex-1">
                  <div className="text-sm flex items-center gap-2 font-semibold" style={{ color: currentTheme.primary }}>
  
                    {admissionNotice.title}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{admissionNotice.body}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Link
                      to={admissionNotice.href}
                      className="inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold text-white shadow transition"
                      style={{ background: currentTheme.primary }}
                    >
                      {admissionNotice.cta}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setShowAdmissionNotice(false)}
                      className="text-xs text-gray-500 hover:text-gray-700"
                      aria-label="Dismiss admission notice"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default MainLayout;

